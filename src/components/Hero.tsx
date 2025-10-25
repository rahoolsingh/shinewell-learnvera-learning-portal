import hero1 from "../assets/hero-1.png";
import background1 from "../assets/background-1.png";

export default function Hero() {
    return (
        <div className=" bg-gray-950 text-white">
            <main
                className="relative h-dvh overflow-hidden"
                style={{
                    backgroundImage: `url(${background1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <svg
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <pattern
                                id="grid"
                                width="80"
                                height="80"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 80 0 L 0 0 0 80"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    opacity="0.1"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#grid)"
                            className="text-cyan-400"
                        />
                    </svg>
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between items-center pt-10">
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 justify-center px-4 text-center sm:px-6 lg:px-8 h-full">
                        <div className="flex w-fit items-center gap-4 rounded-full border border-cyan-500/50 bg-gray-800/70 backdrop-blur-sm px-4 py-2 shadow-lg transition duration-300 hover:border-cyan-400">
                            <span className="text-sm font-medium text-cyan-400 uppercase tracking-widest">
                                The Future of Learning is Here
                            </span>
                        </div>

                        <h1 className="relative text-5xl leading-[1.1] font-extrabold max-md:text-3xl md:max-w-4xl md:text-balance lg:text-7xl">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
                                Master Digital Growth, Accelerated by AI
                                Innovation
                            </span>

                            <svg
                                width="300" // Increased width for better visual
                                height="15"
                                viewBox="0 0 300 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 -z-1 max-md:hidden text-cyan-500"
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
                        </h1>

                        <p className="text-2xl max-w-4xl text-gray-300 font-medium">
                            Join our cutting-edge programs that blend digital
                            marketing expertise with AI-driven strategies.
                            Elevate your skills and lead the future of marketing
                            today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-1">
                            <span>
                                <button className="px-8 py-3 text-lg font-semibold rounded-lg shadow-xl transition duration-300 bg-cyan-600 hover:bg-cyan-500 text-white transform hover:scale-[1.02] active:scale-[0.98]">
                                    Explore Programs
                                </button>
                            </span>
                            <span>
                                <button className="px-8 py-3 text-lg font-semibold rounded-lg transition duration-300 border border-white/30 text-white hover:bg-white/10">
                                    Get Free Consultation
                                </button>
                                <p>
                                    <span className="text-sm text-gray-400">
                                        (Industry Experts Available)
                                    </span>
                                </p>
                            </span>
                        </div>
                    </div>

                    <img
                        src={hero1}
                        alt="Digital Marketing & AI Concepts"
                        className="relative z-20 min-h-67 w-full object-cover max-w-7xl mx-auto"
                    />
                </div>
            </main>
        </div>
    );
}
