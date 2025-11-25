import { ArrowRight, Quote, Briefcase } from "lucide-react";
import { Link } from "react-router"; // Ensure react-router-dom is installed

// --- Asset Imports (Using placeholders where needed) ---
import amazonLogo from "../assets/brands/amazon.png";
import googleLogo from "../assets/brands/google.png";
import microsoftLogo from "../assets/brands/microsoft.png";
import infosysLogo from "../assets/brands/infosys.png";
import tcsLogo from "../assets/brands/tcs.png";
import flipkartLogo from "../assets/brands/flipkart.png";
import swiggyLogo from "../assets/brands/swiggy.png";
import zomatoLogo from "../assets/brands/zomato.png";
import adobeLogo from "../assets/brands/adobe.png";
import cognizantLogo from "../assets/brands/cognizant.png";
import PlacementProcess from "../components/PlacementJourney";

// --- Mock Data ---
const allStories = [
    {
        id: 1,
        name: "Arjun Verma",
        role: "SDE II",
        company: "Amazon",
        category: "Full Stack",
        quote: "The curriculum bridges the gap between theory and what industry actually needs.",
        studentImg:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop",
        companyLogo: amazonLogo,
    },
    {
        id: 2,
        name: "Sarah Jen",
        role: "UX Designer",
        company: "Google",
        category: "Design",
        quote: "From zero knowledge to a Google offer. The mentorship was life-changing.",
        studentImg:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        companyLogo: googleLogo,
    },
    {
        id: 3,
        name: "Rohan Das",
        role: "Frontend Dev",
        company: "Microsoft",
        category: "Frontend",
        quote: "React and Tailwind modules were spot on. I use them every day now.",
        studentImg:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        companyLogo: microsoftLogo,
    },
    {
        id: 4,
        name: "Priya Sethi",
        role: "Data Analyst",
        company: "Flipkart",
        category: "Data",
        quote: "The capstone projects gave me the confidence to crack the technical rounds.",
        studentImg:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
        companyLogo: flipkartLogo,
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Backend Eng.",
        company: "Swiggy",
        category: "Backend",
        quote: "Backend system design concepts were explained beautifully.",
        studentImg:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
        companyLogo: swiggyLogo,
    },
    {
        id: 6,
        name: "David Chen",
        role: "DevOps Eng.",
        company: "IBM",
        category: "DevOps",
        quote: "Learned more here in 6 months than 4 years of college.",
        studentImg:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
        companyLogo: infosysLogo,
    },
    {
        id: 7,
        name: "Meera Nair",
        role: "Systems Eng.",
        company: "TCS",
        category: "Full Stack",
        quote: "The mock interviews were harder than the real thing, which made me ready.",
        studentImg:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
        companyLogo: tcsLogo,
    },
    {
        id: 8,
        name: "Kabir Khan",
        role: "Full Stack",
        company: "Zomato",
        category: "Full Stack",
        quote: "I built a clone of Zomato in class, now I work there. Surreal.",
        studentImg:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
        companyLogo: zomatoLogo,
    },
    {
        id: 9,
        name: "Tara Lewis",
        role: "QA Engineer",
        company: "Adobe",
        category: "QA",
        quote: "The testing strategies I learned landed me a role at Adobe.",
        studentImg:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
        companyLogo: adobeLogo,
    },
    {
        id: 10,
        name: "Anil Kapoor",
        role: "Cloud Architect",
        company: "Cognizant",
        category: "Cloud",
        quote: "The cloud computing modules were in-depth and industry-relevant.",
        studentImg:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop",
        companyLogo: cognizantLogo,
    },
    {
        id: 11,
        name: "Sneha Reddy",
        role: "AI Specialist",
        company: "IBM",
        category: "AI/ML",
        quote: "The AI projects were challenging but rewarding. Got my dream job!",
        studentImg:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
        companyLogo: infosysLogo,
    },
    {
        id: 12,
        name: "Karan Mehta",
        role: "Mobile Developer",
        company: "Google",
        category: "Mobile",
        quote: "The Android course was top-notch. Landed a role at Google right after.",
        studentImg:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
        companyLogo: googleLogo,
    },
];

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
                        Our Wall of{" "}
                        <span className="text-blue-600">Impact</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Read the stories of students who transformed their
                        careers. From curiosity to code, from learning to
                        leading.
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
                                        <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                                            Works at
                                        </div>
                                        <img
                                            src={student.companyLogo}
                                            alt={student.company}
                                            className="
                                        h-6 w-auto max-w-[90px] object-contain 
                                        filter grayscale opacity-60
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
                        Join the community of developers who are shaping the
                        future. Your logo could be next on our wall.
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
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white rounded-xl font-bold transition-all hover:bg-slate-800"
                        >
                            Talk to Counselor
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
