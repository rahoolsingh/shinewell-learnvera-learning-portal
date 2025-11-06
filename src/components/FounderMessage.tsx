import Marquee from "react-fast-marquee";
import { useState, useRef, useEffect } from "react";
import {
    PauseIcon,
    PlayIcon,
    SpeakerIcon,
    Volume2Icon,
    VolumeXIcon,
} from "lucide-react";

// Helper function to format time (e.g., 01:30)
const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function FounderVideoMessage() {
    const embedUrl = `/founder.mp4`;

    // --- Video Player State ---
    const videoRef = useRef(null);
    const progressRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0); // 0-100
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [showControls, setShowControls] = useState(false);
    // --------------------------

    // --- Video Player Functions ---
    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
    };

    const handleTimeUpdate = () => {
        const current = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        setCurrentTime(current);
        setProgress((current / duration) * 100);
    };

    const handleLoadedMetadata = () => {
        setDuration(videoRef.current.duration);
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        videoRef.current.currentTime = 0; // Rewind
        setProgress(0);
    };

    // This function allows seeking by clicking the progress bar
    const handleProgressSeek = (e) => {
        const bar = progressRef.current;
        if (!bar) return;
        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(1, clickX / width));
        const newTime = videoRef.current.duration * percentage;

        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
        setProgress(percentage * 100);
    };
    // --------------------------

    return (
        <section className="py-24 bg-gray-950 text-gray-100 font-sans px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* ... (Your existing text content column) ... */}
                    <div
                        className={`relative flex flex-col justify-between w-full md:col-span-1 lg:col-span-2`}
                    >
                        {/* (Your text content... no changes needed here) */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Founder's Message
                            </h2>
                            <h3 className="text-5xl font-bold text-cyan-500 mb-2.5 relative">
                                Deepesh Raj
                                <svg
                                    width="300"
                                    height="15"
                                    viewBox="0 0 300 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute -bottom-2  -z-1 max-md:hidden text-cyan-500"
                                >
                                    <path
                                        d="M2 13C60 6 120 3 200 2.5C230 2 260 1 298 5"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M2 13C60 6 120 3 200 2.5C230 2 260 1 298 5"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        strokeLinecap="round"
                                        className="opacity-20"
                                    />
                                </svg>
                            </h3>
                            <p className="text-xs text-cyan-300 mb-3 font-bold">
                                Founder & CEO, Shinewell Digital Solutions Pvt.
                                Ltd.
                                <br />
                                Creator of LearnVera, Associate Professor (PhD
                                in Cybersecurity), Marketer with 9+ yrs of
                                experience.
                            </p>
                            <p className="text-gray-300 ">
                                When I started my career in digital marketing
                                and tech., I realized that there’s a huge gap
                                between what we’re taught and what actually
                                works in the real world.
                                <br />
                                <br />
                                I’ve worked with hundreds of brands, spent
                                crores on ads, and trained 1000+ learners. And
                                every single time, I saw brilliant minds lose
                                opportunities, not because they lacked
                                potential, but because they lacked the right
                                exposure.
                                <br />
                                <br />
                                That’s why we built LearnVera. Here, we don’t
                                believe in outdated degrees or useless theories.
                                We believe in skills that earn, learning that’s
                                practical, and growth that’s real. My mission is
                                to bridge the skill gap so that learners can
                                earn with confidence, and companies can find
                                talent that’s ready to work from day one.
                                <br />
                                <br />
                                If you’re ready to invest in yourself, LearnVera
                                will give you everything you need, mentorship,
                                real-world insights, and the power to monetize
                                your skills in this highly uncertain era, where
                                Lay Offs are an everyday thing. Let's build a
                                future where learning truly pays off.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center h-full w-full">
                        <div
                            className={`group relative overflow-hidden rounded-3xl shadow-xl
                                border-4 border-white
                                aspect-video w-full
                                bg-black
                            `}
                            onMouseEnter={() => setShowControls(true)}
                            onMouseLeave={() => setShowControls(false)}
                        >
                            <video
                                ref={videoRef}
                                src={embedUrl}
                                className="absolute inset-0 w-full h-full object-cover"
                                onTimeUpdate={handleTimeUpdate}
                                onLoadedMetadata={handleLoadedMetadata}
                                autoPlay
                                loop
                                muted={isMuted}
                                onEnded={handleVideoEnd}
                                onClick={togglePlayPause} // Click video to play/pause
                                controls={false} // Hide default controls
                            ></video>

                            {/* --- Big Play Button (Center) --- */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-300
                                ${
                                    isPlaying
                                        ? "opacity-0 "
                                        : "opacity-100 bg-black/30"
                                }
                                ${showControls ? "" : "!opacity-0"}
                                `}
                            >
                                <button
                                    onClick={toggleMute}
                                    className="p-4 bg-cyan-500/80 rounded-full text-white transform transition-transform hover:scale-110"
                                    aria-label="Mute/Unmute Video"
                                >
                                    {
                                        isMuted ? (
                                            <VolumeXIcon className="w-12 h-12" />
                                        ) : (
                                            <Volume2Icon className="w-12 h-12" />
                                        )
                                    }
                                </button>
                            </div>

                            {/* --- Custom Controls Wrapper --- */}
                            {/* Sits above the marquee (bottom-7) */}
                            <div
                                className={`absolute bottom-7 left-0 right-0 p-4 transition-opacity duration-300
                                ${
                                    showControls || !isPlaying
                                        ? "opacity-100"
                                        : "opacity-0"
                                }
                                `}
                            >
                                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                                    {/* Play/Pause Button */}
                                    <button
                                        onClick={togglePlayPause}
                                        className="text-white hover:text-cyan-400"
                                    >
                                        {isPlaying ? (
                                            <PauseIcon className="w-6 h-6" />
                                        ) : (
                                            <PlayIcon className="w-6 h-6" />
                                        )}
                                    </button>

                                    {/* Time Display */}
                                    <span className="text-white text-xs font-mono">
                                        {formatTime(currentTime)}
                                    </span>

                                    {/* --- Creative Progress Bar --- */}
                                    <div
                                        ref={progressRef}
                                        onClick={handleProgressSeek}
                                        className="relative w-full h-4 cursor-pointer group/progress flex items-center"
                                    >
                                        {/* Bar Background */}
                                        <div className="bg-gray-600/50 h-1.5 rounded-full w-full"></div>
                                        {/* Bar Progress */}
                                        <div
                                            className="bg-cyan-500 h-1.5 rounded-full absolute"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                        {/* Hover/Seek Thumb */}
                                        <div
                                            className="bg-white w-3.5 h-3.5 rounded-full absolute transform -translate-x-1/2
                                                        opacity-0 group-hover/progress:opacity-100 transition-opacity"
                                            style={{ left: `${progress}%` }}
                                        ></div>
                                    </div>

                                    <span className="text-white text-xs font-mono w-20">
                                        {formatTime(duration)}
                                    </span>

                                    {/* Mute/Unmute Button */}
                                    <button
                                        onClick={toggleMute}
                                        className="text-white hover:text-cyan-400"
                                    >
                                        {isMuted ? (
                                            <VolumeXIcon className="w-6 h-6" />
                                        ) : (
                                            <Volume2Icon className="w-6 h-6" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Your Marquee (un-commented and placed) */}
                            <Marquee
                                className="!absolute text-sm text-white bg-cyan-500 bottom-0 py-1 h-7"
                                speed={50}
                                gradient={false}
                            >
                                "Skill up with us and lead the digital future!"
                                &nbsp; • &nbsp; "Empowering learners for the
                                digital age!" &nbsp; • &nbsp; "Transforming
                                education through technology!" &nbsp; • &nbsp;
                                "Join us in shaping tomorrow's digital leaders!"
                                &nbsp; • &nbsp;
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
