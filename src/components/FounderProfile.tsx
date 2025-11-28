import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
import founder from "../assets/images/asset-6.jpeg";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

const FounderProfile = ({
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}: {
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    [key: string]: any;
}) => {
    const noise = createNoise3D();
    let w: number,
        h: number,
        nt: number,
        i: number,
        x: number,
        ctx: any,
        canvas: any;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ];
    const drawWave = (n: number) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for (x = 0; x < w; x += 5) {
                const y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId: number;
    const render = () => {
        ctx.fillStyle = backgroundFill || "white";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        // I'm sorry but i have got to support it on safari.
        setIsSafari(
            typeof window !== "undefined" &&
                navigator.userAgent.includes("Safari") &&
                !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div
            className={`h-screen flex flex-col items-center justify-center relative ${containerClassName}`}
        >
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}
            ></canvas>
            <div className={`relative z-10 ${className}`} {...props}>
                {/* --- 5. Meet the Instructors (Responsive) --- */}
                <section className="py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">
                                Taught by the Industry's Finest
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2 sm:px-0">
                                Our instructors aren't just teachers; they are
                                active leaders in the industry. They run the
                                agencies, lead the teams, and write the
                                strategies.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <motion.div
                                className="bg-white/80 rounded-lg md:rounded-xl shadow-xl overflow-hidden border border-gray-100 max-w-sm sm:max-w-md lg:max-w-4xl lg:flex"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* fit the image properly to card height */}
                                <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                                    <img
                                        src={founder}
                                        alt="Deepesh Raj"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-5 sm:p-6 md:p-7 lg:p-8 lg:w-2/3">
                                    <div className="flex justify-between items-start mb-3 md:mb-4">
                                        <div>
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                                                Deepesh Raj
                                            </h3>
                                            <p className="text-sm sm:text-base font-medium text-blue-600">
                                                Growth Strategist & Founder
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <Link
                                                to="https://www.linkedin.com/in/deeepeshraj/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-blue-600"
                                                aria-label="LinkedIn"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faLinkedinIn}
                                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                                />
                                            </Link>
                                            <Link
                                                to="https://www.youtube.com/@deeepeshraj"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-red-600"
                                                aria-label="YouTube"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faYoutube}
                                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                                        He's a growth strategist, entrepreneur,
                                        and digital marketing expert with a
                                        Ph.D. in Cybersecurity and over 9 years
                                        of hands-on experience. As the Founder &
                                        CEO of Shinewell Digital Solutions Pvt.
                                        Ltd., a renowned digital marketing
                                        agency, he has helped 200+ clients
                                        across the globe scale their businesses
                                        and mentored 1000+ learners using
                                        data-driven and AI-powered strategies.
                                        <br />
                                        <br />
                                        Having spent crores in ad campaigns
                                        across multiple platforms, Deepesh
                                        brings to the classroom what most only
                                        read in case studies — real-world
                                        experience. He also serves as an
                                        Associate Professor, combining academic
                                        depth with practical insight to teach
                                        what truly works in today's digital
                                        world.
                                        <br />
                                        <br />
                                        Learners know him not just for his
                                        knowledge, but for his clarity,
                                        mentorship, and results-first mindset.
                                        When you learn from him, you don't just
                                        gain skills — you gain the mindset of
                                        someone who's already mastered the game.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FounderProfile;
