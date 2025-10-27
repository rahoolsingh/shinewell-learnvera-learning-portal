import { Mail, Phone, MapPin } from "lucide-react";

// Reusable component for the contact info items
const InfoItem = ({ icon, title, children }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-full bg-blue-100 p-3">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <div className="text-sm text-gray-600">{children}</div>
            </div>
        </div>
    );
};

export default function ContactUsPage() {
    return (
        <section className="py-16 md:py-24 bg-gray-50" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* --- Header --- */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600">
                        We're here to help and answer any question you might
                        have. We look forward to hearing from you!
                    </p>
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* --- Column 1: Contact Form --- */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Send us a Message
                        </h2>
                        <form
                            action="#"
                            method="POST"
                            className="space-y-6"
                        >
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Phone Field (Optional) */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Phone{" "}
                                    <span className="text-gray-400">
                                        (Optional)
                                    </span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                ></textarea>
                            </div>

                            {/* Submit Button (Styled like your Enroll Button) */}
                            <div className="pt-2">
                                <div className="relative group w-full">
                                    <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 animate-borderFlow"></div>
                                    <button
                                        type="submit"
                                        className={`relative px-8 py-2 text-xl font-extrabold rounded-xl overflow-hidden w-full
    text-white transform skew-x-[-10deg] transition-all duration-300 ease-out 
    hover:skew-x-[0deg] hover:scale-105 active:scale-98
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
    before:transform before:translate-x-[-100%] before:skew-x-[-20deg]
    before:transition-transform before:duration-700 before:ease-out
    hover:before:translate-x-[100%]
    bg-gradient-to-r from-teal-500 via-purple-500 to-cyan-500 animate-gradientFlow`}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* --- Column 2: Contact Info & Map --- */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                <InfoItem
                                    title="Email Us"
                                    icon={
                                        <Mail className="w-5 h-5 text-blue-600" />
                                    }
                                >
                                    <a
                                        href="mailto:hello@digitalcourse.com"
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        hello@digitalcourse.com
                                    </a>
                                </InfoItem>
                                <InfoItem
                                    title="Call Us"
                                    icon={
                                        <Phone className="w-5 h-5 text-blue-600" />
                                    }
                                >
                                    <a
                                        href="tel:+911234567890"
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        +91 123 456 7890
                                    </a>
                                </InfoItem>
                                <InfoItem
                                    title="Visit Us"
                                    icon={
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                    }
                                >
                                    <p>
                                        123 Marketing Ave, Suite 400
                                        <br />
                                        Noida, Uttar Pradesh 201301, India
                                    </p>
                                </InfoItem>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112136.6980159781!2d77.30602494951167!3d28.56271922485521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ff13a10565b1c!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                                width="101%" // 101% to hide the white edge sometimes
                                height="350"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}