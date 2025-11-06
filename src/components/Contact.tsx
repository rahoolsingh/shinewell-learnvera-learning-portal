import { MapPin, Phone, Mail, Clock } from "lucide-react";
import background2 from "../assets/background-3.jpg";

export default function Contact() {
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
                    <span className="text-yellow-400">
                        Get Free Consultation
                    </span>
                </h2>

                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="p-8 lg:p-12 space-y-6">
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
                                            +91 926 238 6604
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
                                            learnveraindia@gmail.com
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
                                            Mon -Sat : 9 AM - 9 PM{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 lg:p-12">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
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
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition font-semibold">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
