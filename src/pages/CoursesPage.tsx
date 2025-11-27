import React, { useEffect } from "react";
import RecordedCourses from "../components/RecordedCourses";
import Courses from "../components/Courses";
import WhatsAppCommunity from "../components/WhatsAppCommunity";

function CoursesPage() {
    // scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
            {/* 1. Hero Section */}
            <section className="relative pt-40 pb-12 overflow-hidden border-b border-gray-100">
                {/* Background Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "radial-gradient(#000 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                    }}
                ></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                        Explore Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            Courses
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Elevate your career with our expertly crafted digital
                        marketing courses. From SEO, AI marketing to social
                        media strategies, gain hands-on experience and industry
                        insights to become a proficient digital marketer.
                    </p>
                </div>
                <Courses />

                <RecordedCourses />

                <WhatsAppCommunity />
            </section>
        </div>
    );
}

export default CoursesPage;
