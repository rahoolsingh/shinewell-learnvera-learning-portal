import hero1 from "../assets/hero-3.png";
import background1 from "../assets/background-1.gif";

export default function Hero() {
    return (
        <div className=" bg-gray-950 text-white">
            <main className="relative overflow-hidden pt-24">
                <img
                    src={background1}
                    alt="Background Animation"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none blur-xl scale-125 object-right"
                />
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
                            <span className="text-xs md:text-sm font-medium text-cyan-400 uppercase tracking-widest">
                                THE FUTURE BELONGS TO THE SKILLED
                            </span>
                        </div>

                        <h1 className="relative text-5xl leading-[1.1] font-extrabold max-md:text-3xl md:max-w-4xl md:text-balance lg:text-7xl">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
                                Upgrade Your Skills, Master AI before It Masters
                                You
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

                        <p className="text-sm md:text-lg lg:text-2xl max-w-4xl text-gray-300 font-medium">
                            At LearnVera, we merge highly skilled human
                            expertise with AI to help you master the most
                            in-demand digital skills. From performance marketing
                            to AI-powered growth strategies. Learn smarter. Grow
                            faster. Lead the future.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-1">
                            <a href="/#courses">
                                <button
                                    className="relative px-12 py-4 text-2xl font-extrabold rounded-xl overflow-hidden
                         bg-gradient-to-r from-teal-400 to-cyan-500 text-white
                         shadow-lg transform skew-x-[-10deg]
                         transition-all duration-300 ease-out
                         hover:skew-x-[0deg] hover:scale-105 active:scale-98
                         before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
                         before:transform before:translate-x-[-100%] before:skew-x-[-20deg] before:transition-transform before:duration-700 before:ease-out
                         hover:before:translate-x-[100%]"
                                >
                                    <span className="relative z-10 transform skew-x-[10deg] drop-shadow-md text-lg xl:text-xl">
                                        Explore Courses
                                    </span>
                                </button>
                            </a>
                            <span>
                                <button
                                    className="relative px-12 py-4 text-xl font-bold rounded-lg overflow-hidden
                         bg-gradient-to-r from-green-500 to-lime-500 text-white
                         shadow-lg
                         transition-all duration-300 ease-out
                         hover:scale-105 active:scale-98
                         after:content-[''] after:absolute after:inset-0 after:bg-white after:opacity-0 after:transition-opacity after:duration-300
                         hover:after:opacity-10
                         before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b from-transparent to-white/30
                         before:bottom-[-100%] before:left-0 before:transition-all before:duration-500 before:ease-out before:rounded-lg
                         hover:before:bottom-0"
                                >
                                    <span className="relative z-10 drop-shadow-md text-sm xl:text-xl">
                                        Book a Free Career Consultation
                                    </span>
                                </button>
                                <p>
                                    <span className="text-xs md:text-sm text-gray-400">
                                        (Guided by Certified Mentors & AI-Driven Tools)
                                    </span>
                                </p>
                            </span>
                        </div>
                    </div>

                    <img
                        src={hero1}
                        alt="Digital Marketing & AI Concepts"
                        className="relative z-20 min-h-67 w-full object-cover container mx-auto grayscale brightness-75 contrast-150"
                    />
                </div>
            </main>
        </div>
    );
}
