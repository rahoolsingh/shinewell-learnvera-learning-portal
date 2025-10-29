import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Users, Target, Check, Sparkles, Clock } from "lucide-react";

// --- New "Enroll" Button (Mobile Responsive) ---
const CtaEnrollButton = () => (
    <motion.a
        href="/#consultation"
        aria-label="Enroll in the course now"
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02, y: -2 }}
        className="relative block w-full text-center px-5 py-3 sm:px-6 sm:py-4 text-lg lg:text-xl font-bold rounded-xl
      bg-gradient-to-r from-green-500 to-cyan-500 text-white
      shadow-lg shadow-green-500/30
      transition-all duration-300 ease-out overflow-hidden group"
    >
        {/* Shine Animation */}
        <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
            }}
        />
        <span className="relative z-10">Enroll Now & Start Learning</span>
    </motion.a>
);

// --- The Main Section Component (Mobile Responsive) ---
export default function CourseOfferSection() {
    const [activeTab, setActiveTab] = useState("bonus"); // 'bonus', 'who'

    const tabs = [
        { id: "bonus", label: "Early Bird Bonuses", icon: Gift },
        { id: "who", label: "Who It's For", icon: Users },
    ];

    const tabContentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2, ease: "easeIn" },
        },
    };

    return (
        // Responsive section padding
        <section className="relative bg-gray-50 py-16 lg:py-24 overflow-hidden">
            {/* Background Gradient Blobs (Scaled down on mobile) */}
            <div
                className="absolute top-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-purple-200 rounded-full
                           mix-blend-multiply filter blur-3xl opacity-50 animate-blob"
            />
            <div
                className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-blue-200 rounded-full
                           mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"
            />
            <div
                className="absolute bottom-0 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-green-200 rounded-full
                           mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"
            />

            {/* ... (Your Tailwind config for 'animate-blob' remains the same) ... */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                {/* Section Header (Responsive fonts and margin) */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                        Bonus for Early Enrollments{" "}
                        <span className="text-red-600 animate-pulse text-xl sm:text-2xl">
                            (Limited Seats)
                        </span>
                    </h2>
                    <p className="mt-4 text-lg lg:text-xl text-gray-600">
                        Get the job-ready skills, community, and certificate—all
                        in one place.
                    </p>
                </div>

                {/* Two-Column Layout */}
                <div className="lg:grid lg:grid-cols-5 lg:gap-12">
                    {/* --- Left Column (Sticky Price Card) --- */}
                    <div className="lg:col-span-2">
                        <div className="lg:sticky top-28">
                            {/* Responsive padding */}
                            <div className="relative bg-white shadow-2xl rounded-2xl p-6 lg:p-8 border border-gray-100">
                                {/* Discount Badge */}
                                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-bold px-4 py-2 rounded-full shadow-lg rotate-12">
                                    91% OFF!
                                </div>

                                <span className="inline-flex items-center text-md font-semibold text-blue-600 mb-3">
                                    <Sparkles className="w-5 h-5 mr-2" />
                                    Anniversary Week Offer
                                </span>

                                {/* Price (Responsive) */}
                                <p className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent my-2">
                                    ₹2,499
                                </p>
                                <p className="text-lg sm:text-xl text-gray-500 line-through mb-4">
                                    Actual Price: ₹30,000
                                </p>

                                {/* Urgency Timer */}
                                <div className="flex items-center space-x-2 text-red-600 font-medium mb-6">
                                    <Clock className="w-5 h-5" />
                                    <span>
                                        Offer ends soon (First 100 Students)
                                    </span>
                                </div>

                                <CtaEnrollButton />
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column (Tabbed Content) --- */}
                    <div className="lg:col-span-3 mt-12 lg:mt-0">
                        {/* Tab Buttons (Responsive font, icon size, and spacing) */}
                        <div className="flex space-x-2 sm:space-x-4 mb-8 border-b border-gray-200">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center space-x-2 text-base sm:text-lg font-medium pb-4 transition-colors
                                        ${
                                            activeTab === tab.id
                                                ? "text-blue-600"
                                                : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    <tab.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                    <span>{tab.label}</span>
                                    {/* Animated underline */}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTabUnderline"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="relative min-h-[450px]">
                            <AnimatePresence mode="wait">
                                {/* --- Tab 1: Bonuses --- */}
                                {activeTab === "bonus" && (
                                    <motion.div
                                        key="bonus"
                                        variants={tabContentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="space-y-4"
                                    >
                                        {/* Responsive title */}
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                            Claim Your{" "}
                                            <span className="text-purple-600">
                                                Free Bonuses
                                            </span>{" "}
                                            Today:
                                        </h3>
                                        <BonusItem text="Free access to “Digital Domination Toolkit” (Worth ₹4,999)" />
                                        <BonusItem text="Lifetime community access for Q&A and updates" />
                                        <BonusItem text="Completion Certificate by LearnVera" />
                                        <BonusItem text="Top performers get in-house internship or collaboration opportunities" />
                                    </motion.div>
                                )}

                                {/* --- Tab 2: Who It's For --- */}
                                {activeTab === "who" && (
                                    <motion.div
                                        key="who"
                                        variants={tabContentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="space-y-4"
                                    >
                                        {/* Responsive title */}
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                            This Program Is{" "}
                                            <span className="text-purple-600">
                                                Built For You
                                            </span>
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            No matter where you start —
                                            LearnVera helps you grow, earn, and
                                            lead.
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <WhoItem
                                                text="Students & Freshers"
                                                description="Build a job-ready skill set before you graduate."
                                            />
                                            <WhoItem
                                                text="Freelancers"
                                                description="Learn how to market, sell & scale profitably."
                                            />
                                            <WhoItem
                                                text="Agency Professionals"
                                                description="Upgrade your performance & client results."
                                            />
                                            <WhoItem
                                                text="Career Switchers"
                                                description="Transition confidently into the digital industry."
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Helper Components (Mobile Responsive) ---

const BonusItem = ({ text }) => (
    <div className="flex items-center space-x-4 p-5 bg-white shadow-lg rounded-xl border border-gray-100">
        {/* Responsive icon container */}
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            {/* Responsive icon */}
            <Check className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        {/* Responsive text */}
        <span className="text-base sm:text-lg text-gray-700 font-medium">
            {text}
        </span>
    </div>
);

const WhoItem = ({ text, description }) => (
    <div className="flex flex-col p-5 bg-white shadow-lg rounded-xl border border-gray-100">
        <div className="flex items-center space-x-3 mb-2">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6" />
            </div>
            {/* Responsive text */}
            <span className="text-base sm:text-lg text-gray-900 font-semibold">
                {text}
            </span>
        </div>
        <p className="text-gray-600 text-base">{description}</p>
    </div>
);
