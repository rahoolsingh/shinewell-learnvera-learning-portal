import amazonLogo from "../assets/brands/amazon.png";
import googleLogo from "../assets/brands/google.png";
import microsoftLogo from "../assets/brands/microsoft.png";
import infosysLogo from "../assets/brands/infosys.png";
import cognizantLogo from "../assets/brands/cognizant.png";
import tcsLogo from "../assets/brands/tcs.png";
import adobeLogo from "../assets/brands/adobe.png";
import flipkartLogo from "../assets/brands/flipkart.png";
import swiggyLogo from "../assets/brands/swiggy.png";
import zomatoLogo from "../assets/brands/zomato.png";
import { Link } from "react-router";

// 10 Success Stories
const placements = [
    {
        name: "Arjun Verma",
        role: "SDE II",
        company: "Amazon",
        studentImg:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop",
        companyLogo: amazonLogo,
    },
    {
        name: "Sarah Jen",
        role: "UX Designer",
        company: "Google",
        companyLogo: googleLogo,
    },
    {
        name: "Rohan Das",
        role: "Frontend Dev",
        company: "Microsoft",
        companyLogo: microsoftLogo,
    },
    {
        name: "Priya Sethi",
        role: "Data Analyst",
        company: "Flipkart",
        companyLogo: flipkartLogo,
    },
    {
        name: "Vikram Singh",
        role: "Backend Eng.",
        company: "Swiggy",
        companyLogo: swiggyLogo,
    },
    {
        name: "David Chen",
        role: "DevOps Eng.",
        company: "IBM",
        studentImg:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        companyLogo: infosysLogo,
    },
    {
        name: "Meera Nair",
        role: "Systems Eng.",
        company: "TCS",
        studentImg:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
        companyLogo: tcsLogo,
    },
    {
        name: "Kabir Khan",
        role: "Full Stack",
        company: "Zomato",
        studentImg:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
        companyLogo: zomatoLogo,
    },
    {
        name: "Tara Lewis",
        role: "QA Engineer",
        company: "Adobe",
        studentImg:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
        companyLogo: adobeLogo,
    },
    {
        name: "Anil Kapoor",
        role: "Cloud Architect",
        company: "Cognizant",
        studentImg:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop",
        companyLogo: cognizantLogo,
    },
];

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {placements.map((student, index) => (
                        <div
                            key={index}
                            className="
                group
                relative
                flex flex-col justify-between
                border border-dashed border-gray-400
                transition-all duration-300 ease-in-out
                p-5 h-full
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
                                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                                        Hired By
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
