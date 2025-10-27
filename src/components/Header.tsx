import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "./hooks/useScroll";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/#courses" },
    { label: "Contact Us", href: "/contact" },
];

const CtaCallButton = () => (
    <motion.a
        aria-label="Get a free consultation by phone"
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.03 }}
        className="relative px-4 py-2.5 text-sm font-semibold rounded-full
      bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white
      shadow-md shadow-purple-900/30
      transition-all duration-300 ease-out overflow-hidden group"
    >
        <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
            }}
        />

        <span className="relative z-10 flex items-center justify-center space-x-2">
            <motion.div
                animate={{
                    rotate: [0, -15, 10, -10, 5, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                    repeatDelay: 0.8,
                }}
            >
                <Phone className="w-4 h-4" />
            </motion.div>
            <span>Get Free Consultation</span>
        </span>
    </motion.a>
);

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY, direction } = useScroll();

    const isVisible = scrollY < 100 || direction === "up";

    const headerVariants = {
        visible: { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" },
        hidden: { y: -80, opacity: 0, scale: 0.98, filter: "blur(2px)" },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 18 },
        },
        exit: { opacity: 0, y: "-100%", transition: { duration: 0.2 } },
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08, duration: 0.3 },
        }),
    };

    return (
        <>
            <motion.header
                className="fixed top-4 left-0 right-0 z-50 flex justify-center"
                variants={headerVariants}
                initial="visible"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between w-full max-w-5xl px-8 py-3
            bg-black/90 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]
            border border-white/20 rounded-full relative overflow-hidden"
                >
                    <motion.a
                        href="/"
                        className="flex items-center space-x-1 font-bold text-2xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
                            animate={{ opacity: [1, 0.6, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            L
                        </motion.span>
                        <span className="text-gray-200">M</span>
                    </motion.a>

                    <nav className="hidden lg:flex items-center space-x-10 text-gray-200 font-medium">
                        {NAV_LINKS.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                whileHover={{ y: -2, color: "#7dd3fc" }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:flex items-center space-x-3">
                            <CtaCallButton />
                        </div>
                        <button
                            className="lg:hidden p-2 text-gray-100"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open mobile menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-gray-800">
                            <a
                                href="/"
                                className="flex items-center space-x-1 font-bold text-2xl"
                            >
                                <span className="text-blue-500">LEARN</span>
                                <span className="text-gray-100">MIZE</span>
                            </a>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close mobile menu"
                                className="text-gray-200"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <motion.nav
                            className="flex flex-col flex-1 p-10 space-y-8"
                            initial="hidden"
                            animate="visible"
                        >
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    custom={i}
                                    variants={linkVariants}
                                    href={link.href}
                                    className="text-3xl font-semibold text-gray-200 hover:text-blue-400 transition"
                                    // 5. Added onClick to close menu
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <div className="flex-1" />
                            <motion.div
                                variants={linkVariants}
                                custom={NAV_LINKS.length}
                                className="flex items-center space-x-4"
                            >
                                <CtaCallButton />
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
