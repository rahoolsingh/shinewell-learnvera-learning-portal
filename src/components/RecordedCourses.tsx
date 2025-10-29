import { useState } from "react";
import data from "../data/recordedcourses.js";

const allCoursesData = {...data};



const colorPalettes = {
    blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        hoverBorder: "hover:border-blue-500/50",
        gradient: "from-blue-500 to-indigo-600",
    },
    green: {
        bg: "bg-green-600",
        text: "text-green-600",
        hoverBorder: "hover:border-green-500/50",
        gradient: "from-green-500 to-emerald-600",
    },
    purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        hoverBorder: "hover:border-purple-500/50",
        gradient: "from-purple-500 to-violet-600",
    },
    orange: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        hoverBorder: "hover:border-orange-500/50",
        gradient: "from-orange-500 to-red-600",
    },
};

const CourseCard = ({ course, palette }) => {
    return (
        <div
            className={`group flex flex-col md:flex-row rounded-xl 
                   overflow-hidden transform transition-all duration-300 ${palette.hoverBorder} p-3 gap-3 bg-gradient-to-t from-cyan-400/60 to-cyan-300/5`}
        >
            <div className="relative md:w-2/5 bg-red-50 rounded-xl overflow-hidden">
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 aspect-square"
                    onError={(e) => {
                        e.target.src = `https://placehold.co/400x400?text=${course.title}`;
                    }}
                />
            </div>

            <div className="p-4 flex flex-col flex-grow md:w-3/5 bg-white rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {course.description}
                </p>

                {course?.deliverables && (
                    <div className="text-sm text-gray-700 mb-4">
                        <p className="text-xs font-bold">What You'll Get:</p>
                        <p className="mt-1 text-xs">
                            {course?.deliverables.length === 1 ? (
                                <p>{course?.deliverables[0]}</p>
                            ) : (
                                <div>
                                    <ul className="list-disc list-inside">
                                        {course?.deliverables?.map(
                                            (item, index) => (
                                                <li key={index}>{item}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                        </p>
                    </div>
                )}

                <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300
                      ${palette.bg} shadow-md ${palette.bg.replace(
                        "bg-",
                        "shadow-"
                    )}/30 hover:opacity-90`}
                >
                    Start Learning
                </button>
            </div>
        </div>
    );
};

export default function RecordedCourses() {
    const [activeCategory, setActiveCategory] = useState("Marketing");

    const categories = Object.keys(allCoursesData);
    const currentCategoryData = allCoursesData[activeCategory];
    const palette = colorPalettes[currentCategoryData.theme];

    return (
        <section className="relative flex w-full items-center justify-center bg-white py-24">
            <div
                className={
                    "absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
                }
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                        Master Skills with Results-Focused Recorded Courses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-6xl mx-auto">
                        Access step-by-step recorded lessons, real projects, and
                        expert guidance designed to help you learn at your own
                        pace
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        const activePalette =
                            colorPalettes[allCoursesData[category].theme];
                        const Icon = allCoursesData[category].icon;

                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                            ${
                                isActive
                                    ? `${
                                          activePalette.bg
                                      } text-white shadow-lg ${activePalette.bg.replace(
                                          "bg-",
                                          "shadow-"
                                      )}/40`
                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                            }`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${
                                        isActive
                                            ? "text-white"
                                            : activePalette.text
                                    }`}
                                />
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {currentCategoryData.courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            palette={palette}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
