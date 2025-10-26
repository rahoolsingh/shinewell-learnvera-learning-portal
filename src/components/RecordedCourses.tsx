import { useState } from "react";
import { Code, Palette, Megaphone, Briefcase, Clock } from "lucide-react";

const allCoursesData = {
    Marketing: {
        theme: "blue",
        icon: Megaphone,
        courses: [
            {
                id: "m1",
                title: "Social Media Marketing",
                description:
                    "Build a brand and run ad campaigns on Meta & TikTok.",
                thumbnail:
                    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "8 Hours",
                level: "Intermediate",
            },
            {
                id: "m2",
                title: "SEO & Content Marketing",
                description: "Rank on Google and build authority with content.",
                thumbnail:
                    "https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=2836&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "12 Hours",
                level: "Advanced",
            },
            {
                id: "m3",
                title: "Email Marketing Mastery",
                description: "Build and automate email funnels that convert.",
                thumbnail:
                    "https://images.unsplash.com/photo-1586953208448-315c26b4e116?q=80&w=2835&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "6 Hours",
                level: "Intermediate",
            },
            {
                id: "m4",
                title: "Analytics & Reporting",
                description:
                    "Master GA4, GTM, and Looker Studio to make data-driven decisions.",
                thumbnail:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "10 Hours",
                level: "Advanced",
            },
        ],
    },
    "Tech & IT": {
        theme: "green",
        icon: Code,
        courses: [
            {
                id: "t1",
                title: "Full Stack Web Development",
                description:
                    "Master the MERN stack (MongoDB, Express, React, Node.js).",
                thumbnail:
                    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "45 Hours",
                level: "Advanced",
            },
            {
                id: "t2",
                title: "Python for Data Science",
                description:
                    "Learn Python, Pandas, Matplotlib, and Scikit-learn.",
                thumbnail:
                    "https://images.unsplash.com/photo-155006387-f26b7b02c38b?q=80&w=2835&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "30 Hours",
                level: "Intermediate",
            },
            {
                id: "t3",
                title: "AWS Cloud Foundations",
                description:
                    "Prepare for the AWS Certified Cloud Practitioner exam.",
                thumbnail:
                    "https://images.unsplash.com/photo-1590903254243-85e6a053c8b7?q=80&w=2874&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "15 Hours",
                level: "Beginner",
            },
        ],
    },
    Creative: {
        theme: "purple",
        icon: Palette,
        courses: [
            {
                id: "c1",
                title: "UI/UX Design Process",
                description:
                    "Go from user research to high-fidelity prototypes in Figma.",
                thumbnail:
                    "https://images.unsplash.com/photo-1581291518857-4e2750a72c78?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "22 Hours",
                level: "Intermediate",
            },
            {
                id: "c2",
                title: "Adobe Photoshop Masterclass",
                description:
                    "Master photo manipulation, compositing, and graphic design.",
                thumbnail:
                    "https://images.unsplash.com/photo-1629814449830-1f01c775a743?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "18 Hours",
                level: "Beginner",
            },
        ],
    },
    Business: {
        theme: "orange",
        icon: Briefcase,
        courses: [
            {
                id: "b1",
                title: "Startup & Entrepreneurship",
                description:
                    "Learn to build and scale a business from the ground up.",
                thumbnail:
                    "https://images.unsplash.com/photo-1556761175-577380e36b8a?q=80&w=2835&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "20 Hours",
                level: "Intermediate",
            },
            {
                id: "b2",
                title: "Financial Accounting 101",
                description:
                    "Understand balance sheets, income statements, and more.",
                thumbnail:
                    "https://images.unsplash.com/photo-1633162239924-d192196c14c5?q=80&w=2873&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                duration: "10 Hours",
                level: "Beginner",
            },
        ],
    },
};

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

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {course.duration}
                    </span>
                    <span
                        className={`font-medium px-3 py-1 rounded-full ${
                            palette.text
                        } bg-opacity-10 ${palette.bg.replace("bg-", "bg-")}`}
                    >
                        {course.level}
                    </span>
                </div>

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
                        Recorded Courses Built For Outcomes
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Select a category to explore our full library of
                        on-demand courses, built by industry experts.
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
