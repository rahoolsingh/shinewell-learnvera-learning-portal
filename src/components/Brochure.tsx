import { FileText, Code2, Sparkles, GraduationCap, Rocket } from "lucide-react";
import GetEbook from "./GetEbook";

// --- Main Brochure Section Component ---
export default function BrochureSection() {
    return (
        <section className="py-24 relative overflow-hidden" id="resources">
            {/* Texture Background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            ></div>

            <div className="text-center mb-12 max-w-7xl mx-auto px-2">
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                    Get Started with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        Free Resources
                    </span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Download our comprehensive course brochure, detailed
                    syllabus, and exclusive skill-up guide to get a head start
                    on your path to a successful tech career.
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Creative Cards Layout - Now 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                    {/* 1. Brochure Card */}
                    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 border-2 border-dashed border-blue-200">
                        <div className="relative p-8 h-full flex flex-col">
                            {/* Icon Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap className="text-blue-600 w-7 h-7" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/50 border border-blue-100 text-[10px] font-bold uppercase text-blue-600 tracking-wider backdrop-blur-sm">
                                    Career Roadmap
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                                Course Brochure
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                                Discover real-world success stories, placement
                                stats, and detailed program insights. Your
                                roadmap to an exciting career starts here.
                            </p>

                            {/* Download Action */}
                            <div className="mt-auto border-blue-100/50">
                                <GetEbook
                                    ebook="Learnvera Brochure.pdf"
                                    title="Program Brochure"
                                    buttonText="Download Brochure"
                                    smallText="Placement & Career Guide"
                                    className="hover:!bg-blue-100 !bg-blue-50 hover:!border-blue-200 !border-blue-200 hover:!text-blue-700 !text-blue-700 !flex-row-reverse !w-full !justify-between !py-3 !text-left"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2. Syllabus Card */}
                    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 border-2 border-dashed border-purple-200">
                        <div className="relative p-8 h-full flex flex-col">
                            {/* Icon Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Code2 className="text-purple-600 w-7 h-7" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/50 border border-purple-100 text-[10px] font-bold uppercase text-purple-600 tracking-wider backdrop-blur-sm">
                                    Technical Deep Dive
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                                Detailed Syllabus
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                                Get a complete breakdown of every module, tool,
                                and strategy. Learn how to master SEO, social
                                media, paid ads, content marketing, AI tools and
                                more.
                            </p>

                            {/* Download Action */}
                            <div className="mt-auto border-purple-100/50">
                                <GetEbook
                                    ebook="Learnvera Course Syllabus.pdf"
                                    title="Detailed Syllabus"
                                    buttonText="Download Syllabus"
                                    smallText="Full Curriculum Breakdown"
                                    className="hover:!bg-purple-100 !bg-purple-50 hover:!border-purple-200 !border-purple-200 hover:!text-purple-700 !text-purple-700 !flex-row-reverse !w-full !justify-between !py-3 !text-left"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 3. Skill Up Guide Card */}
                    <div className="group relative rounded-xl overflow-hidden transition-all duration-300 border-2 border-dashed border-green-200">
                        <div className="relative p-8 h-full flex flex-col">
                            {/* Icon Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-emerald-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Rocket className="text-emerald-600 w-7 h-7" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/50 border border-emerald-100 text-[10px] font-bold uppercase text-emerald-600 tracking-wider backdrop-blur-sm">
                                    Bonus Content
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                                Skill Up Guide
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                                Supercharge your career with our exclusive
                                guide. Packed with interview strategies,
                                client-winning tips, growth hacks, and
                                productivity techniques.
                            </p>

                            {/* Download Action */}
                            <div className="mt-auto border-emerald-100/50">
                                <GetEbook
                                    ebook="Learnvera Career Ebook.pdf"
                                    title="Skill Up Guide"
                                    buttonText="Download Free Ebook Worth ₹999/-"
                                    smallText="Digital Marketing Career Blueprint"
                                    className="hover:!bg-emerald-100 !bg-emerald-50 hover:!border-emerald-200 !border-emerald-200 hover:!text-emerald-700 !text-emerald-700 !flex-row-reverse !w-full !justify-between !py-3 !text-left"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
