import { motion } from "framer-motion";
import { useEffect } from "react";

// --- SVG Icons ---
const icons = {
    heart: (
        <svg fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
            4.42 3 7.5 3c1.74 0 3.41.81 
            4.5 2.09C13.09 3.81 14.76 3 
            16.5 3 19.58 3 22 5.42 22 
            8.5c0 3.78-3.4 6.86-8.55 
            11.54L12 21.35z"
            ></path>
        </svg>
    ),

    like: (
        <svg fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M1 21h4V9H1v12zM23 
            10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 
            2 7.59 8.59C7.22 9.37 7 10.78 
            7 12v6c0 1.1.9 2 2 
            2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1z"
            ></path>
        </svg>
    ),

    comment: (
        <svg fill="currentColor" viewBox="0 0 24 24">
            <path
                d="M20 2H4c-1.1 0-2 
            .9-2 2v18l4-4h14c1.1 0 2-.9 
            2-2V4c0-1.1-.9-2-2-2zM6 
            11h12v2H6v-2zm8-3H6v2h8V8zm4 
            6H6v2h12v-2z"
            ></path>
        </svg>
    ),
};

// --- Floating Element ---
const FloatingElement = ({ children, x, y, delay, color }) => (
    <motion.div
        className={`absolute ${color}`}
        style={{ top: `${y}%`, left: `${x}%` }}
        animate={{
            y: [0, 10, -10, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.6, 1, 0.6],
        }}
        transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
        }}
    >
        <div className="w-6 h-6 sm:w-8 sm:h-8 opacity-70">{children}</div>
    </motion.div>
);

// --- Main Component ---
export default function NotFound() {
    // scroll to top on mount
    

    const colors = [
        "text-blue-500",
        "text-pink-500",
        "text-green-400",
        "text-yellow-500",
        "text-indigo-400",
    ];

    const floating = Array.from({ length: 30 }).map((_, i) => ({
        icon: Object.values(icons)[Math.floor(Math.random() * 3)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
    }));

    return (
        <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 text-gray-900">
            {/* Floating Icons */}
            {floating.map((el, i) => (
                <FloatingElement key={i} {...el}>
                    {el.icon}
                </FloatingElement>
            ))}

            {/* Glowing Background Circle */}
            <div className="absolute w-[80vw] h-[80vw] sm:w-[40vw] sm:h-[40vw] bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Main Content */}
            <motion.div
                className="relative z-10 text-center px-4 sm:px-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-[6rem] sm:text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    404
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg sm:text-xl font-medium text-gray-700"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    Oops! The page you're looking for doesn't exist.
                </motion.p>

                <p className="mt-2 text-gray-500 text-sm sm:text-base">
                    But don't worry, you can find plenty of other things on our
                    homepage.
                </p>

                <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 transition-all"
                >
                    <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M3 9l9-7 9 7v11a2 2 0 0 
                        1-2 2H5a2 2 0 0 1-2-2z"
                        ></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Go Home
                </motion.a>

                <motion.blockquote
                    className="mt-4 text-gray-600 italic max-w-sm mx-auto"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    "Not all those who wander are lost. Sometimes, they just hit
                    a 404."
                </motion.blockquote>
            </motion.div>

            {/* Subtle bottom shimmer */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
