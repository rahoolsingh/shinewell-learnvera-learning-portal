import { ArrowRight, Quote, Briefcase } from "lucide-react";
import { Link } from "react-router"; // Ensure react-router-dom is installed
import PlacementProcess from "../components/PlacementJourney";
import { useEffect } from "react";
import placements from "../data/successStories.js";
import HiringPartners from "../components/HiringPartners.js";
const allStories = placements;

export default function SuccessStoriesPage() {
    
    

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
            {/* 1. Hero Section */}
            <section className="relative pt-40 pb-12 bg-white overflow-hidden border-b border-gray-100">
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
                        From Beginners To{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            Professionals
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Journeys shaped by learning, consistency and growth.
                        Dreams turned into job offers, goals into new
                        beginnings, and careers taking flight. Yours could be
                        the next.
                    </p>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12 pt-12 border-t border-gray-100">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900">
                                92%
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                Hiring Rate
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900">
                                12 LPA
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                Avg. Package
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900">
                                450+
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                Hiring Partners
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900">
                                24/7
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                Career Support
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Main Grid Section */}
            <section className="py-12 md:py-20">
                <PlacementProcess />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {allStories.map((student) => (
                            <div
                                key={student.id}
                                className="
                            group
                            relative
                            flex flex-col justify-between
                            bg-white
                            rounded-xl
                            border border-dashed border-gray-300
                            transition-all duration-300 ease-in-out
                            p-6 h-full
                        "
                            >
                                {/* Top: Profile */}
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="relative">
                                            <img
                                                src={student.studentImg}
                                                alt={student.name}
                                                className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 group-hover:border-blue-100 transition-colors"
                                            />
                                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border border-gray-100 shadow-sm">
                                                <Briefcase
                                                    size={12}
                                                    className="text-blue-600"
                                                />
                                            </div>
                                        </div>
                                        {/* Category Badge */}
                                        <span className="text-[10px] font-bold tracking-wide text-slate-400 uppercase bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            {student.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                                        {student.name}
                                    </h3>
                                    <p className="text-sm font-medium text-slate-500 mb-4">
                                        {student.role}
                                    </p>

                                    {/* Quote Section */}
                                    <div className="relative bg-gray-50 p-3 rounded-lg border border-gray-100 mb-4">
                                        <Quote
                                            size={16}
                                            className="text-blue-200 absolute -top-2 -left-2 fill-current"
                                        />
                                        <p className="text-xs text-slate-600 italic leading-relaxed pt-1">
                                            "{student.quote}"
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom: Company Brand */}
                                <div className="mt-2 pt-4 border-t border-dashed border-gray-200 group-hover:border-solid group-hover:border-blue-50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                                                Works at
                                            </p>
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {student.company}
                                            </p>
                                        </div>
                                        <img
                                            src={student.companyLogo}
                                            alt={student.company}
                                            className="
                                        h-6 w-auto max-w-[90px] object-contain 
                                        group-hover:grayscale-0 group-hover:opacity-100 
                                        transition-all duration-500
                                    "
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <HiringPartners /> */}

            {/* 3. CTA Section */}
            <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to write your own story?
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                        Thousands are learning future-proof skills & landing
                        real opportunities through Learnvera. Your seat is open
                        — if you choose it.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/courses"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                        >
                            Explore Courses <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-8 py-4 border-2 border-white hover:border-blue-300 text-white hover:text-blue-300 rounded-xl font-bold transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Talk to Counselor
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
