import React, { useState, useEffect } from "react";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

// --- CONFIGURATION ---
// Replace with your actual Google reCAPTCHA v3 Site Key
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formResponse, setFormResponse] = useState(null);

    // 1. State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // 2. Track which fields the user has interacted with (blurred)
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });

    // 3. Track active errors
    const [errors, setErrors] = useState({});

    // --- Load reCAPTCHA Script ---
    useEffect(() => {
        if (!RECAPTCHA_SITE_KEY) {
            console.warn("RECAPTCHA_SITE_KEY is not set correctly.");
            return;
        }

        const scriptId = "recaptcha-v3-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    // --- CONSTANTS & REGEX ---
    const MIN_NAME_LENGTH = 2;
    const MIN_MESSAGE_LENGTH = 10;
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?(\d[\d\s-]{7,15})\d$/;

    const nameMask = /^[a-zA-Z\s'-]*$/;
    const phoneMask = /^[0-9\s+-]*$/;

    // --- VALIDATION LOGIC ---
    const validate = (data_to_validate, fieldName = null) => {
        let newErrors = fieldName ? { ...errors } : {};

        const setFieldError = (field, errorMessage) => {
            newErrors[field] = errorMessage || null;
        };

        // NAME Validation
        if (!fieldName || fieldName === "name") {
            const nameVal = data_to_validate.name?.trim();
            if (!nameVal || nameVal.length < MIN_NAME_LENGTH) {
                setFieldError(
                    "name",
                    `Name must be at least ${MIN_NAME_LENGTH} characters.`
                );
            } else if (!nameRegex.test(nameVal)) {
                setFieldError("name", "Name contains invalid characters.");
            } else {
                setFieldError("name", null);
            }
        }

        // EMAIL Validation
        if (!fieldName || fieldName === "email") {
            const emailVal = data_to_validate.email?.trim();
            if (!emailVal || !emailRegex.test(emailVal)) {
                setFieldError("email", "Please enter a valid email address.");
            } else {
                setFieldError("email", null);
            }
        }

        // PHONE Validation
        if (!fieldName || fieldName === "phone") {
            const rawPhone = data_to_validate.phone?.replace(/[\s-]/g, "");
            if (!rawPhone || rawPhone.length < 7) {
                setFieldError("phone", "Phone number is too short.");
            } else if (!phoneRegex.test(data_to_validate.phone?.trim())) {
                setFieldError("phone", "Please enter a valid phone number.");
            } else {
                setFieldError("phone", null);
            }
        }

        // MESSAGE Validation
        if (!fieldName || fieldName === "message") {
            const msgVal = data_to_validate.message?.trim();
            if (!msgVal || msgVal.length < MIN_MESSAGE_LENGTH) {
                setFieldError(
                    "message",
                    `Message must be at least ${MIN_MESSAGE_LENGTH} characters long.`
                );
            } else {
                setFieldError("message", null);
            }
        }

        return newErrors;
    };

    // --- HANDLERS ---

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "name" && !nameMask.test(value)) return;
        if (name === "phone" && !phoneMask.test(value)) return;

        const newData = { ...formData, [name]: value };
        setFormData(newData);

        const fieldError = validate(newData, name);
        setErrors((prev) => ({ ...prev, ...fieldError }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors((prev) => ({ ...prev, ...validate(formData, name) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormResponse(null);

        setTouched({ name: true, email: true, phone: true, message: true });

        const formErrors = validate(formData);
        const hasErrors = Object.values(formErrors).some(
            (error) => error !== null
        );
        setErrors(formErrors);

        if (hasErrors) return;

        setIsSubmitting(true);

        try {
            // 1. Get reCAPTCHA Token
            let recaptchaToken = "";
            const isConfigured =
                RECAPTCHA_SITE_KEY &&
                RECAPTCHA_SITE_KEY !== "YOUR_GOOGLE_RECAPTCHA_V3_SITE_KEY";

            if (window.grecaptcha && isConfigured) {
                try {
                    await new Promise((resolve) => {
                        window.grecaptcha.ready(() => resolve());
                    });
                    recaptchaToken = await window.grecaptcha.execute(
                        RECAPTCHA_SITE_KEY,
                        {
                            action: "consultation_form",
                        }
                    );
                } catch (recaptchaError) {
                    console.error(
                        "reCAPTCHA execution failed:",
                        recaptchaError
                    );
                }
            }

            const cleanedData = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                message: formData.message.trim(),
                recaptcha_token: recaptchaToken,
            };

            const response = await fetch("/tools/contact-form.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cleanedData),
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                throw new Error("Unexpected server response.");
            }

            if (response.ok && data.success) {
                setFormResponse({ status: "success", message: data.success });
                setFormData({ name: "", email: "", phone: "", message: "" });
                setTouched({
                    name: false,
                    email: false,
                    phone: false,
                    message: false,
                });
                setErrors({});
            } else {
                throw new Error(data.error || "An unknown error occurred.");
            }
        } catch (err) {
            setFormResponse({
                status: "error",
                message: err.message || "Network error. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const getFieldStatus = (fieldName) => {
        const hasError = !!errors[fieldName];
        const isTouched = touched[fieldName];
        const isFilled = formData[fieldName]?.length > 0;

        if (isTouched && hasError) return "error";
        if (!hasError && isFilled) return "success";
        return "neutral";
    };

    const getInputClasses = (status) => {
        const base =
            "w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors pr-10";
        switch (status) {
            case "error":
                return `${base} border-red-500 focus:ring-red-500 bg-red-50 text-red-900`;
            case "success":
                return `${base} border-green-500 focus:ring-green-500 bg-green-50 text-green-900`;
            default:
                return `${base} border-gray-300 focus:ring-blue-600`;
        }
    };

    // --- ANIMATION VARIANTS ---
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="py-16 bg-blue-800/90 relative overflow-hidden">
            <img
                src="https://placehold.co/1920x1080/1e3a8a/FFFFFF?text=Background+Image"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 object-bottom"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h2
                    className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"
                    id="consultation"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                >
                    More Curious?{" "}
                    <span className="text-yellow-400">
                        Get Free Consultation
                    </span>
                </motion.h2>

                <motion.div
                    className="bg-white rounded-3xl overflow-hidden shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <div className="grid lg:grid-cols-2">
                        {/* --- Left Column: Info --- */}
                        <motion.div
                            className="p-8 lg:p-12 space-y-6"
                            variants={fadeInLeft}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Get In Touch
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            Visit Us
                                        </div>
                                        <div className="text-gray-600">
                                            Learnvera, Novel Tech Park, Hosur
                                            Rd, Kudlu Gate, Bengaluru, Karnataka
                                            - 560068
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            Call Us
                                        </div>
                                        <div className="text-gray-600">
                                            +91 767 672 0897
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            Email Us
                                        </div>
                                        <div className="text-gray-600">
                                            <p>
                                                enroll@learnvera.com{" "}
                                                <span className="font-normal text-sm text-gray-500">
                                                    ( For Course Related
                                                    Queries)
                                                </span>
                                            </p>
                                            <p>
                                                support@learnvera.com{" "}
                                                <span className="font-normal text-sm text-gray-500">
                                                    (For General Queries)
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            Working Hours
                                        </div>
                                        <div className="text-gray-600">
                                            Mon - Sat : 9 AM - 9 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* --- Right Column: Form --- */}
                        <motion.div
                            className="bg-blue-50 p-8 lg:p-12"
                            variants={fadeInRight}
                        >
                            <form
                                className="space-y-4"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={getInputClasses(
                                                getFieldStatus("name")
                                            )}
                                            placeholder="Enter your name"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            {getFieldStatus("name") ===
                                                "error" && (
                                                <AlertCircle className="h-5 w-5 text-red-500" />
                                            )}
                                            {getFieldStatus("name") ===
                                                "success" && (
                                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                            )}
                                        </div>
                                    </div>
                                    {touched.name && errors.name && (
                                        <p className="mt-1 text-sm text-red-600 animate-pulse">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={getInputClasses(
                                                getFieldStatus("email")
                                            )}
                                            placeholder="your@email.com"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            {getFieldStatus("email") ===
                                                "error" && (
                                                <AlertCircle className="h-5 w-5 text-red-500" />
                                            )}
                                            {getFieldStatus("email") ===
                                                "success" && (
                                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                            )}
                                        </div>
                                    </div>
                                    {touched.email && errors.email && (
                                        <p className="mt-1 text-sm text-red-600 animate-pulse">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={getInputClasses(
                                                getFieldStatus("phone")
                                            )}
                                            placeholder="XXX-XXXX-XXXX"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            {getFieldStatus("phone") ===
                                                "error" && (
                                                <AlertCircle className="h-5 w-5 text-red-500" />
                                            )}
                                            {getFieldStatus("phone") ===
                                                "success" && (
                                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                            )}
                                        </div>
                                    </div>
                                    {touched.phone && errors.phone && (
                                        <p className="mt-1 text-sm text-red-600 animate-pulse">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={getInputClasses(
                                                getFieldStatus("message")
                                            )}
                                            placeholder="How can we help you?"
                                        ></textarea>
                                        <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none">
                                            {getFieldStatus("message") ===
                                                "error" && (
                                                <AlertCircle className="h-5 w-5 text-red-500" />
                                            )}
                                            {getFieldStatus("message") ===
                                                "success" && (
                                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                            )}
                                        </div>
                                    </div>
                                    {touched.message && errors.message && (
                                        <p className="mt-1 text-sm text-red-600 animate-pulse">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </motion.button>

                                {/* Privacy Text for reCAPTCHA */}
                                <p className="text-[10px] text-gray-400 text-center mt-3">
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

                                {/* Response Message */}
                                {formResponse && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`mt-4 p-4 rounded-xl text-center text-sm font-bold flex items-center justify-center space-x-2 ${
                                            formResponse.status === "success"
                                                ? "bg-green-100 text-green-800 border border-green-200"
                                                : "bg-red-100 text-red-800 border border-red-200"
                                        }`}
                                    >
                                        {formResponse.status === "success" ? (
                                            <CheckCircle2 className="w-5 h-5" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5" />
                                        )}
                                        <span>{formResponse.message}</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
