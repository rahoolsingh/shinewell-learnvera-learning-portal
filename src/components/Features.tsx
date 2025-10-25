import React from "react";

// Assuming you have these image assets in your project
// import trainingSessionImage from "../assets/hero-1.png"; // Placeholder for the left large image
import mentorSessionImage from "../assets/hero-1.png"; // Placeholder for the right image
import studentAvatar1 from "../assets/hero-1.png"; // Placeholder for student avatars
import studentAvatar2 from "../assets/hero-1.png";
import studentAvatar3 from "../assets/hero-1.png";
import studentAvatar4 from "../assets/hero-1.png";
import studentAvatar5 from "../assets/hero-1.png";

export default function ResponsiveInfoBlock() {
    return (
        // Clean white background, minimal padding adjustment
        <section className="py-4 md:py-8 bg-white text-gray-900">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:col-span-2 lg:col-span-1 flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200">
                        <img
                            // src={trainingSessionImage}
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
                            alt="Students in a training session"
                            className="w-full h-auto object-cover md:h-80 lg:h-96"
                        />
                        <div className="p-5 bg-teal-200 flex-grow">
                            <p className="text-black text-lg font-bold leading-relaxed">
                                Hands-on training in Google & Meta Ads, GA4,
                                ChatGPT, and Social Media – Taught with Live
                                Client Briefs.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:col-span-2 lg:col-span-1">
                        <div className="md:col-span-2 lg:col-span-1 flex bg-white rounded-lg overflow-hidden border border-gray-200">
                            <img
                                // src={trainingSessionImage}
                                src="https://plus.unsplash.com/premium_photo-1661281337214-c5f344300d92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471"
                                alt="Students in a training session"
                                className="object-cover aspect-square h-48 md:h-auto w-48"
                            />
                            <div className="p-5 bg-red-400 flex-grow">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="flex items-center justify-center -space-x-2 mb-3">
                                        <img
                                            src={studentAvatar1}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <img
                                            src={studentAvatar2}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <img
                                            src={studentAvatar3}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <img
                                            src={studentAvatar4}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <img
                                            src={studentAvatar5}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-700 text-sm font-bold text-white border-2 border-white shrink-0">
                                            22K+
                                        </span>
                                    </div>
                                    <p className="text-center text-xl sm:text-2xl font-bold text-white mt-3">
                                        <span className="font-extrabold text-white">
                                            100,000+ Students
                                        </span>{" "}
                                        <br /> Trained Across Digital & AI
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right: Quote Card - Retains contrasting gradient for professionalism. No shadow/hover. */}
                        <div className="col-span-1 flex flex-col bg-gradient-to-tl from-purple-600 to-indigo-500 p-6 rounded-lg justify-center">
                            <p className="text-lg sm:text-2xl font-serif italic text-indigo-100 leading-relaxed mb-3">
                                "Believe in your potential, commit to learning,
                                and success will follow."
                            </p>
                            <p className="text-md font-semibold text-white">
                                Deepesh Raj
                            </p>
                            <p className="text-sm text-indigo-200">Founder</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1 flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200">
                        <img
                            // src={mentorSessionImage}
                            src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
                            alt="Mentor leading a session with students"
                            className="w-full h-auto object-cover md:h-80 lg:h-96"
                        />
                        <div className="p-5 bg-yellow-200 flex-grow">
                            <p className="text-black text-lg font-bold leading-relaxed">
                                Live, Mentor-Led Sessions with Practical
                                Demos and rigorous Campaign Reviews.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
