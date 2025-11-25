import React from "react";
import { FileText, Code2, Award, Briefcase, ChevronRight } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Enrolment & Assessment",
        description:
            "We evaluate your current skill level and design a personalized learning path tailored to your goals.",
        icon: FileText,
    },
    {
        id: "02",
        title: "Upskilling & Projects",
        description:
            "Master the MERN stack through intensive live classes and build 10+ industry-grade projects.",
        icon: Code2,
    },
    {
        id: "03",
        title: "Portfolio & Certification",
        description:
            "Earn your certification and finalize a professional portfolio that showcases your best work.",
        icon: Award,
    },
    {
        id: "04",
        title: "Placement Drives",
        description:
            "Access our hiring network. We handle resume prep, mock interviews, and schedule your interviews.",
        icon: Briefcase,
    },
];

export default function PlacementProcess() {
    return (
        <section className="py-12 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Minimal Header */}
                <div className="mb-20 max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                        How You Get <span className="text-blue-600">Hired</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        A structured journey designed to take you from a
                        beginner to a professional.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* DESKTOP: Connecting Line (Absolute Background) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isLast = index === steps.length - 1;

                            return (
                                <div
                                    key={index}
                                    className="group relative z-10"
                                >
                                    {/* MOBILE: Grid Layout for perfect alignment */}
                                    <div className="grid grid-cols-[auto_1fr] md:block gap-6 md:gap-0">
                                        {/* ICON COLUMN */}
                                        <div className="relative flex flex-col items-center md:block">
                                            {/* Mobile Line (Vertical) - Auto stretches to height */}
                                            {!isLast && (
                                                <div className="md:hidden absolute top-14 bottom-[-48px] left-1/2 w-0.5 bg-gray-100 -translate-x-1/2 group-hover:bg-blue-50 transition-colors delay-100"></div>
                                            )}

                                            {/* Icon Circle */}
                                            <div
                                                className="
                                                    w-14 h-14 md:w-24 md:h-24 
                                                    rounded-2xl md:rounded-full 
                                                    bg-white border border-gray-200 
                                                    flex items-center justify-center 
                                                    transition-all duration-300 ease-out
                                                    relative z-10
                                                "
                                            >
                                                <Icon className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                            </div>
                                        </div>

                                        {/* CONTENT COLUMN */}
                                        <div className="relative text-center md:text-left md:p-2 space-y-2">
                                            {/* Creative: Watermark Number behind text */}
                                            <span
                                                className="
                                                    text-3xl md:text-5xl font-bold text-slate-300 opacity-50 md:opacity-40
                                                    select-none -z-10 group-hover:text-blue-400 transition-colors duration-500
                                                    md:text-left
                                                "
                                            >
                                                {step.id}
                                            </span>

                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors md:text-left">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-slate-500 leading-relaxed md:text-left">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
