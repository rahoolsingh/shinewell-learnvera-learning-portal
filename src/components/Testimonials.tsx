import React, { useState } from "react";
import { Play, Quote, Trophy, Users } from "lucide-react";

// --- Data remains the same ---
const testimonials = [
    {
        id: 1,
        name: "Deepesh Raj",
        designation: "Founder",
        testimonial:
            '"The Digital Marketing program was a game-changer. I went from basics to managing a six-figure budget in months."',
        accent: "from-violet-500 to-fuchsia-500",
        textColor: "text-violet-300", // Lightened for dark-on-light overlay
        videoThumbnail:
            "https://i.redd.it/which-indian-podcast-should-you-be-listening-to-right-now-v0-e389bxis4ybe1.png?width=1080&format=png&auto=webp&s=4e557b5ae301cd3331cbb9b94d8489f38ff6d929",
        videoUrl: "https://www.youtube.com/shorts/g0XwRqO9lM8",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        name: "Deepesh Raj",
        designation: "Founder",
        testimonial:
            '"The Full Stack Architect course is intense. You don\'t just learn code, you learn how to think like an engineer."',
        accent: "from-emerald-400 to-cyan-500",
        textColor: "text-emerald-300",
        videoThumbnail:
            "https://engage4more.com/blog/wp-content/uploads/2023/02/Navya-Naveli-Nanda-Engage4more-.png",
        videoUrl: "https://www.youtube.com/shorts/g0XwRqO9lM8",
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        name: "Deepesh Raj",
        designation: "Founder",
        testimonial:
            '"The AI bootcamp is hands-down the best in the market. The mentorship on my capstone project was invaluable."',
        accent: "from-blue-500 to-indigo-600",
        textColor: "text-blue-300",
        videoThumbnail:
            "https://img.youtube.com/vi/g0XwRqO9lM8/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/shorts/g0XwRqO9lM8",
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        name: "Deepesh Raj",
        designation: "Founder",
        testimonial:
            '"I loved the focus on real-world design sprints. The portfolio I built during the UX program got me hired before I even graduated."',
        accent: "from-orange-400 to-red-500",
        textColor: "text-orange-300",
        videoThumbnail:
            "https://images.indianexpress.com/2025/10/Akshay-Kumar.jpg?w=414",
        videoUrl: "https://www.youtube.com/shorts/g0XwRqO9lM8",
        colSpan: "md:col-span-2",
    },
];

const TestimonialCard = ({ testimonial }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId =
        testimonial.videoUrl.split("/").pop() ||
        testimonial.videoUrl.split("v=").pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=0`;

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <div
            className={`group relative overflow-hidden rounded-3xl shadow-xl ${testimonial.colSpan}
        border border-gray-100 transition-all duration-500 ease-out
        hover:shadow-2xl hover:-translate-y-1 aspect-[16/10] md:aspect-auto
      `}
        >
            {/* 1. Video Player (Iframe) */}
            {/* This is hidden by default and appears on play */}
            <iframe
                src={isPlaying ? embedUrl : ""}
                className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-700
          ${isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={testimonial.name}
            ></iframe>

            {/* 2. Thumbnail Background (Always visible until play) */}
            <img
                src={testimonial.videoThumbnail}
                alt={`Video thumbnail for ${testimonial.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                        "https://placehold.co/600x400/D1D5DB/1F2937?text=Video";
                }}
            />

            {/* 3. Dark Gradient Overlay (for text readability) */}
            {/* This fades out with the text when playing */}
            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-700
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
            ></div>

            {/* 4. Content & Play Button (Fades out on play) */}
            <div
                className={`relative z-20 flex flex-col justify-between h-full p-6 md:p-8 
                    transition-opacity duration-700 ease-out
                    ${
                        isPlaying
                            ? "opacity-0 pointer-events-none"
                            : "opacity-100"
                    }`}
            >
                {/* Top Quote */}
                <div>
                    <Quote
                        className="lg:w-12 lg:h-12 text-white/50"
                        fill="currentColor"
                    />
                    <blockquote className="mt-4 text-xs md:text-2xl font-medium text-white shadow-black/20 [text-shadow:0_1px_3px_rgb(0,0,0,0.4)]">
                        "{testimonial.testimonial}"
                    </blockquote>
                </div>

                {/* Bottom: Play Button & Author */}
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-base font-bold text-white">
                            {testimonial.name}
                        </p>
                        <p
                            className={`text-xs lg:text-sm font-medium ${testimonial.textColor}`}
                        >
                            {testimonial.designation}
                        </p>
                    </div>

                    {/* Custom Play Button */}
                    <button
                        onClick={handlePlay}
                        className="lg:w-16 lg:h-16 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white
              flex items-center justify-center flex-shrink-0
              transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-white/30"
                        aria-label={`Play video: ${testimonial.testimonial}`}
                    >
                        <Play
                            className="lg:w-8 lg:h-8 w-4 h-4"
                            fill="currentColor"
                            style={{ marginLeft: "4px" }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Main Component (Unchanged) ---
export default function VideoTestimonials() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white text-gray-900 font-sans px-4 selection:bg-indigo-100">
            <div className="container mx-auto">
                {/* Editorial Header (Unchanged) */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4">
                            Real Results,{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-700 underline decoration-4 decoration-teal-600">
                                Real Stories.
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
                            Hear from our graduates how our programs have
                            transformed careers and powered real-world success.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-8 text-gray-500 font-medium">
                        <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 text-indigo-500" />{" "}
                            10,000+ Graduates
                        </div>
                        <div className="flex items-center">
                            <Trophy className="w-4 h-4 mr-2 text-indigo-500" />{" "}
                            4.9/5 Avg. Rating
                        </div>
                    </div>
                </div>

                {/* The "Bento" Modular Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>

                {/* Footer Note (Unchanged) */}
                <div className="mt-12 flex items-center justify-between text-gray-500 text-sm border-t border-gray-100 pt-8">
                    <p>Trusted by 500+ hiring partners globally.</p>
                    <a
                        href="#"
                        className="text-indigo-600 flex items-center hover:underline hover:text-indigo-700 transition-colors"
                    >
                        View all stories
                    </a>
                </div>
            </div>
        </section>
    );
}
