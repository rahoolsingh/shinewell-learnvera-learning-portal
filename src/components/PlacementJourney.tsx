import React from "react";
import {
    FileText,
    Code2,
    Award,
    Briefcase,
    ChevronRight,
    CheckCircle2,
} from "lucide-react";

import journey1 from "../assets/ph/journey_1.png";
import journey2 from "../assets/ph/journey_2.png";
import journey3 from "../assets/ph/journey_3.png";
import journey4 from "../assets/ph/journey_4.png";
import journey5 from "../assets/ph/journey_5.png";

const steps = [
    {
        id: "01",
        title: "Foundation Building",
        subtitle: "Step Into Skills",
        description:
            "Begin with zero or basic knowledge. Learn fundamentals through practical lessons, real examples, and hands-on tasks so learners develop clarity, not confusion.",
        icon: FileText,
        image: journey1,
        color: "from-blue-400 to-indigo-500",
    },
    {
        id: "02",
        title: "Skill Development",
        subtitle: "Learn by Doing",
        description:
            "Moving beyond theory, every learner starts working on real projects, tools, dashboards and simulations. Assignments, exercises, and guided practice nurture confidence and independent execution.",
        icon: Code2,
        image: journey2,
        color: "from-indigo-400 to-violet-500",
    },
    {
        id: "03",
        title: "Practical Implementation",
        subtitle: "Live Work Experience",
        description:
            "Work on live client projects, ad campaigns, analytics, SEO, cybersecurity labs, automation exercises and more depending on the course. Start building portfolios that truly prove your capability.",
        icon: Award,
        image: journey3,
        color: "from-violet-400 to-fuchsia-500",
    },
    {
        id: "04",
        title: "Advanced Learning",
        subtitle: "Specialization & Mastery",
        description:
            "Upgrade into advanced modules, deeper strategies, problem-solving exercises and industry case studies. Pick specializations like Performance Marketing, AI Automations, Cybersecurity, Data Analytics etc.",
        icon: Briefcase,
        image: journey4,
        color: "from-fuchsia-400 to-pink-500",
    },
    {
        id: "05",
        title: "Placement & Career Support",
        subtitle: "Move Into The Industry",
        description:
            "With real projects + certifications + portfolio, students receive personal placement guidance. We help with resume building, interview training, mock tasks, referrals & job connections.",
        icon: ChevronRight,
        image: journey5,
        color: "from-pink-400 to-rose-500",
    },
];

export default function PlacementProcess() {
    return (
        <section className="relative pt-20 overflow-hidden">
            {/* Background Texture - Dot Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(#475569 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            ></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                        From Beginner to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            Industry Ready
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We don't just teach course material. We construct a
                        career path that takes you from the basics to the
                        boardroom.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Desktop Connecting Line (Gradient) */}
                    <div className="hidden lg:block absolute top-8 left-0 w-full h-1 border-2 border-dashed border-slate-200 rounded-full z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, index) => {
                            return (
                                <div key={index} className="group relative">
                                    {/* Card Container */}
                                    <div
                                        className="
                                            relative z-10 h-full
                                            bg-white/80 backdrop-blur-lg 
                                            border border-dashed
                                            rounded-3xl p-6 
                                            transition-all duration-500 ease-out
                                            hover:-translate-y-3 
                                            flex flex-col overflow-hidden
                                        "
                                    >
                                        {/* Hover Glow Effect */}
                                        <div
                                            className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${step.color}`}
                                        ></div>

                                        {/* Step Number (Big Background Text) */}
                                        <div className="absolute -right-2 -top-4 opacity-5 pointer-events-none select-none">
                                            <span
                                                className={`text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}
                                            >
                                                {step.id}
                                            </span>
                                        </div>

                                        {/* Icon Header */}
                                        <div className="relative">
                                            {/* Connecting Line Dot (Desktop Only) */}
                                            <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-slate-100 rounded-full z-20 group-hover:border-blue-500 transition-colors duration-300"></div>
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-auto object-contain h-32 drop-shadow mx-auto lg:mx-0"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="relative text-center lg:text-left mt-2 flex-grow">
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                                                Phase {step.id}
                                            </h4>
                                            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm font-medium text-slate-800 mb-3">
                                                {step.subtitle}
                                            </p>
                                            <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Decorative Bottom Corner */}
                                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                            <CheckCircle2
                                                className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${step.color} fill-current`}
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Connector (Vertical Line) */}
                                    {index !== steps.length - 1 && (
                                        <div className="lg:hidden absolute left-1/2 bottom-[-32px] w-0.5 h-8 bg-slate-300 -translate-x-1/2"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
