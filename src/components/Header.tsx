import { Menu, X, Phone, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";
import { Link } from "react-router";
import MasterclassPopup from "./MasterClassPopup";

// --- Mock useScroll Hook (Unchanged) ---
const useScroll = () => {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [direction, setDirection] = useState("up");
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setDirection(currentScrollY > lastScrollY ? "down" : "up");
            lastScrollY = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return { scrollY, direction };
};

// --- Buttons Components (Design Unchanged) ---

const CtaCallButton = ({ className = "" }) => (
    <motion.a
        href="tel:+917676720897"
        aria-label="Get a free consultation by phone"
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.03 }}
        className={`relative px-4 sm:px-5 py-2.5 text-sm font-semibold rounded-full
      bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white
      shadow-md shadow-purple-900/30
      transition-all duration-300 ease-out overflow-hidden group ${className}`}
    >
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
                <Phone className="w-4 h-4" fill="currentColor" />
            </motion.div>
            <span>Get Free Consultation</span>
        </span>
    </motion.a>
);

const WorkshopButton = ({ onClick, className = "" }) => (
    <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className={`group relative flex items-center justify-center gap-1.5 
        px-3 lg:px-4 py-2 lg:py-2 rounded-full 
        bg-gradient-to-r from-red-500 to-rose-600 
        text-white font-semibold text-xs lg:text-sm
        shadow-md shadow-red-500/20
        ${className}`}
    >
        <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-30deg] animate-[shine_3s_infinite]" />
        </div>

        <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
        {/* Layout Fix: Hide text on very small screens (<360px) to prevent overflow */}
        <span className="relative z-10 whitespace-nowrap hidden min-[360px]:inline">
            Join Workshop
        </span>

        <span className="hidden lg:inline-flex absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
        </span>
    </motion.button>
);

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Placements", href: "/placements" },
    { label: "Contact Us", href: "/contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [triggerWorkshop, setTriggerWorkshop] = useState(false);
    const { scrollY, direction } = useScroll();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, []);

    const isVisible = scrollY < 100 || direction === "up";

    const headerVariants = {
        visible: { y: 0, opacity: 1, scale: 1 },
        hidden: { y: -80, opacity: 0, scale: 0.98 },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "100%" }, // Changed to slide from right (standard UX)
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 80, damping: 18 },
        },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } },
    };

    return (
        <>
            <MasterclassPopup
                manualOpen={triggerWorkshop}
                onManualClose={() => setTriggerWorkshop(false)}
            />

            <motion.header
                className="fixed top-2 lg:top-4 left-0 right-0 z-50 flex justify-center px-2 lg:px-3 pointer-events-none"
                variants={headerVariants}
                initial="visible"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
                {/* Navbar Container */}
                <motion.div
                    className="flex items-center justify-between w-full max-w-6xl 
                    px-3 py-2 lg:px-5 lg:py-3
                    bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 
                    border border-white/50 rounded-full pointer-events-auto"
                >
                    {/* 1. Left: Logo (Prevent shrinking) */}
                    <Link to="/" className="flex-shrink-0 mr-2 lg:mr-0">
                        <img
                            src={logo}
                            alt="LearnVera Logo"
                            className="h-8 lg:h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* 2. Center: Desktop Nav */}
                    <nav className="hidden lg:flex items-center space-x-8 text-slate-600 font-medium text-sm">
                        {NAV_LINKS.map((link) => (
                            <>
                                {link.type === "anchor" ? (
                                    <a
                                        href={link.href}
                                        key={link.label}
                                        className="hover:text-blue-600 transition-colors relative group"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link to={link?.href} key={link.label}>
                                        <motion.span
                                            whileHover={{ color: "#2563eb" }}
                                            className="hover:text-blue-600 transition-colors relative group"
                                        >
                                            {link.label}
                                        </motion.span>
                                    </Link>
                                )}
                            </>
                        ))}
                    </nav>

                    {/* 3. Right: Buttons */}
                    <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
                        {/* Workshop Button (Visible on all screens) */}
                        <WorkshopButton
                            onClick={() => setTriggerWorkshop(true)}
                        />

                        {/* Consultation Button (Desktop Only) */}
                        <CtaCallButton className="hidden lg:inline-flex" />

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors flex-shrink-0"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
            </motion.header>

            {/* --- Mobile Menu Overlay --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-white flex flex-col h-[100dvh]"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-100 bg-white">
                            <img src={logo} alt="Logo" className="h-8" />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 bg-slate-50 rounded-full text-slate-600 hover:bg-slate-200"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Mobile Links Container */}
                        <nav className="flex flex-col flex-1 px-6 py-8 space-y-6 overflow-y-auto">
                            {NAV_LINKS.map((link, i) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <motion.span
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="text-xl sm:text-2xl font-bold text-slate-800 hover:text-blue-600 block py-1"
                                    >
                                        {link.label}
                                    </motion.span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Footer Actions (Fixed at bottom) */}
                        <div className="p-6 bg-slate-50 w-full border-t border-slate-100 space-y-3">
                            <div className="w-full flex justify-center">
                                <CtaCallButton className="w-full justify-center" />
                            </div>

                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setTriggerWorkshop(true);
                                }}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-lg shadow-red-200 transition-colors"
                            >
                                <Zap className="w-5 h-5 fill-current" />
                                Join Free Workshop
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
