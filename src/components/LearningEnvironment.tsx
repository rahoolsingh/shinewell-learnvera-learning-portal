import { useState } from "react";
import environment2 from "../assets/images/env-6.jpg";
import environment3 from "../assets/images/env-2.jpg";
import environment4 from "../assets/images/env-4.jpg";
// --- Data ---
const classroomImages = [environment2, environment3, environment4];

// Placeholder video for the tour
const videoId = "s6-sEk_S_A"; // Example: "WeWork Office Tour"
const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=0`;

export default function LearningEnvironment() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className="my-24 bg-white font-sans px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto">
                    <img
                        src={classroomImages[0]}
                        alt="Main classroom"
                        className="rounded-xl aspect-video w-full h-full object-cover transition-transform duration-700"
                    />
                    <img
                        src={classroomImages[1]}
                        alt="Small classroom view 1"
                        className="rounded-xl aspect-video w-full h-full object-cover transition-transform duration-700"
                    />

                    <img
                        src={classroomImages[2]}
                        alt="Small classroom view 2"
                        className="rounded-xl aspect-video w-full h-full object-cover transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
}
