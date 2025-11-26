import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
    X,
    Loader2,
    CheckCircle2,
    AlertCircle,
    ArrowLeft,
    ShieldCheck,
    ScrollText,
} from "lucide-react";

// --- CONFIGURATION ---
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function MasterclassPopup({ manualOpen, onManualClose }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showTerms, setShowTerms] = useState(false); // Toggle between Form and T&C
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        agreement: false,
    });
    const [errors, setErrors] = useState({});

    // Regex Patterns
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // --- Watch for Manual Trigger ---
    useEffect(() => {
        if (manualOpen) {
            setIsOpen(true);
            setShowTerms(false); // Reset to form view
        }
    }, [manualOpen]);

    // --- Load reCAPTCHA ---
    useEffect(() => {
        const scriptId = "recaptcha-v3-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    // --- Timer Logic ---
    useEffect(() => {
        if (manualOpen) return;
        const alreadyShown = localStorage.getItem(
            "masterclass_popup_interacted"
        );
        const lastInteractedAt = localStorage.getItem(
            "masterclass_popup_interacted_at"
        );
        const now = Date.now();

        const shouldShow =
            !alreadyShown ||
            (lastInteractedAt &&
                ((alreadyShown === "closed" &&
                    now - parseInt(lastInteractedAt) > 5 * 60 * 1000) ||
                    (alreadyShown === "success" &&
                        now - parseInt(lastInteractedAt) >
                            2 * 60 * 60 * 1000)));

        if (shouldShow) {
            const timer = setTimeout(() => setIsOpen(true), 15000);
            return () => clearTimeout(timer);
        }
    }, [manualOpen]);

    // Prevent scrolling
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        setShowTerms(false);
        if (onManualClose) onManualClose();
        localStorage.setItem("masterclass_popup_interacted", "closed");
        localStorage.setItem(
            "masterclass_popup_interacted_at",
            Date.now().toString()
        );
    };

    const handleTermsAgree = () => {
        setFormData((prev) => ({ ...prev, agreement: true }));
        if (errors.agreement)
            setErrors((prev) => ({ ...prev, agreement: null }));
        setShowTerms(false); // Go back to form
    };

    // --- Form Logic ---
    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim() || formData.name.length < 2)
            newErrors.name = "Name is required";
        if (!emailRegex.test(formData.email))
            newErrors.email = "Valid email is required";
        if (!phoneRegex.test(formData.phone))
            newErrors.phone = "Valid 10-digit mobile number required";
        if (!formData.agreement)
            newErrors.agreement = "You must agree to the terms";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
            if (value.length > 10) return;
        }
        setFormData((prev) => ({ ...prev, [name]: val }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        setStatus(null);

        try {
            let recaptchaToken = "";
            if (window.grecaptcha) {
                try {
                    await new Promise((resolve) =>
                        window.grecaptcha.ready(() => resolve())
                    );
                    recaptchaToken = await window.grecaptcha.execute(
                        RECAPTCHA_SITE_KEY,
                        { action: "submit" }
                    );
                } catch (recaptchaError) {
                    console.error("reCAPTCHA failed:", recaptchaError);
                }
            }

            const payload = { ...formData, recaptcha_token: recaptchaToken };
            const response = await fetch(
                "https://learnvera.com/tools/register-masterclass.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );
            const data = await response.json();

            if (response.ok && data.success) {
                setStatus("success");
                setMessage(
                    "Registration successful! Our team will contact you shortly."
                );
                localStorage.setItem("masterclass_popup_interacted", "success");
                localStorage.setItem(
                    "masterclass_popup_interacted_at",
                    Date.now().toString()
                );
                setTimeout(() => handleClose(), 3000);
            } else {
                throw new Error(data.error || "Registration failed");
            }
        } catch (error) {
            setStatus("error");
            setMessage(
                error.message || "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-scaleIn border-t-4 border-blue-600 flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20"
                >
                    <X size={20} />
                </button>

                {/* --- VIEW 1: TERMS AND CONDITIONS --- */}
                {showTerms ? (
                    <div className="flex flex-col h-full">
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <button
                                onClick={() => setShowTerms(false)}
                                className="flex items-center text-sm text-slate-500 hover:text-blue-600 mb-2 transition-colors"
                            >
                                <ArrowLeft size={16} className="mr-1" /> Back
                            </button>
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <ShieldCheck
                                    className="text-blue-600"
                                    size={24}
                                />
                                Data Usage Consent
                            </h3>
                        </div>

                        <div className="p-6 overflow-y-auto custom-scrollbar text-sm text-slate-600 leading-relaxed space-y-4">
                            <p className="font-medium text-slate-800">
                                By clicking "I Agree", you acknowledge and
                                consent that:
                            </p>

                            <ol className="list-decimal pl-4 space-y-3 marker:text-blue-600 marker:font-bold">
                                <li>
                                    <strong>Voluntary Submission:</strong> You
                                    voluntarily submit your personal information
                                    (name, email, phone, etc.) to Learnvera (an
                                    initiative by Shinewell Digital Solutions
                                    Pvt. Ltd.).
                                </li>
                                <li>
                                    <strong>Purpose:</strong> We are authorized
                                    to use your data for course communication,
                                    marketing, workshops updates, and career
                                    opportunities.
                                </li>
                                <li>
                                    <strong>Channels:</strong> We may contact
                                    you via Email, WhatsApp, SMS, Phone calls,
                                    or Online retargeting.
                                </li>
                                <li>
                                    <strong>Community:</strong> You consent to
                                    being added to Learnvera WhatsApp
                                    communities/groups for study materials and
                                    updates.
                                </li>
                                <li>
                                    <strong>Privacy:</strong> Your data will{" "}
                                    <strong>not be sold</strong> to unrelated
                                    third parties. It is only shared with
                                    operational tools (like CRM/Email services).
                                </li>
                                <li>
                                    <strong>Opt-Out:</strong> You can opt-out of
                                    marketing or leave groups at any time.
                                </li>
                                <li>
                                    <strong>Confidentiality:</strong> Data is
                                    used solely to enhance your learning and
                                    career support.
                                </li>
                            </ol>
                        </div>

                        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                            <button
                                onClick={handleTermsAgree}
                                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 size={16} />I Understand & Agree
                            </button>
                        </div>
                    </div>
                ) : (
                    /* --- VIEW 2: REGISTRATION FORM (Default) --- */
                    <>
                        <div className="text-center pt-8 pb-2 px-8 flex-shrink-0">
                            <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                                Register For A <br />
                                <span className="text-blue-600">
                                    Free Masterclass
                                </span>
                            </h3>
                            <p className="text-slate-500 text-sm mt-2">
                                Unlock your potential with expert guidance.
                                Spots filling fast!
                            </p>
                        </div>

                        <div className="p-8 pt-6 overflow-y-auto">
                            {status === "success" ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                        <CheckCircle2
                                            size={32}
                                            className="text-green-600"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                                        You're In!
                                    </h4>
                                    <p className="text-slate-600">{message}</p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name *"
                                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                                                errors.name
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-slate-200 focus:ring-blue-100 focus:border-blue-400"
                                            } focus:outline-none focus:ring-4 transition-all text-sm font-medium`}
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address *"
                                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                                                errors.email
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-slate-200 focus:ring-blue-100 focus:border-blue-400"
                                            } focus:outline-none focus:ring-4 transition-all text-sm font-medium`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-4 top-3.5 text-slate-400 font-medium text-sm">
                                            +91
                                        </span>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Mobile Number *"
                                            className={`w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border ${
                                                errors.phone
                                                    ? "border-red-400 focus:ring-red-200"
                                                    : "border-slate-200 focus:ring-blue-100 focus:border-blue-400"
                                            } focus:outline-none focus:ring-4 transition-all text-sm font-medium`}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs mt-1 ml-1">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    {/* Updated Checkbox Area */}
                                    <div className="flex items-start gap-3 mt-2">
                                        <div className="relative flex items-center pt-0.5">
                                            <input
                                                type="checkbox"
                                                name="agreement"
                                                id="terms-agreement"
                                                checked={formData.agreement}
                                                onChange={handleChange}
                                                className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 shadow transition-all checked:border-blue-600 checked:bg-blue-600 hover:shadow-md"
                                            />
                                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3 w-3"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <label
                                            htmlFor="terms-agreement"
                                            className="text-xs text-slate-500 cursor-pointer select-none leading-tight"
                                        >
                                            I agree to All{" "}
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowTerms(true)
                                                }
                                                className="text-blue-600 hover:underline font-semibold focus:outline-none"
                                            >
                                                Terms and Conditions
                                            </button>{" "}
                                            and authorize LearnVera to contact
                                            me.
                                        </label>
                                    </div>
                                    {errors.agreement && (
                                        <p className="text-red-500 text-xs ml-1">
                                            {errors.agreement}
                                        </p>
                                    )}

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-xs font-medium">
                                            <AlertCircle size={14} />
                                            <span>{message}</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2
                                                    size={18}
                                                    className="animate-spin"
                                                />
                                                Registering...
                                            </>
                                        ) : (
                                            "Register Now"
                                        )}
                                    </button>

                                    <p className="text-[10px] text-slate-400 text-center mt-2">
                                        This site is protected by reCAPTCHA and
                                        the Google{" "}
                                        <a
                                            href="https://policies.google.com/privacy"
                                            className="text-blue-500 hover:underline mx-1"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Privacy Policy
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="https://policies.google.com/terms"
                                            className="text-blue-500 hover:underline mx-1"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Terms of Service
                                        </a>{" "}
                                        apply.
                                    </p>
                                </form>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
}
