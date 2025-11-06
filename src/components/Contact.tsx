import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import background2 from "../assets/background-3.jpg";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formResponse, setFormResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormResponse(null);

        const formData = {
            name: e.target.name.value.trim(),
            email: e.target.email.value.trim(),
            phone: e.target.phone.value.trim(),
            message: e.target.message.value.trim(),
        };

        try {
            const response = await fetch("https://learnvera.com/tools/contact-form.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const text = await response.text();
            let data;
            try {
                data = JSON.parse(text);
            } catch {
                throw new Error("Unexpected server response: " + text.slice(0, 100));
            }

            if (response.ok && data.success) {
                setFormResponse({ status: "success", message: data.success });
                e.target.reset();
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

    return (
        <section className="py-16 bg-blue-800/90 relative overflow-hidden">
            <img
                src={background2}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-60 object-bottom"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2
                    className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"
                    id="consultation"
                >
                    More Curious?{" "}
                    <span className="text-yellow-400">Get Free Consultation</span>
                </h2>

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* --- Left Column: Info --- */}
                        <div className="p-8 lg:p-12 space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Get In Touch
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Visit Us</div>
                                        <div className="text-gray-600">
                                            Learnvera, Novel Tech Park, Hosur Rd, Kudlu Gate,
                                            Bengaluru, Karnataka - 560068
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Call Us</div>
                                        <div className="text-gray-600">+91 926 238 6604</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">Email Us</div>
                                        <div className="text-gray-600">learnveraindia@gmail.com</div>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            Working Hours
                                        </div>
                                        <div className="text-gray-600">Mon - Sat : 9 AM - 9 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- Right Column: Form --- */}
                        <div className="bg-blue-50 p-8 lg:p-12">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <input type="hidden" name="form_id" value="consultation_form" />

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>

                                {/* Response Message */}
                                {formResponse && (
                                    <div
                                        className={`mt-4 p-3 rounded-lg text-center text-sm font-semibold ${
                                            formResponse.status === "success"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {formResponse.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
