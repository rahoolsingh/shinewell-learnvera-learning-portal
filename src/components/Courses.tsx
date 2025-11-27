import {
    Star,
    CheckCircle2,
    ChevronDown,
    TrendingUp,
    Flame,
    Sparkles,
} from "lucide-react";
// --- MODIFIED: Added useEffect ---
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import courseData from "../data/courses.js";
import { Link } from "react-router";

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
    cyan: {
        border: "border-cyan-200",
        badgeBg: "bg-cyan-600",
        durationBg: "bg-cyan-100",
        durationText: "text-cyan-700",
        tagBg: "bg-cyan-50",
        tagText: "text-cyan-600",
        check: "text-cyan-600",
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

// --- *** NEW: useMediaQuery Hook *** ---
// This hook checks if the screen matches a CSS media query.
// It's client-safe and avoids hydration mismatches.
const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
};

// --- DISCOUNT CALCULATOR (Unchanged) ---
const calculateDiscountPercentage = (mrpStr, discountedStr) => {
    if (!mrpStr || !discountedStr) return null;
    const parsePrice = (price) => {
        return parseFloat(price.replace(/[^0-9.]/g, ""));
    };
    const mrp = parsePrice(mrpStr);
    const discounted = parsePrice(discountedStr);
    if (isNaN(mrp) || isNaN(discounted) || mrp <= 0 || mrp <= discounted) {
        return null;
    }
    const discount = ((mrp - discounted) / mrp) * 100;
    return `${Math.round(discount)}%`;
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
const CourseCard = ({
    course,
    isDesktop,
    isGlobalExpanded,
    onToggleGlobalExpand,
}) => {
    const palette = colorPalettes[course.theme] || colorPalettes.blue;
    // Local state for individual expansion on mobile
    const [isLocalExpanded, setIsLocalExpanded] = useState(false);

    // --- *** NEW: Determine expansion state *** ---
    // Use global state on desktop, local state on mobile
    const isExpanded = isDesktop ? isGlobalExpanded : isLocalExpanded;

    const contentId = `course-details-${course.id}`;
    const badge = course.badge;
    const badgeColor = badgeColors[badge?.color] || badgeColors.pink;
    const BadgeIcon = badge ? iconMap[badge.icon] || TrendingUp : null;

    const discountPercent = calculateDiscountPercentage(
        course.mrp,
        course.discountedPrice
    );

    // --- *** NEW: Toggle handler *** ---
    // Toggles global state on desktop, local state on mobile
    const toggleExpand = () => {
        if (isDesktop) {
            onToggleGlobalExpand();
        } else {
            setIsLocalExpanded(!isLocalExpanded);
        }
    };

    return (
        <div
            className={`flex flex-col bg-white rounded-2xl shadow-lg border-2 ${palette.border} hover:border-dashed transition-all duration-300 relative`}
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

            {/* CONTENT (Unchanged structure, but button logic is modified) */}
            <div className="p-6 flex flex-col flex-grow">
                <h2
                    className={`text-xl font-bold text-gray-900 ${
                        isExpanded ? "" : "line-clamp-2"
                    }`}
                >
                    {course.headline}
                </h2>

                <div className="pt-2">
                    <p
                        className={`text-xs lg:text-sm text-gray-500 ${
                            isExpanded ? "" : "line-clamp-1"
                        }`}
                    >
                        {course.subheadline}
                    </p>

                    <p
                        className={`text-sm text-gray-600 mt-5 leading-relaxed ${
                            isExpanded ? "" : "line-clamp-2"
                        }`}
                    >
                        {course.description}
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

                {/* --- *** MODIFIED: COLLAPSE BUTTON *** --- */}
                {/* Added mt-auto to push this block to the bottom for alignment */}
                <div
                    className={`text-center relative ${
                        isExpanded ? "pb-0" : "mt-auto pb-8"
                    } pt-4`}
                >
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
                        onClick={toggleExpand} // Use new toggle handler
                        className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                            palette.tagText
                        } ${
                            !isExpanded
                                ? "shadow-md bg-white -mt-3"
                                : "shadow-none mt-2"
                        } relative px-4 py-1.5 rounded-full transition-all duration-300`}
                        aria-expanded={isExpanded} // Uses the correct derived state
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

                {/* --- *** MODIFIED: COLLAPSIBLE CONTENT *** --- */}
                <AnimatePresence>
                    {isExpanded && ( // Uses the correct derived state
                        <motion.div
                            id={contentId}
                            key="collapsible-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <CollapsibleContent
                                course={course}
                                palette={palette}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div
                    className={`relative border -m-2 px-4 py-2 rounded-2xl pt-3 bg-gray-50 ${
                        isExpanded && "mt-auto"
                    }`}
                >
                    <div className="flex items-end justify-between mb-4">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-medium">
                                EMI Starting At
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                    {course.emi?.split("/")[0]}{" "}
                                    <span className="text-sm md:text-base font-normal text-slate-500">
                                        /mo
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-500 relative">
                                {course.mrp}
                            </p>
                            <p className="text-xs text-gray-400">
                                Course Price
                            </p>
                        </div>
                    </div>

                    {/* Enroll Button (Unchanged) */}
                    <div className="relative group w-full">
                        {/* <motios */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 animate-borderFlow"></div>
                        <Link
                            to={`/course-details/${course.id}?q=${course.headline
                                ?.toLowerCase()
                                .replace(/\s+/g, "-")}`}
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
                        </Link>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        {course.availability}
                    </p>
                </div>
            </div>
        </div>
    );
};

// --- *** MODIFIED: MAIN COMPONENT *** ---
export default function CompleteDigitalMarketingCourses() {
    // --- NEW: State for screen size and global expansion ---
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const [isGlobalExpanded, setIsGlobalExpanded] = useState(false);

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

                <h2
                    className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight"
                    id="courses"
                >
                    Complete Digital Marketing{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                        Courses
                    </span>
                </h2>

                {/* --- MODIFIED: Course Grid --- */}
                {/* Now passes down the global state and toggle function */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courseData.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            isDesktop={isDesktop}
                            isGlobalExpanded={isGlobalExpanded}
                            onToggleGlobalExpand={() =>
                                setIsGlobalExpanded((prev) => !prev)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
