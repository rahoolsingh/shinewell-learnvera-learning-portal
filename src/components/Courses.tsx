import {
    Star,
    CheckCircle2,
    ChevronDown,
    TrendingUp,
    Flame,
    Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import courseData from "../data/courses.js";

// --- THEME COLORS (Unchanged) ---
const colorPalettes = {
    purple: {
        border: "border-purple-200",
        badgeBg: "bg-purple-600",
        durationBg: "bg-purple-100",
        durationText: "text-purple-700",
        tagBg: "bg-purple-50",
        tagText: "text-purple-600",
        check: "text-purple-600",
    },
    green: {
        border: "border-green-200",
        badgeBg: "bg-green-600",
        durationBg: "bg-green-100",
        durationText: "text-green-700",
        tagBg: "bg-green-50",
        tagText: "text-green-600",
        check: "text-green-600",
    },
    blue: {
        border: "border-blue-200",
        badgeBg: "bg-blue-600",
        durationBg: "bg-blue-100",
        durationText: "text-blue-700",
        tagBg: "bg-blue-50",
        tagText: "text-blue-600",
        check: "text-blue-600",
    },
    orange: {
        border: "border-orange-200",
        badgeBg: "bg-orange-600",
        durationBg: "bg-orange-100",
        durationText: "text-orange-700",
        tagBg: "bg-orange-50",
        tagText: "text-orange-600",
        check: "text-orange-600",
    },
};

// --- BADGE COLOR MAP (Unchanged) ---
const badgeColors = {
    pink: {
        bg: "bg-pink-100",
        text: "text-pink-700",
        border: "border-pink-300",
        icon: "text-pink-600",
    },
    blue: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-300",
        icon: "text-blue-600",
    },
    orange: {
        bg: "bg-orange-100",
        text: "text-orange-700",
        border: "border-orange-300",
        icon: "text-orange-600",
    },
    green: {
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
        icon: "text-green-600",
    },
    purple: {
        bg: "bg-purple-100",
        text: "text-purple-700",
        border: "border-purple-300",
        icon: "text-purple-600",
    },
};

// --- ICON MAP (Unchanged) ---
const iconMap = {
    upchart: TrendingUp,
    flame: Flame,
    sparkles: Sparkles,
};

// --- STAR RATING (Unchanged) ---
const StarRating = ({ rating }) => (
    <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < rating ? "currentColor" : "none"}
            />
        ))}
    </div>
);

// --- COLLAPSIBLE CONTENT (Unchanged) ---
const CollapsibleContent = ({ course, palette }) => (
    <>
        <hr className="my-4 border-gray-200" />
        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            {course.description}
        </p>

        {course?.deliverables && (
            <div className="space-y-2 mb-6">
                <h3 className="text-sm font-semibold text-gray-800">
                    What You'll Learn
                </h3>
                {course.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                        <CheckCircle2
                            className={`w-4 h-4 ${palette.check} flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-xs text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
        )}

        {course?.outcomes && (
            <div className="space-y-2 mb-6">
                <h3 className="text-sm font-semibold text-gray-800">
                    Course Outcomes
                </h3>
                {course.outcomes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                        <CheckCircle2
                            className={`w-4 h-4 ${palette.check} flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-xs text-gray-700">{item}</span>
                    </div>
                ))}
            </div>
        )}
    </>
);

// --- *** MODIFIED: CourseCard Component *** ---
const CourseCard = ({ course }) => {
    const palette = colorPalettes[course.theme] || colorPalettes.blue;
    const [isExpanded, setIsExpanded] = useState(false);
    const contentId = `course-details-${course.id}`;
    const badge = course.badge;
    const badgeColor = badgeColors[badge?.color] || badgeColors.pink;
    const BadgeIcon = badge ? iconMap[badge.icon] || TrendingUp : null;

    return (
        <div
            className={`flex flex-col bg-white rounded-2xl shadow-lg border-2 ${palette.border} hover:border-dashed overflow-hidden transition-all duration-300 relative`}
        >
            {/* BADGE (Unchanged) */}
            {badge && (
                <div
                    className={`absolute top-3 left-3 z-10 flex items-center gap-1 px-3 py-1 rounded-full border ${badgeColor.bg} ${badgeColor.border}`}
                >
                    {BadgeIcon && (
                        <BadgeIcon className={`w-4 h-4 ${badgeColor.icon}`} />
                    )}
                    <span
                        className={`text-xs font-semibold uppercase ${badgeColor.text}`}
                    >
                        {badge.label}
                    </span>
                </div>
            )}

            {/* IMAGE (Unchanged) */}
            <div className="relative p-2">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full aspect-video object-cover rounded-xl"
                />
                {course?.duration && (
                    <span
                        className={`absolute -bottom-2 border-2 border-white right-4 px-2 py-1 text-xs font-bold rounded-full ${palette.durationBg} ${palette.durationText}`}
                    >
                        {course.duration}
                    </span>
                )}
            </div>

            {/* CONTENT (Unchanged) */}
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900">
                    {course.headline}
                </h2>

                <div className="pt-2">
                    <p className="text-xs lg:text-sm text-gray-500">
                        {course.subheadline}
                    </p>

                    {course?.rating && (
                        <div className="flex items-center gap-2 text-xs my-2 text-gray-700">
                            <StarRating rating={course.rating} />
                        </div>
                    )}

                    {course?.tags && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {course.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`px-3 py-1 text-xs font-medium rounded-md ${palette.tagBg} ${palette.tagText}`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* --- MOBILE COLLAPSE (Unchanged) --- */}
                <div className="lg:hidden text-center relative">
                    <AnimatePresence>
                        {!isExpanded && (
                            <motion.div
                                key="fade"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute -top-12 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                            palette.tagText
                        } ${
                            !isExpanded
                                ? "shadow-md bg-white -mt-3"
                                : "shadow-none mt-2"
                        } relative px-4 py-1.5 rounded-full transition-all duration-300`}
                        aria-expanded={isExpanded}
                        aria-controls={contentId}
                    >
                        <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                        />
                    </button>
                </div>

                {/* COLLAPSIBLE CONTENT (MOBILE) (Unchanged) */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            id={contentId}
                            key="collapsible-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden lg:hidden"
                        >
                            <CollapsibleContent
                                course={course}
                                palette={palette}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* STATIC CONTENT (DESKTOP) (Unchanged) */}
                <div className="hidden lg:block">
                    <CollapsibleContent course={course} palette={palette} />
                </div>

                {/* --- *** MODIFIED: FOOTER/OFFER SECTION *** --- */}
                <div className="mt-auto relativ border -m-2 px-4 py-2 rounded-2xl bg-gray-50">
                    {/* Offer Banner  */}
                    <motion.p
                        className="text-center text-sm font-bold text-red-600 mb-3"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Anniversary Week Special Offer!
                    </motion.p>

                    {/* New Price Display Component */}

                    <div className="flex justify-center items-center mb-5">
                        {/* Prices */}
                        <div className="flex items-baseline gap-2 justify-center">
                            <span className="text-3xl font-extrabold text-gray-900">
                                {course.discountedPrice}
                            </span>
                            <span className="text-lg font-bold text-gray-500 relative px-2">
                                {course.mrp}
                                <span className="absolute inset-0 top-1/2 border-t-4 border-red-500 transform -rotate-12"></span>
                            </span>
                        </div>
                    </div>

                    {/* Enroll Button (Unchanged) */}
                    <div className="relative group w-full">
                        {/* offer banner flash */}
                        <motion.p
                            className="inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded-full absolute -top-3 left-3 z-10"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                yoyo: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            OFFER
                        </motion.p>
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 animate-borderFlow"></div>
                        <a
                            href={`course-details/${
                                course.id
                            }?q=${course.headline
                                ?.toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                className="relative w-full px-8 py-2 text-xl font-extrabold text-white rounded-xl overflow-hidden transform skew-x-[-10deg]
                  bg-gradient-to-r from-teal-500 via-purple-500 to-cyan-500 animate-gradientFlow
                  hover:skew-x-0 hover:scale-105 active:scale-98
                  transition-all duration-300 ease-out
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                  before:transform before:-translate-x-full before:skew-x-[-20deg]
                  hover:before:translate-x-full before:transition-transform before:duration-700"
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

// --- MAIN COMPONENT (Unchanged) ---
export default function CompleteDigitalMarketingCourses() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header (Unchanged) */}
                <div className="flex items-center gap-2 mb-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500 animate-pulse"
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
                </div>

                <h1
                    className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
                    id="courses"
                >
                    Complete Digital Marketing{" "}
                    <span className="text-blue-600 relative">Courses</span>
                </h1>

                {/* Course Grid (Unchanged) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courseData.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
