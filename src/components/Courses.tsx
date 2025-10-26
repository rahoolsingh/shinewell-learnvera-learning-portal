import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

// --- Data for the courses ---
// This is separated so you can easily update it later
const courseData = [
    {
        id: 1,
        theme: "purple",
        badge: "LaunchPad",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Foundation",
        duration: "1 Month",
        rating: 5,
        tags: ["Beginner", "Live Cohort", "Hands-on Projects"],
        description:
            "Build a solid base in websites, SEO, ads, and analytics—perfect for beginners and career switchers.",
        deliverables: [
            "Set up WordPress, GA4, and Search Console",
            "Publish SEO-ready pages and 2 blog posts",
            "Draft Google & Meta ad campaigns with creatives",
            "Track key events and build a simple report",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
    },
    {
        id: 2,
        theme: "green",
        badge: "Growth Pro",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Professional",
        duration: "2 Month",
        rating: 5,
        tags: ["Intermediate", "Performance Focus", "Real Campaigns"],
        description:
            "Plan, launch, and optimize ROI-focused Meta & Google Ads with data-driven reporting.",
        deliverables: [
            "Full-funnel Meta Ads: cold, retargeting, lookalikes",
            "Google Search YouTube: keywords, bids, extensions",
            "GA4 + GTM conversions and Looker dashboards",
            "Scaling, A/B testing, and policy compliance",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
    },
    {
        id: 3,
        theme: "blue",
        badge: "Omni Master",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Mastery",
        duration: "3 Month",
        rating: 5,
        tags: ["Advanced", "CRO", "Content Engine"],
        description:
            "Design high-converting funnels, ship content engines, and run email/WhatsApp lifecycle.",
        deliverables: [
            "Landing page UX and A/B testing for higher CVR",
            "AI-assisted content: pillar + repurposed assets",
            "Shopify setup with analytics and attribution",
            "Email & WhatsApp automations for nurture/retention",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
    },
    {
        id: 4,
        theme: "orange",
        badge: "Complete",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Specialization",
        duration: "4 Month",
        rating: 5,
        tags: ["Expert", "GTM/GA4", "Automation"],
        description:
            "Master GTM/GA4 tracking, build automations, and package services like an agency.",
        deliverables: [
            "GTM data layer events and advanced GA4 reporting",
            "Zapier/Integromat flows: lead routing, scoring, SLAs",
            "Launch a digital product funnel end-to-end",
            "Pricing, proposals, and SOPs to scale services",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
    },
];

// --- Color Palettes ---
// This object provides the dynamic Tailwind classes safely
const colorPalettes = {
    purple: {
        border: "border-purple-200",
        badgeBg: "bg-purple-600",
        durationBg: "bg-purple-100",
        durationText: "text-purple-700",
        tagBg: "bg-purple-50",
        tagText: "text-purple-600",
        check: "text-purple-600",
        buttonFrom: "from-purple-500",
        buttonTo: "to-purple-600",
        shadow: "shadow-purple-200/50",
    },
    green: {
        border: "border-green-200",
        badgeBg: "bg-green-600",
        durationBg: "bg-green-100",
        durationText: "text-green-700",
        tagBg: "bg-green-50",
        tagText: "text-green-600",
        check: "text-green-600",
        buttonFrom: "from-green-500",
        buttonTo: "to-green-600",
        shadow: "shadow-green-200/50",
    },
    blue: {
        border: "border-blue-200",
        badgeBg: "bg-blue-600",
        durationBg: "bg-blue-100",
        durationText: "text-blue-700",
        tagBg: "bg-blue-50",
        tagText: "text-blue-600",
        check: "text-blue-600",
        buttonFrom: "from-blue-500",
        buttonTo: "to-blue-600",
        shadow: "shadow-blue-200/50",
    },
    orange: {
        border: "border-orange-200",
        badgeBg: "bg-orange-600",
        durationBg: "bg-orange-100",
        durationText: "text-orange-700",
        tagBg: "bg-orange-50",
        tagText: "text-orange-600",
        check: "text-orange-600",
        buttonFrom: "from-orange-500",
        buttonTo: "to-orange-600",
        shadow: "shadow-orange-200/50",
    },
};

// --- Reusable Star Rating Component ---
const StarRating = ({ rating, className = "" }) => {
    return (
        <div className={`flex items-center gap-0.5 ${className}`}>
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-4 h-4 ${
                        index < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={index < rating ? "currentColor" : "none"}
                />
            ))}
        </div>
    );
};

// --- Reusable Course Card Component ---
const CourseCard = ({ course }) => {
    const palette = colorPalettes[course.theme];

    return (
        <div
            className={`flex flex-col bg-white rounded-2xl shadow-lg border-2 ${palette.border} hover:border-dashed overflow-hidden transition-all duration-300`}
        >
            {/* Image and Badge */}
            <div className="relative p-2">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full aspect-video object-cover rounded-xl"
                />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-gray-900">
                        {course.category}
                    </h2>
                    <span
                        className={`px-3 py-1 text-xs font-bold rounded-full ${palette.durationBg} ${palette.durationText}`}
                    >
                        {course.duration}
                    </span>
                </div>

                <p className="flex items-center gap-2 text-xs mb-4 text-gray-700  ">
                    <StarRating rating={course.rating} />
                    {course.reviewCount || "0"} Reviews
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-medium rounded-md ${palette.tagBg} ${palette.tagText}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <hr className="my-4 border-gray-200" />

                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    {course.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                    {course.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                            <CheckCircle2
                                className={`w-4 h-4 ${palette.check} flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-xs text-gray-700">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Button and Availability (pushed to bottom) */}
                <div className="mt-auto">
                    <button
                        className={`w-full py-3 px-6 rounded-lg text-white font-semibold text-lg 
              bg-gradient-to-r ${palette.buttonFrom} ${palette.buttonTo} 
              shadow-md ${palette.shadow} transition-all duration-300 hover:shadow-lg hover:opacity-90`}
                    >
                        Enquire Now
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                        {course.availability}
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- Main Exported Component ---
export default function CompleteDigitalMarketingCourses() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                    Complete Digital Marketing{" "}
                    <span className="text-blue-600">Courses</span>
                </h1>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courseData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
