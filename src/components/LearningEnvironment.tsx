import React, { useState } from "react";
import { Play, MapPin, Wifi, Users } from "lucide-react";

// --- Data ---
const classroomImages = [
    // This will be the large image in the gallery
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
    // These will be the two smaller images
    "https://images.unsplash.com/photo-1617721926586-4eecce739745?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    "https://plus.unsplash.com/premium_photo-1671069848005-7231fc25703f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073",
];

// Placeholder video for the tour
const videoId = "s6-sEk_S_A"; // Example: "WeWork Office Tour"
const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=0`;

export default function LearningEnvironment() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-24 bg-white font-sans px-4 selection:bg-indigo-100">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
                        Where Learning{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                            Happens.
                        </span>
                    </h2>
                </div>
                <section className="relative flex w-full items-center justify-center bg-white py-14">
                    <div
                        className={
                            "absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
                        }
                    />
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <p className="text-gray-600 text-lg mx-auto leading-relaxed">
                            Take a virtual tour of our state-of-the-art
                            facilities, designed for collaboration, innovation,
                            and deep, focused work.
                        </p>
                        <div className="mx-auto mb-10">
                            <div
                                className={`group relative rounded-3xl overflow-hidden 
                        border border-gray-100 aspect-video
                        transition-all duration-500 ease-out`}
                            >
                                <iframe
                                    src={embedUrl}
                                    className="absolute inset-0 w-full h-full z-10"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Office Tour"
                                ></iframe>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                Designed for Focus & Collaboration
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our campus isn't just a place to learn; it's an
                                ecosystem. Every space is crafted to support
                                your journey, from quiet zones for deep work to
                                open lounges that spark collaboration.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <span className="flex items-center justify-center text-sm font-medium text-gray-700 bg-white p-3 px-4 rounded-lg shadow-sm border border-gray-100">
                                    <MapPin className="w-5 h-5 mr-3 text-indigo-500" />
                                    Prime city-center location
                                </span>
                                <span className="flex items-center justify-center text-sm font-medium text-gray-700 bg-white p-3 px-4 rounded-lg shadow-sm border border-gray-100">
                                    <Wifi className="w-5 h-5 mr-3 text-indigo-500" />
                                    High-speed fiber internet
                                </span>
                                <span className="flex items-center justify-center text-sm font-medium text-gray-700 bg-white p-3 px-4 rounded-lg shadow-sm border border-gray-100">
                                    <Users className="w-5 h-5 mr-3 text-indigo-500" />
                                    Dedicated collaboration zones
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <img
                        src={classroomImages[0]}
                        alt="Main classroom"
                        className="rounded-xl aspect-video w-full h-full object-cover transition-transform duration-700"
                    />
                    <img
                        src={classroomImages[1]}
                        alt="Small classroom view 1"
                        className="rounded-xl aspect-video w-full h-full object-cover transition-transform duration-700"
                    />

                    <img
                        src={classroomImages[2]}
                        alt="Small classroom view 2"
                        className="rounded-xl aspect-video w-full h-full object-cover transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
}
