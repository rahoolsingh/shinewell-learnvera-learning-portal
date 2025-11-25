import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// --- CONFIGURATION ---
// Replace this with your actual Google reCAPTCHA v3 Site Key
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function MasterclassPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'
    const [message, setMessage] = useState("");

    // Form State
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

    // --- Load reCAPTCHA Script ---
    useEffect(() => {
        const scriptId = "recaptcha-v3-script";

        // Only load if not already present
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
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 15000);

            return () => clearTimeout(timer);
        }
    }, []);

    // Prevent background scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("masterclass_popup_interacted", "closed");
        localStorage.setItem(
            "masterclass_popup_interacted_at",
            Date.now().toString()
        );
    };

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
            // 1. Get reCAPTCHA Token
            let recaptchaToken = "";

            if (window.grecaptcha) {
                try {
                    await new Promise((resolve) => {
                        window.grecaptcha.ready(() => resolve());
                    });

                    recaptchaToken = await window.grecaptcha.execute(
                        RECAPTCHA_SITE_KEY,
                        {
                            action: "submit",
                        }
                    );
                } catch (recaptchaError) {
                    console.error(
                        "reCAPTCHA execution failed:",
                        recaptchaError
                    );
                    // Decide if you want to block submission or continue without token
                    // throw new Error("Security check failed. Please refresh and try again.");
                }
            } else {
                console.warn("reCAPTCHA not loaded");
            }

            // 2. Prepare Payload including Token
            const payload = {
                ...formData,
                recaptcha_token: recaptchaToken,
            };

            // 3. Send Data
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

                setTimeout(() => {
                    setIsOpen(false);
                }, 3000);
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
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-scaleIn border-t-4 border-blue-600"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="text-center pt-8 pb-2 px-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide uppercase mb-3">
                        Limited Time Offer
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                        Register For A <br />
                        <span className="text-blue-600">Free Masterclass</span>
                    </h3>
                    <p className="text-slate-500 text-sm mt-2">
                        Unlock your potential with expert guidance. Spots
                        filling fast!
                    </p>
                </div>

                {/* Body */}
                <div className="p-8 pt-6">
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
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
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

                            {/* Email */}
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

                            {/* Phone */}
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

                            {/* Checkbox */}
                            <div className="flex items-start gap-3 mt-2">
                                <div className="relative flex items-center">
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
                                            stroke="currentColor"
                                            strokeWidth="1"
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
                                    <a
                                        href="#"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Terms and Conditions
                                    </a>{" "}
                                    and authorize LearnVera to contact me.
                                </label>
                            </div>
                            {errors.agreement && (
                                <p className="text-red-500 text-xs ml-1">
                                    {errors.agreement}
                                </p>
                            )}

                            {/* Error Message */}
                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-xs font-medium">
                                    <AlertCircle size={14} />
                                    <span>{message}</span>
                                </div>
                            )}

                            {/* Submit Button */}
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

                            {/* Privacy Text for reCAPTCHA */}
                            <p className="text-[10px] text-slate-400 text-center mt-2">
                                This site is protected by reCAPTCHA and the
                                Google
                                <a
                                    href="https://policies.google.com/privacy"
                                    className="text-blue-500 hover:underline mx-1"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Privacy Policy
                                </a>{" "}
                                and
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
            </div>
        </div>,
        document.body
    );
}
