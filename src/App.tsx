import { createBrowserRouter, RouterProvider } from "react-router";
import { useState, useRef, useEffect } from "react";
import { X, Volume2, VolumeX, Play } from "lucide-react";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./animation.css";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import whatsAppIcon from "./assets/whatsapp.webp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";

import adVideo from "./assets/videos/ad-video.mp4";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/course-details/:id",
        element: <CourseDetails />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
    },
    {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
    },
    {
        path: "refund-policy",
        element: <RefundPolicy />,
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

function App() {
    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    );
}

export default App;

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            {children}

            <a
                className=""
                href="https://wa.me/+917676720897"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={whatsAppIcon}
                    alt="WhatsApp"
                    className="w-12 h-12 fixed bottom-6 right-6 cursor-pointer z-50 drop-shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </a>

            <AdVideo />

            <Footer />
        </div>
    );
};

// --- MODIFIED AdVideo Component ---
const AdVideo = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true); // Track play/pause state
    const [progress, setProgress] = useState(0); // Track video progress
    const videoRef = useRef(null);

    // Attempt to play the video on component mount
    useEffect(() => {
        if (videoRef.current) {
            // Start muted
            videoRef.current.muted = true;
            videoRef.current
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    // Autoplay was prevented
                    console.warn("AdVideo autoplay was prevented:", error);
                    setIsPlaying(false); // Update state if autoplay fails
                });
        }
    }, []);

    // Toggle mute state
    const toggleMute = (e) => {
        e.stopPropagation(); // Prevent "tap to pause" from firing
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);
        if (videoRef.current) {
            videoRef.current.muted = newMutedState;
        }
    };

    // Toggle play/pause state
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    // Update progress bar
    const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.duration) {
            const currentProgress =
                (videoRef.current.currentTime / videoRef.current.duration) *
                100;
            setProgress(currentProgress);
        }
    };

    // Handle close
    const handleClose = (e) => {
        e.stopPropagation(); // Prevent "tap to pause" from firing
        setIsVisible(false);
        // Optional: Pause video on close
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        // Container: Converted to motion.div for animation
        <motion.div
            className="fixed bottom-6 left-6 w-40 md:w-48 aspect-[9/16] overflow-hidden rounded-lg shadow-2xl z-50 group bg-black cursor-pointer"
            onClick={togglePlayPause} // Tap to pause/play on the whole container
            initial={{ x: -300, opacity: 0 }} // Initial animation state
            animate={{ x: 0, opacity: 1 }} // Final animation state
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 1,
            }} // Animation physics
        >
            <video
                ref={videoRef}
                src={adVideo}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate} // Hook for progress bar
                className="w-full h-full object-cover"
            >
                Your browser does not support the video tag.
            </video>

            {/* --- NEW: Play Icon Overlay --- */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                    <Play size={40} className="text-white" fill="white" />
                </div>
            )}

            {/* Close Icon Button */}
            <button
                onClick={handleClose} // Use handler with stopPropagation
                className="absolute top-2 right-2 z-10 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all duration-300"
                aria-label="Close video ad"
            >
                <X size={16} />
            </button>

            <button
                onClick={toggleMute} // Use handler with stopPropagation
                className="absolute bottom-2 right-2 z-10 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all duration-300"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* ---  Progress Bar --- */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
                <div
                    className="h-full bg-white transition-all duration-150"
                    style={{ width: `${progress}%` }} // Width driven by state
                />
            </div>
        </motion.div>
    );
};
