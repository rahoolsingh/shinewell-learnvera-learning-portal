import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

// Reusable component for the contact info items
const InfoItem = ({ icon, title, children }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-indigo-100 p-3">
                {React.cloneElement(icon, {
                    className: "w-5 h-5 text-indigo-600",
                })}
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <div className="text-gray-700">{children}</div>
            </div>
        </div>
    );
};

export default function ContactUsPage() {
    // --- State for form submission ---
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formResponse, setFormResponse] = useState(null); // { status: 'success' | 'error', message: '...' }

    // --- Handle form submission ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormResponse(null);

        const formData = new FormData(e.target);

        try {
            // --- !!! UPDATE THIS URL to point to your PHP script ---
            const response = await fetch('https://learnvera.com/tools/mail.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setFormResponse({ status: 'success', message: data.message });
                e.target.reset(); // Clear the form
            } else {
                throw new Error(data.message || 'An unknown error occurred.');
            }
        } catch (error) {
            setFormResponse({
                status: 'error',
                message: error.message || 'Network error. Please try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            className="relative py-16 md:py-32 bg-gray-50 overflow-hidden"
            id="contact"
        >
            {/* ... (decorative elements are unchanged) ... */}
            <div
                className="absolute top-0 left-1/4 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
            >
                <div className="aspect-square w-[80rem] bg-gradient-to-r from-purple-200 via-indigo-200 to-transparent opacity-30 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ... (header is unchanged) ... */}
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
                    {/* --- Column 1: Contact Form --- */}
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 h-fit">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Send us a Message
                        </h2>
                        {/* --- Updated Form Tag --- */}
                        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                            {/* --- ADDED: Hidden form ID --- */}
                            <input type="hidden" name="form_id" value="contact_page" />

                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                                    placeholder="you@example.com"
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Phone{" "}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>

                            {/* City Field */}
                            <div>
                                <label
                                    htmlFor="city"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                                    placeholder="Your City"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {/* --- Submit Button --- */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 text-lg font-semibold rounded-lg
                                               text-white bg-gradient-to-r from-indigo-600 to-purple-600
                                               hover:from-indigo-700 hover:to-purple-700
                                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                               transition-all duration-300 ease-in-out
                                               shadow-lg hover:shadow-xl
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                            
                            {/* --- Form Response Message --- */}
                            {formResponse && (
                                <div
                                    className={`mt-4 p-3 rounded-lg text-center ${
                                        formResponse.status === 'success'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}
                                >
                                    {formResponse.message}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* --- Column 2: Contact Info & Map (Unchanged) --- */}
                    <div className="space-y-8">
                        {/* Contact Info Card */}
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
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
                                        href="tel:+919262386604"
                                        className="hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        +91 926 238 6604
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
                        </div>

                        {/* Map Card */}
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