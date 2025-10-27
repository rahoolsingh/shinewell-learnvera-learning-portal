import { Star, CheckCircle2 } from "lucide-react";
import courseData from "../data/courses.js";

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
        buttonTo: "to-purple-800",
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
        buttonTo: "to-green-800",
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
        buttonTo: "to-blue-800",
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
        buttonTo: "to-orange-800",
        shadow: "shadow-orange-200/50",
    },
};

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

const CourseCard = ({ course }) => {
    const palette = colorPalettes[course.theme];

    return (
        <div
            className={`flex flex-col bg-white rounded-2xl shadow-lg border-2 ${palette.border} hover:border-dashed overflow-hidden transition-all duration-300`}
        >
            <div className="relative p-2">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full aspect-video object-cover rounded-xl"
                />
            </div>

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
                </p>

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

                <div className="mt-auto relative">
                    <div className="relative group w-full">
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 animate-borderFlow"></div>
                        <a
                            href={`course-details/${course.id}?cat=${course.category
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                className={`relative px-8 py-2 text-xl font-extrabold rounded-xl overflow-hidden w-full
    text-white transform skew-x-[-10deg] transition-all duration-300 ease-out 
    hover:skew-x-[0deg] hover:scale-105 active:scale-98
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
    before:transform before:translate-x-[-100%] before:skew-x-[-20deg]
    before:transition-transform before:duration-700 before:ease-out
    hover:before:translate-x-[100%]
    bg-gradient-to-r from-teal-500 via-purple-500 to-cyan-500 animate-gradientFlow`}
                            >
                                Enroll Now
                            </button>
                        </a>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        {course.availability}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function CompleteDigitalMarketingCourses() {
    return (
        <section className="py-16 md:py-24 bg-gray-50" id="courses">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="inline-flex items-center space-x-2 whitespace-nowrap">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className=" w-6 h-6 text-red-500 animate-pulse"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="opacity-25"
                        />
                        <circle
                            cx="12"
                            cy="12"
                            r="6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="opacity-75"
                        />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                    <span className="text-sm font-medium text-red-600">
                        LIVE CLASSES
                    </span>
                </p>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 ">
                    Complete Digital Marketing{" "}
                    <span className="text-blue-600 relative">Courses</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courseData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
