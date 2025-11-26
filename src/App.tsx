import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { useState, useRef, useEffect } from "react";
import { X, Volume2, VolumeX, Play } from "lucide-react";
import { motion } from "framer-motion";

// Page Imports
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";

// Asset Imports
import adVideo from "./assets/videos/ad-video.mp4";
import "./animation.css";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ContactUsPage from "./pages/ContactPage";
import WhatsAppWidget from "./components/WhatsAppWidget";

// 1. Define Layout Component using <Outlet />
const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header /> {/* Now safely inside the Router */}
            {/* <Outlet /> renders the child route (Home, About, etc.) */}
            <main className="flex-grow">
                <Outlet />
            </main>
            <WhatsAppWidget />
            <AdVideo />\
            <Footer />
        </div>
    );
};

// 2. Configure Router with Layout as the Root Element
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, // Layout wraps all children
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "course-details/:id",
                element: <CourseDetails />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "placements",
                element: <SuccessStoriesPage />,
            },
            {
                path: "contact",
                element: <ContactUsPage />,
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "terms-and-conditions",
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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

// --- AdVideo Component (Unchanged logic, just keeping it here) ---
const AdVideo = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch((error) => {
                    console.warn("AdVideo autoplay prevented:", error);
                    setIsPlaying(false);
                });
        }
    }, []);

    const toggleMute = (e) => {
        e.stopPropagation();
        const newMutedState = !isMuted;
        setIsMuted(newMutedState);
        if (videoRef.current) videoRef.current.muted = newMutedState;
    };

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

    const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.duration) {
            setProgress(
                (videoRef.current.currentTime / videoRef.current.duration) * 100
            );
        }
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setIsVisible(false);
        if (videoRef.current) videoRef.current.pause();
    };

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed bottom-6 left-6 w-40 md:w-48 aspect-[9/16] overflow-hidden rounded-lg shadow-2xl z-50 group bg-black cursor-pointer"
            onClick={togglePlayPause}
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 1,
            }}
        >
            <video
                ref={videoRef}
                src={adVideo}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover"
            >
                Your browser does not support the video tag.
            </video>

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                    <Play size={40} className="text-white" fill="white" />
                </div>
            )}

            <button
                onClick={handleClose}
                className="absolute top-2 right-2 z-10 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all duration-300"
            >
                <X size={16} />
            </button>

            <button
                onClick={toggleMute}
                className="absolute bottom-2 right-2 z-10 p-1.5 bg-black/40 text-white rounded-full hover:bg-black/70 transition-all duration-300"
            >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
                <div
                    className="h-full bg-white transition-all duration-150"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </motion.div>
    );
};
