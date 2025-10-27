import { Star, CheckCircle2, BookOpen } from "lucide-react";
import { useParams } from "react-router";
import courseData from "../data/courses.js";

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

const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
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
            className={`relative px-8 py-3 w-full rounded-xl text-lg font-bold text-white 
        bg-gradient-to-r ${palette.buttonFrom} ${palette.buttonTo}
        transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]
        
        overflow-hidden animate-buzz
        
        before:content-[''] before:absolute before:inset-0 before:-translate-x-full 
        before:animate-[shine_2.5s_infinite] 
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        before:skew-x-[-25deg]
        `}
        >
            {/* Wrap text in a span to keep it above the 'before' pseudo-element */}
            <span className="relative z-10">{text}</span>
        </button>
    </a>
);

export default function CourseDetailsPage() {
    const id = useParams().id;
    const course = courseData.find((c) => c.id === Number(id));
    if (!course)
        return (
            <div className="text-center py-20 text-gray-700">
                Course not found!
            </div>
        );

    const palette = colorPalettes[course?.theme] || colorPalettes.blue;

    return (
        <section className="py-16 md:py-32 bg-gray-50 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* --- Left Content --- */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <span
                                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 text-gray-700 mb-3`}
                            >
                                {course?.category}
                            </span>
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                                {course?.headline}
                            </h1>
                            <p className="text-lg text-gray-700 mb-6">
                                {course?.description}
                            </p>
                            <div className="flex items-center gap-4">
                                <StarRating rating={course?.rating} />
                                <span className="text-sm text-gray-600">
                                    {course?.rating}.0 Rating
                                </span>
                            </div>
                        </div>

                        {/* Instructor */}
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

                        {/* Sections */}
                        <DetailSection title="What You'll Learn">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                {course?.deliverables.map((item) => (
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
                            title="Course Curriculum"
                            icon={<BookOpen className="w-6 h-6" />}
                        >
                            <div className="space-y-4">
                                {course?.curriculum.map((module) => (
                                    <div
                                        key={module.module}
                                        className="border rounded-lg overflow-hidden bg-white"
                                    >
                                        <div className="bg-gray-100 p-4 font-bold text-gray-800">
                                            Module {module.module}:{" "}
                                            {module.title}
                                        </div>
                                        <ul className="p-4 space-y-2">
                                            {module.topics.map((topic) => (
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

                        <DetailSection title="Prerequisites">
                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                {course?.prerequisites.map((req) => (
                                    <li key={req}>{req}</li>
                                ))}
                            </ul>
                        </DetailSection>

                        <DetailSection title="Frequently Asked Questions">
                            <div className="space-y-4">
                                {course?.faq.map((faq) => (
                                    <details
                                        key={faq.question}
                                        className="border rounded-lg p-4 bg-white"
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
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {course?.category}
                                    </h2>
                                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-700">
                                        {course?.duration}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {course?.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`px-3 py-1 text-xs font-medium rounded-md bg-gray-50 text-gray-700`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <EnrollButton
                                    palette={palette}
                                    text="Enroll Now"
                                    enrollmentUrl={course.enrollmentUrl}
                                />
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    {course?.availability}
                                </p>
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
                            {course.duration} • Rated {course.rating}/5
                        </p>
                    </div>
                    <div className="w-full sm:w-auto">
                        <EnrollButton
                            palette={palette}
                            text="Enroll Now & Save 20%"
                            enrollmentUrl={course.enrollmentUrl}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
