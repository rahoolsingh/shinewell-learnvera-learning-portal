import React, { useState, useEffect } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";
import WhatsAppCommunity from "../components/WhatsAppCommunity";

// --- CONFIGURATION ---
// Replace with your actual Google reCAPTCHA v3 Site Key
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

// Reusable info item
const InfoItem = ({ icon, title, children }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 rounded-full bg-indigo-100 p-3">
            {React.cloneElement(icon, { className: "w-5 h-5 text-indigo-600" })}
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <div className="text-gray-700">{children}</div>
        </div>
    </div>
);

export default function ContactUsPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formResponse, setFormResponse] = useState(null);

    // 1. State for form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        message: "",
    });

    // 2. Track which fields the user has interacted with
    const [touched, setTouched] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        city: false,
        message: false,
    });

    // 3. Track active errors
    const [errors, setErrors] = useState({});

    // --- Load reCAPTCHA Script ---
    useEffect(() => {
        if (
            !RECAPTCHA_SITE_KEY ||
            RECAPTCHA_SITE_KEY === "YOUR_GOOGLE_RECAPTCHA_V3_SITE_KEY"
        ) {
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

    // Masks to prevent typing invalid characters
    const nameMask = /^[a-zA-Z\s'-]*$/;
    const phoneMask = /^[0-9\s+-]*$/;

    // --- VALIDATION LOGIC ---
    const validate = (data_to_validate, fieldName = null) => {
        let newErrors = {};
        const setFieldError = (field, errorMessage) => {
            newErrors[field] = errorMessage || null;
        };

        // Helper for name-like fields (First Name, Last Name, City)
        const validateNameField = (field, label, minLen = MIN_NAME_LENGTH) => {
            if (!fieldName || fieldName === field) {
                const val = data_to_validate[field]?.trim();
                if (!val || val.length < minLen) {
                    setFieldError(
                        field,
                        `${label} must be at least ${minLen} characters.`
                    );
                } else if (!nameRegex.test(val)) {
                    setFieldError(
                        field,
                        `${label} contains invalid characters.`
                    );
                } else {
                    setFieldError(field, null);
                }
            }
        };

        validateNameField("firstName", "First Name");
        validateNameField("lastName", "Last Name");
        validateNameField("city", "City");

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
                    `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`
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

        // Input Masking
        if (
            (name === "firstName" || name === "lastName" || name === "city") &&
            !nameMask.test(value)
        )
            return;
        if (name === "phone" && !phoneMask.test(value)) return;

        const newData = { ...formData, [name]: value };
        setFormData(newData);

        // Validate immediately
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

        // Mark all touched
        setTouched({
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            city: true,
            message: true,
        });

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
                            action: "contact_form",
                        }
                    );
                } catch (recaptchaError) {
                    console.error(
                        "reCAPTCHA execution failed:",
                        recaptchaError
                    );
                }
            }

            // 2. Prepare API Data with Token
            const apiData = {
                "first-name": formData.firstName.trim(),
                "last-name": formData.lastName.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                city: formData.city.trim(),
                message: formData.message.trim(),
                form_id: "contact_page",
                recaptcha_token: recaptchaToken, // Added token
            };

            const response = await fetch("/tools/contact-form.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(apiData),
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
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    city: "",
                    message: "",
                });
                setTouched({
                    firstName: false,
                    lastName: false,
                    email: false,
                    phone: false,
                    city: false,
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

    // Helper to determine input visual status
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
            "w-full px-4 py-3 rounded-lg border bg-white/50 focus:outline-none focus:ring-2 transition-colors pr-10";
        switch (status) {
            case "error":
                return `${base} border-red-500 focus:ring-red-500 focus:border-red-500 text-red-900`;
            case "success":
                return `${base} border-green-500 focus:ring-green-500 focus:border-green-500 text-green-900`;
            default:
                return `${base} border-gray-300 focus:ring-indigo-500 focus:border-indigo-500`;
        }
    };

    const renderStatusIcon = (fieldName) => (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none top-0">
            {getFieldStatus(fieldName) === "error" && (
                <AlertCircle className="h-5 w-5 text-red-500" />
            )}
            {getFieldStatus(fieldName) === "success" && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
            )}
        </div>
    );

    const renderErrorMessage = (fieldName) =>
        touched[fieldName] &&
        errors[fieldName] && (
            <p className="mt-1 text-sm text-red-600 animate-pulse">
                {errors[fieldName]}
            </p>
        );

    return (
        <section
            className="relative py-16 md:py-32 xl:pt-44 bg-gray-50 overflow-hidden"
            id="contact"
        >
            {/* Decorative gradient background */}
            <div
                className="absolute top-0 left-1/4 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
            >
                <div className="aspect-square w-[80rem] bg-gradient-to-r from-purple-200 via-indigo-200 to-transparent opacity-30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                        Let's Connect
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Have a question, a project, or just want to say hello?
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* ---- Form ---- */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 h-fit">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Book A Free Demo
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                            noValidate
                        >
                            {/* First / Last Name */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={getInputClasses(
                                                getFieldStatus("firstName")
                                            )}
                                            placeholder="First Name"
                                        />
                                        {renderStatusIcon("firstName")}
                                    </div>
                                    {renderErrorMessage("firstName")}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={getInputClasses(
                                                getFieldStatus("lastName")
                                            )}
                                            placeholder="Last Name"
                                        />
                                        {renderStatusIcon("lastName")}
                                    </div>
                                    {renderErrorMessage("lastName")}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
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
                                        placeholder="you@example.com"
                                    />
                                    {renderStatusIcon("email")}
                                </div>
                                {renderErrorMessage("email")}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
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
                                    {renderStatusIcon("phone")}
                                </div>
                                {renderErrorMessage("phone")}
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        className={getInputClasses(
                                            getFieldStatus("city")
                                        )}
                                        placeholder="Your City"
                                    />
                                    {renderStatusIcon("city")}
                                </div>
                                {renderErrorMessage("city")}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        className={`${getInputClasses(
                                            getFieldStatus("message")
                                        )} pt-3`}
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
                                {renderErrorMessage("message")}
                            </div>

                            {/* Submit */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </button>
                                {/* Privacy Text for reCAPTCHA */}
                                <p className="text-[10px] text-gray-400 text-center mt-3">
                                    This site is protected by reCAPTCHA and the
                                    Google
                                    <a
                                        href="https://policies.google.com/privacy"
                                        className="text-indigo-500 hover:underline mx-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Privacy Policy
                                    </a>{" "}
                                    and
                                    <a
                                        href="https://policies.google.com/terms"
                                        className="text-indigo-500 hover:underline mx-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    apply.
                                </p>
                            </div>

                            {/* Response Message */}
                            {formResponse && (
                                <div
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
                                </div>
                            )}
                        </form>
                    </div>

                    {/* ---- Contact Info ---- */}
                    <div className="space-y-8">
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6 mb-8">
                                <InfoItem title="Email Us" icon={<Mail />}>
                                    <a
                                        href="mailto:learnveraindia@gmail.com"
                                        className="hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        learnveraindia@gmail.com
                                    </a>
                                </InfoItem>
                                <InfoItem title="Call Us" icon={<Phone />}>
                                    <a
                                        href="tel:+917676720897"
                                        className="hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        +91 767 672 0897
                                    </a>
                                </InfoItem>
                                <InfoItem title="Visit Us" icon={<MapPin />}>
                                    <p>
                                        Learnvera, Novel Tech Park, Hosur Rd,
                                        Kudlu Gate, Bengaluru, Karnataka -
                                        560068
                                    </p>
                                </InfoItem>
                                <InfoItem
                                    title="Working Hours"
                                    icon={<Clock />}
                                >
                                    <p>Mon - Sat : 9 AM - 9 PM </p>
                                </InfoItem>
                            </div>
                            <WhatsAppCommunity variant="sleek" />
                        </div>

                        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2526496216847!2d77.63891067595954!3d12.891469116628187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b0129745ff%3A0xf9d4a7aab0502205!2sNovel%20Tech%20Park!5e0!3m2!1sen!2sin!4v1762344496429!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
