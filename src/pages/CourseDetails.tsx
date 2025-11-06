import {
    Star,
    CheckCircle2,
    BookOpen,
    ListChecks,
    HelpCircle,
} from "lucide-react";
import { useParams } from "react-router";
import courseData from "../data/courses.js";

// ... (colorPalettes, calculateDiscountPercentage, StarRating, DetailSection, EnrollButton components are unchanged) ...

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
    <a href={enrollmentUrl} target="_blank" rel="noopener noreferrer">
        <button
            className={`relative px-8 py-3 w-full rounded text-lg font-bold text-white 
        bg-gradient-to-r ${palette.buttonFrom} ${palette.buttonTo}
        transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]
        
        overflow-hidden animate-buzz
        
        before:content-[''] before:absolute before:inset-0 before:-translate-x-full 
        before:animate-[shine_2.5s_infinite] 
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        before:skew-x-[-25deg]
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

    // --- NEW ---
    // Calculate the discount percentage
    const discountPercent = calculateDiscountPercentage(
        course.mrp,
        course.discountedPrice
    );

    return (
        <section className="py-32 md:py-32 bg-gray-50 relative xl:pt-44">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* --- Left Content --- */}
                    <div className="lg:col-span-2">
                        {/* ... (Left content remains unchanged) ... */}
                        <div className="mb-8">
                            {course?.category && (
                                <span
                                    className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 text-gray-700 mb-3`}
                                >
                                    {course?.category}
                                </span>
                            )}
                            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
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

                        {course?.instructor && (
                            <div className="flex items-center gap-4 p-5 rounded-xl border bg-white mb-10 shadow-sm">
                                <img
                                    src={course?.instructor?.image}
                                    alt={course?.instructor?.name}
                                    className="w-16 h-16 rounded-full object-cover"
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
                                <p className="text-gray-700 -mt-2">
                                    Have questions about the course? Check out
                                    these FAQs:
                                </p>
                                <div className="space-y-4">
                                    {course?.faq?.map((faq) => (
                                        <details
                                            key={faq.question}
                                            className="border rounded-lg p-4 bg-white shadow-sm"
                                        >
                                            <summary className="font-semibold text-gray-900 cursor-pointer">
                                                {faq.question}
                                            </summary>
                                            <p className="mt-2 text-sm text-gray-700">
                                                {faq.answer}
                                            </p>
                                        </details>
                                    ))}
                                </div>
                            </DetailSection>
                        )}
                    </div>

                    {/* --- Right Sticky Card --- */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div
                            className={`bg-white rounded-2xl border shadow-md overflow-hidden hover:shadow-lg transition-shadow`}
                        >
                            <img
                                src={course?.image}
                                alt={course?.title}
                                className="w-full aspect-video object-cover"
                            />
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-1">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {course?.headline}
                                    </h2>
                                    {course?.duration && (
                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-700">
                                            {course?.duration}
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-700 mb-3 text-sm">
                                    {course?.subheadline}
                                </p>

                                <p className="text-gray-700 mb-6 text-xs">
                                    {course?.description}
                                </p>

                                {/* === NEW INTEGRATED UI === */}
                                <div className="mb-5 text-center">
                                    <p className="text-sm font-bold text-red-600 mb-2 flex items-center justify-center gap-2">
                                        {/* --- NEW --- */}
                                        {discountPercent && (
                                            <span className="text-lg font-bold text-green-600">
                                                ({discountPercent} OFF)
                                            </span>
                                        )}
                                        Anniversary Week Special Offer!
                                    </p>
                                    <div className="flex items-baseline gap-2 justify-center">
                                        <span className="text-3xl font-extrabold text-gray-900">
                                            {course.discountedPrice}
                                        </span>
                                        <span className="text-lg font-bold text-gray-500 relative px-2">
                                            {course.mrp}
                                            {/* Strikethrough line */}
                                            <span className="absolute inset-0 top-1/2 border-t-2 border-red-500 transform -rotate-12"></span>
                                        </span>
                                    </div>
                                </div>

                                {/* === RE-USING EXISTING BUTTON COMPONENT === */}

                                <a
                                    href={course.enrollmentUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className={`relative px-8 py-3 w-full rounded-xl text-lg font-bold text-white 
        bg-gradient-to-r ${palette.buttonFrom} ${palette.buttonTo}
        transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]
        
        overflow-hidden 
        
        before:content-[''] before:absolute before:inset-0 before:-translate-x-full 
        before:animate-[shine_2.5s_infinite] 
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        before:skew-x-[-25deg]
        `}
                                    >
                                        <span className="relative z-10">
                                            Enroll Now & Save {discountPercent}
                                        </span>
                                    </button>
                                </a>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    {course?.availability}
                                </p>
                                {/* === END OF UPDATED SECTION === */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Sticky Offer Banner --- */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-t border-gray-200 shadow-lg animate-slideUp`}
            >
                <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {course.headline}
                        </h3>

                        <p className="text-sm text-gray-600">
                            {course.subheadline}
                        </p>
                    </div>

                    <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
                        <div>
                            <div className="flex items-baseline gap-2 justify-center mb-1">
                                <span className="text-2xl font-extrabold text-gray-900">
                                    {course.discountedPrice}
                                </span>
                                <span className="text-lg font-bold text-gray-500 relative px-2">
                                    {course.mrp}
                                    {/* Strikethrough line */}
                                    <span className="absolute inset-0 top-1/2 border-t-2 border-red-500 transform -rotate-12"></span>
                                </span>
                                {/* --- NEW --- */}
                                {discountPercent && (
                                    <span className="text-base font-bold text-green-600">
                                        ({discountPercent} OFF)
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-red-600 text-center">
                                Anniversary Week Special Offer!
                            </p>
                        </div>
                        <EnrollButton
                            palette={palette}
                            text="Get This Course"
                            enrollmentUrl={course.enrollmentUrl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
