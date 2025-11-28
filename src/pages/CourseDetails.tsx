import {
    Star,
    CheckCircle2,
    BookOpen,
    ListChecks,
    HelpCircle,
    Download,
} from "lucide-react";
import { useParams } from "react-router";
import courseData from "../data/courses.js";
import { useEffect } from "react";
import { motion } from "framer-motion";
import GetEbook from "../components/GetEbook.js";
import WhatsAppCommunity from "../components/WhatsAppCommunity.js";

// ... (Keep colorPalettes, calculateDiscountPercentage, StarRating, DetailSection unchanged) ...
// For brevity, I am not repeating the unchanged helper components above.
// Ensure you keep your existing imports and helper components here.

const colorPalettes = {
    purple: {
        buttonFrom: "from-purple-500",
        buttonTo: "to-purple-700",
        text: "text-purple-600",
    },
    green: {
        buttonFrom: "from-green-500",
        buttonTo: "to-green-700",
        text: "text-green-600",
    },
    blue: {
        buttonFrom: "from-blue-500",
        buttonTo: "to-blue-700",
        text: "text-blue-600",
    },
    orange: {
        buttonFrom: "from-orange-500",
        buttonTo: "to-orange-700",
        text: "text-orange-600",
    },
};

const calculateDiscountPercentage = (mrpStr, discountedStr) => {
    if (!mrpStr || !discountedStr) return null;
    const parsePrice = (price) => parseFloat(price.replace(/[^0-9.]/g, ""));
    const mrp = parsePrice(mrpStr);
    const discounted = parsePrice(discountedStr);
    if (isNaN(mrp) || isNaN(discounted) || mrp <= 0 || mrp <= discounted)
        return null;
    return `${Math.round(((mrp - discounted) / mrp) * 100)}%`;
};

const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
        {[...Array(5)]?.map((_, i) => (
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

const DetailSection = ({ title, icon, children }) => (
    <div className="mb-12">
        <div className="flex items-center gap-3 mb-5">
            {icon && <div className="text-gray-500">{icon}</div>}
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        <div className="space-y-4">{children}</div>
    </div>
);

const EnrollButton = ({
    palette,
    text = "Enroll Now",
    enrollmentUrl = "#",
}) => (
    <a
        href={enrollmentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full sm:w-auto"
    >
        <button
            className={`relative px-6 py-3 w-full rounded text-base sm:text-lg font-bold text-white 
        bg-gradient-to-r ${palette.buttonFrom} ${palette.buttonTo}
        transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]
        overflow-hidden animate-buzz
        before:content-[''] before:absolute before:inset-0 before:-translate-x-full 
        before:animate-[shine_2.5s_infinite] 
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        before:skew-x-[-25deg]
        whitespace-nowrap
        `}
        >
            <span className="relative z-10">{text}</span>
        </button>
    </a>
);

export default function CourseDetailsPage() {
    

    const { id } = useParams();
    const course = courseData.find((c) => c.id === Number(id));
    if (!course)
        return (
            <div className="text-center py-20 text-gray-700">
                Course not found!
            </div>
        );

    const palette = colorPalettes[course?.theme] || colorPalettes.blue;

    return (
        // FIX 1: Added overflow-x-hidden to wrapper to prevent horizontal scroll glitch
        // FIX 2: Increased padding-bottom (pb-40) so content isn't hidden behind the sticky footer
        <section className="pt-32 pb-40 md:py-32 xl:pt-44 bg-gray-50 relative overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* --- Left Content --- */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            {course?.category && (
                                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 text-gray-700 mb-3">
                                    {course?.category}
                                </span>
                            )}
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                {course?.headline}
                            </h1>
                            <p className="text-lg text-gray-600 mt-4 mb-6">
                                {course?.subheadline}
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                {course?.description}
                            </p>
                            {course?.rating && (
                                <div className="flex items-center gap-4">
                                    <StarRating rating={course?.rating} />
                                    <span className="text-sm text-gray-600">
                                        {course?.rating}.0 Rating
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Instructor, Deliverables, Curriculum code remains exactly the same as your original ... */}
                        {course?.instructor && (
                            <div className="flex items-center gap-4 p-5 rounded-xl border bg-white mb-10 shadow-sm">
                                <img
                                    src={course?.instructor?.image}
                                    alt={course?.instructor?.name}
                                    className="w-16 h-16 rounded-full object-cover aspect-square"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {course?.instructor?.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {course?.instructor?.title}
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className="mb-10">
                            <WhatsAppCommunity variant="sleek" />
                        </div>

                        <DetailSection
                            title="What You'll Learn"
                            icon={<CheckCircle2 className="w-6 h-6" />}
                        >
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                {course?.deliverables?.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2"
                                    >
                                        <CheckCircle2
                                            className={`w-4 h-4 ${palette.text} flex-shrink-0 mt-1`}
                                        />
                                        <span className="text-sm text-gray-700">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </DetailSection>

                        <DetailSection
                            title="Course Outcome"
                            icon={<Star className="w-6 h-6" />}
                        >
                            <p>{course?.outcomes}</p>
                        </DetailSection>

                        {course?.curriculum && (
                            <DetailSection
                                title="Course Curriculum"
                                icon={<BookOpen className="w-6 h-6" />}
                            >
                                <div className="space-y-4">
                                    {course?.curriculum?.map((module) => (
                                        <div
                                            key={module.module}
                                            className="border rounded-lg overflow-hidden bg-white"
                                        >
                                            <div className="bg-gray-100 p-4 font-bold text-gray-800">
                                                Module {module.module}:{" "}
                                                {module.title}
                                            </div>
                                            <ul className="p-4 space-y-2">
                                                {module.topics?.map((topic) => (
                                                    <li
                                                        key={topic}
                                                        className="flex items-center gap-2 text-sm text-gray-700"
                                                    >
                                                        <span
                                                            className={`w-1.5 h-1.5 rounded-full ${palette.text} bg-current`}
                                                        ></span>
                                                        {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </DetailSection>
                        )}
                        {course?.prerequisites && (
                            <DetailSection
                                title="Prerequisites"
                                icon={<ListChecks className="w-6 h-6" />}
                            >
                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                    {course?.prerequisites?.map((req) => (
                                        <li key={req}>{req}</li>
                                    ))}
                                </ul>
                            </DetailSection>
                        )}

                        <hr className="my-3" />

                        {course?.faq && (
                            <DetailSection
                                title="Frequently Asked Questions"
                                icon={<HelpCircle className="w-6 h-6" />}
                            >
                                <div className="space-y-4">
                                    {course?.faq?.map((faq) => (
                                        <details
                                            key={faq.question}
                                            className="border rounded-lg p-4 bg-white shadow-sm group"
                                        >
                                            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                                                {faq.question}
                                                <span className="transition-transform group-open:rotate-180">
                                                    ▼
                                                </span>
                                            </summary>
                                            <p className="mt-2 text-sm text-gray-700 pt-2 border-t border-gray-100">
                                                {faq.answer}
                                            </p>
                                        </details>
                                    ))}
                                </div>
                            </DetailSection>
                        )}
                    </div>

                    {/* --- Right Sticky Card (Desktop Only basically, though visible on tablet) --- */}
                    <div className="lg:sticky lg:top-24 h-fit hidden lg:block">
                        <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
                            <img
                                src={course?.image}
                                alt={course?.title}
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2 gap-3">
                                    <h2 className="text-xl font-bold text-gray-900 leading-tight">
                                        {course?.headline}
                                    </h2>
                                    {course?.duration && (
                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                                            {course?.duration}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-end justify-between mb-6 pt-4 border-t border-gray-100">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                                            EMI Starting At
                                        </span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-extrabold text-slate-900">
                                                {course.emi?.split("/")[0]}
                                            </span>
                                            <span className="text-sm font-medium text-slate-500">
                                                /mo
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold decoration-slate-400/50">
                                            {course.mrp}
                                        </p>
                                        <p>
                                            Course Price
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <a
                                        href={course.enrollmentUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full"
                                    >
                                        <button
                                            className={`px-8 py-3.5 w-full rounded-xl text-lg font-bold text-white bg-gradient-to-r ${palette.buttonFrom} ${palette.buttonTo} hover:shadow-lg transition-all`}
                                        >
                                            Invest In Your Career
                                        </button>
                                    </a>
                                    <GetEbook
                                        ebook={course.ebook}
                                        title={course.headline + " Ebook"}
                                        className="w-full py-3.5"
                                        buttonText="Get Ebook worth ₹999/- for Free"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Sticky Offer Banner (FIXED) --- */}
            {/* FIXES:
               1. Removed max-w-[100vw] -> changed to w-full (Fixed horizontal scroll glitch)
               2. Added pb-[env(safe-area-inset-bottom)] (Fixed iPhone Home bar overlap)
               3. Used z-[100] to ensure it is above everything
            */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] w-full pb-[env(safe-area-inset-bottom)] pr-16 md:pr-0">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
                        {/* Hidden on mobile, visible on desktop */}
                        <div className="text-left hidden xl:block w-full">
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                                {course.headline}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-1">
                                {course.subheadline}
                            </p>
                        </div>

                        {/* Mobile Optimized Layout */}
                        <div className="items-center justify-between gap-3 sm:justify-end w-full flex flex-col md:flex-row">
                            {/* Price Section */}
                            <div className="flex items-center justify-between gap-4 w-full md:w-auto">
                                <div className="flex flex-col flex-shrink-0">
                                    <span className="text-[10px] text-slate-500 font-medium uppercase">
                                        EMI Starting At
                                    </span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl md:text-2xl font-extrabold text-slate-900">
                                            {course.emi?.split("/")[0]}
                                        </span>
                                        <span className="text-xs text-slate-500">
                                            /mo
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg md:text-xl font-bold text-slate-900">
                                        {course.mrp}
                                    </p>
                                    <p className="text-sm text-slate-900">
                                        Current Price
                                    </p>
                                </div>
                            </div>

                            {/* Buttons Section - wrapped to prevent squishing */}
                            <div className="flex items-center gap-2 flex-grow justify-end sm:flex-grow-0 w-full sm:w-auto">
                                <EnrollButton
                                    palette={palette}
                                    text="Invest in Your Career"
                                    enrollmentUrl={course.enrollmentUrl}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
