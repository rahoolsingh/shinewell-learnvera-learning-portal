import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Download, X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// --- CONFIGURATION ---
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function GetEbook({
    className = "w-fit",
    ebook,
    title,
    buttonText,
    smallText,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'
    const [message, setMessage] = useState("");

    // Handle prop mismatch (ebook vs ebookId)
    const activeEbookId = ebook;

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});

    // Regex Patterns
    const phoneRegex = /^[6-9]\d{9}$/; // Basic Indian mobile validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // --- Logic ---

    // Load reCAPTCHA Script
    useEffect(() => {
        if (!RECAPTCHA_SITE_KEY) {
            console.warn(
                "VITE_RECAPTCHA_SITE_KEY is missing from environment variables."
            );
            return;
        }

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

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim() || formData.name.length < 2)
            newErrors.name = "Name is required";
        if (!emailRegex.test(formData.email))
            newErrors.email = "Valid email is required";
        if (!phoneRegex.test(formData.phone))
            newErrors.phone = "Valid 10-digit mobile number required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Simple Input Masking
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return; // Only numbers
            if (value.length > 10) return; // Max 10
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on type
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

            if (window.grecaptcha && RECAPTCHA_SITE_KEY) {
                try {
                    await new Promise((resolve) => {
                        window.grecaptcha.ready(() => resolve());
                    });

                    recaptchaToken = await window.grecaptcha.execute(
                        RECAPTCHA_SITE_KEY,
                        {
                            action: "ebook_download",
                        }
                    );
                } catch (recaptchaError) {
                    console.error(
                        "reCAPTCHA execution failed:",
                        recaptchaError
                    );
                    // Optional: handle error state if strict security is required
                }
            } else if (!RECAPTCHA_SITE_KEY) {
                console.warn("reCAPTCHA skipped: Missing Site Key");
            } else {
                console.warn("reCAPTCHA skipped: Script not loaded");
            }

            // 2. Prepare Payload
            const payload = {
                ...formData,
                ebook_id: activeEbookId,
                recaptcha_token: recaptchaToken,
            };

            const response = await fetch(
                "https://learnvera.com/tools/get-ebook.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            // Check Content-Type to see if we got a PDF (Success) or JSON (Error)
            const contentType = response.headers.get("content-type");

            if (
                response.ok &&
                contentType &&
                contentType.includes("application/pdf")
            ) {
                // --- SUCCESS: Handle File Download ---
                const blob = await response.blob();

                // Create object URL
                const url = window.URL.createObjectURL(blob);

                // Create temporary link to trigger download
                const link = document.createElement("a");
                link.href = url;

                // Try to get filename from headers, fallback to default
                let filename = "syllabus.pdf";
                const disposition = response.headers.get("Content-Disposition");
                if (disposition && disposition.indexOf("attachment") !== -1) {
                    const filenameRegex =
                        /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    const matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) {
                        filename = matches[1].replace(/['"]/g, "");
                    }
                }

                link.setAttribute("download", filename);
                document.body.appendChild(link);
                link.click();

                // Cleanup
                link.remove();
                window.URL.revokeObjectURL(url);

                setStatus("success");
                setMessage("Your download has started!");
                setFormData({ name: "", email: "", phone: "" });

                // Close modal after delay
                setTimeout(() => setIsOpen(false), 4000);
            } else {
                // --- ERROR: Handle JSON Error Message ---
                const data = await response.json();
                throw new Error(data.error || "Submission failed");
            }
        } catch (error) {
            console.error("Download Error:", error);
            setStatus("error");
            setMessage(
                error.message || "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Trigger Button (Remains in normal flow) */}
            <button
                onClick={() => setIsOpen(true)}
                className={`group py-2 px-4 rounded-xl 
                    flex items-center justify-center gap-2 
                    bg-white border-2 border-slate-200 
                    text-slate-600 font-bold text-sm
                    hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900
                    active:bg-slate-100 active:scale-[0.98]
                    transition-all duration-200 ${className}`}
            >
                <Download
                    size={18}
                    className="text-slate-400 group-hover:text-blue-600 transition-colors"
                />
                <div className="flex flex-col items-start leading-tight">
                    {buttonText || "Get Free Ebook"}

                    {smallText && (
                        <span className="text-xs text-gray-500">
                            {smallText}
                        </span>
                    )}
                </div>
            </button>

            {/* Portal for Modal (Moves it to document.body) */}
            {isOpen &&
                createPortal(
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
                        <div
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-scaleIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-slate-50 to-white p-8 border-b border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    Download {title}
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    Enter your details below to download{" "}
                                    <b>{title}</b>.
                                </p>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8">
                                {status === "success" ? (
                                    <div className="text-center py-6">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2
                                                size={32}
                                                className="text-green-600"
                                            />
                                        </div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                                            Success!
                                        </h4>
                                        <p className="text-slate-600">
                                            {message}
                                        </p>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="mt-6 text-blue-600 font-semibold hover:underline"
                                        >
                                            Close Window
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        {/* Name Field */}
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${
                                                    errors.name
                                                        ? "border-red-400 focus:ring-red-200"
                                                        : "border-slate-200 focus:ring-blue-100 focus:border-blue-400"
                                                } focus:outline-none focus:ring-4 transition-all`}
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${
                                                    errors.email
                                                        ? "border-red-400 focus:ring-red-200"
                                                        : "border-slate-200 focus:ring-blue-100 focus:border-blue-400"
                                                } focus:outline-none focus:ring-4 transition-all`}
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        {/* Phone Field */}
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                                                Mobile Number
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-3.5 text-slate-400 font-medium">
                                                    +91
                                                </span>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="XXXXXXXXXX"
                                                    className={`w-full pl-12 pr-4 py-3 rounded-lg bg-slate-50 border ${
                                                        errors.phone
                                                            ? "border-red-400 focus:ring-red-200"
                                                            : "border-slate-200 focus:ring-blue-100 focus:border-blue-400"
                                                    } focus:outline-none focus:ring-4 transition-all`}
                                                />
                                            </div>
                                            {errors.phone && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>

                                        {/* Error Message (API) */}
                                        {status === "error" && (
                                            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                                                <AlertCircle size={16} />
                                                <span>{message}</span>
                                            </div>
                                        )}

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2
                                                        size={20}
                                                        className="animate-spin"
                                                    />
                                                    Submitting...
                                                </>
                                            ) : (
                                                "Download Ebook"
                                            )}
                                        </button>

                                        {/* Privacy Text for reCAPTCHA */}
                                        <p className="text-[10px] text-slate-400 text-center mt-2">
                                            This site is protected by reCAPTCHA
                                            and the Google
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
                )}
        </>
    );
}
