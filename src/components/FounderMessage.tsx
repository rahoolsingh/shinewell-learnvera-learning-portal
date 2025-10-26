import React, { useState } from "react";
import { Play } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function FounderVideoMessage() {
    const [isPlaying, setIsPlaying] = useState(false);

    // Use the same video ID and thumbnail from your testimonial
    const videoId = "u0noTxTXdb0";
    const embedUrl = `https://www.youtube.com/embed/u0noTxTXdb0`;

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-24 bg-gray-950 text-gray-100 font-sans px-4 selection:bg-blue-200">
            <div className="container mx-auto max-w-7xl">
                {/* Bento Grid: Text Module + Video Module */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* --- Left Column: Text & Stats (Inspired by Image) --- */}
                    <div
                        className={`relative flex flex-col justify-between w-full md:col-span-1`}
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Founder's Message
                            </h2>
                            <h3 className="text-5xl font-bold text-cyan-500 mb-4 relative">
                                Deepesh Raj
                                <svg
                                    width="300" // Increased width for better visual
                                    height="15"
                                    viewBox="0 0 300 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute -bottom-2  -z-1 max-md:hidden text-cyan-500"
                                >
                                    <path
                                        d="M2 13C60 6 120 3 200 2.5C230 2 260 1 298 5"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M2 13C60 6 120 3 200 2.5C230 2 260 1 298 5"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        className="opacity-20"
                                    />
                                </svg>
                            </h3>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                In an era defined by rapid digital
                                transformation, mastering practical digital
                                marketing skills is essential for career growth
                                and business success. At Learnrize, we deliver
                                comprehensive, industry-aligned training through
                                hands-on projects and expert-led offline
                                sessions, ensuring our learners are fully
                                prepared to meet market demands.
                            </p>
                        </div>

                        {/* Stats Boxes (Inspired by Image) */}
                        <div className="grid gap-4">
                            <div className="">
                                <p className="text-3xl font-extrabold text-white">
                                    16M+
                                </p>
                                <p className="text-xs text-blue-100">
                                    Seconds of Confusion Eliminated
                                </p>
                            </div>
                            <div className="">
                                <p className="text-3xl font-extrabold text-white">
                                    8K+
                                </p>
                                <p className="text-xs text-blue-100">
                                    Real Campaigns Run by Our Students
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Video Player (From your code) --- */}
                    <div className="md:col-span-2">
                        {/* Label above media (Inspired by Image) */}
                        <p className="text-sm font-semibold uppercase text-blue-400 mb-2 ml-4">
                            FOUNDER AWARDED FOR EXCELLENCE IN ED-TECH
                        </p>

                        {/* Framed Video Player */}
                        <div
                            className={`group relative overflow-hidden rounded-3xl shadow-xl
                                border-4 border-white
                                aspect-video transition-all duration-500 ease-out
                                hover:shadow-blue-400/20
                            `}
                        >
                            <iframe
                                src={embedUrl}
                                className="absolute inset-0 w-full h-full scale-105"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Founder's Message"
                            ></iframe>

                            <Marquee
                                className="absolute text-sm text-white bg-cyan-500 bottom-0 py-1"
                                speed={50}
                                gradient={false}
                            >
                                "Skill up with us and lead the digital
                                future!" &nbsp; • &nbsp; "Empowering learners
                                for the digital age!" &nbsp; • &nbsp;
                                "Transforming education through technology!"
                                &nbsp; • &nbsp; "Join us in shaping tomorrow's
                                digital leaders!" &nbsp; • &nbsp;
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
