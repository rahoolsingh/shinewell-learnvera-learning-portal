import { Link } from "react-router";
import placements from "../data/successStories.js";

export default function PlacementSuccess() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Subtle Background Pattern (Dot Grid) - Professional Texture */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            ></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    {/* <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                        From Learning to{" "}
                        <span className="text-blue-600">Leading</span>
                    </h2> */}
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Our students don't just find jobs; they embark on
                        transformative careers at the forefront of technology.
                        Discover their journeys from learners to industry
                        leaders.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* arrange randomly */}
                    {placements.sort(() => 0.5 - Math.random()).map((student, index) => (
                        <div
                            key={index}
                            className="
                                group
                                relative
                                flex flex-col justify-between
                                border border-dashed border-gray-400
                                transition-all duration-300 ease-in-out
                                p-5 h-full rounded-2xl
                                hover:border-blue-200 
                            "
                        >
                            {/* Card Header: Student Profile */}
                            <div className="flex gap-4 items-center">
                                <div className="flex items-start justify-between">
                                    <div className="relative">
                                        <img
                                            src={student.studentImg}
                                            alt={student.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-gray-100  transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                                        {student.name}
                                    </h3>
                                    <p className="text-xs font-medium text-slate-500">
                                        {student.role}
                                    </p>
                                </div>
                            </div>

                            {/* Card Footer: Company Brand */}
                            <div className="mt-4 pt-4 border-t border-dashed border-gray-200 group-hover:border-solid group-hover:border-blue-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                                            Hired By
                                        </p>
                                        <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {student.company}
                                        </p>
                                    </div>
                                    <img
                                        src={student.companyLogo}
                                        alt={student.company}
                                        className="
                      h-6 w-auto max-w-[80px] object-contain 
                      filter opacity-60
                      group-hover:grayscale-0 group-hover:opacity-100 
                      transition-all duration-500
                    "
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: "View All" Button */}
                <div className="mt-12 text-center">
                    <Link
                        to="/placements"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                    >
                        View All Success Stories
                    </Link>
                </div>
            </div>
        </section>
    );
}
