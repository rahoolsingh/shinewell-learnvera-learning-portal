import Marquee from "react-fast-marquee";

const channels = [
    "https://learnmize.com/wp-content/uploads/2025/09/R.-bharat.png",
    "https://learnmize.com/wp-content/uploads/2025/09/hindustan-times_.png",
    "https://learnmize.com/wp-content/uploads/2025/09/yahoo-new.png",
    "https://learnmize.com/wp-content/uploads/2025/09/Zbusiness.png",
    "https://learnmize.com/wp-content/uploads/2025/09/TEDx.png",
    "https://learnmize.com/wp-content/uploads/2025/09/R.-bharat.png",
    "https://learnmize.com/wp-content/uploads/2025/09/hindustan-times_.png",
    "https://learnmize.com/wp-content/uploads/2025/09/yahoo-new.png",
    "https://learnmize.com/wp-content/uploads/2025/09/Zbusiness.png",
    "https://learnmize.com/wp-content/uploads/2025/09/TEDx.png",
    "https://learnmize.com/wp-content/uploads/2025/09/R.-bharat.png",
    "https://learnmize.com/wp-content/uploads/2025/09/hindustan-times_.png",
    "https://learnmize.com/wp-content/uploads/2025/09/yahoo-new.png",
    "https://learnmize.com/wp-content/uploads/2025/09/Zbusiness.png",
    "https://learnmize.com/wp-content/uploads/2025/09/TEDx.png",
];

const isMobile = () => {
    if (typeof window !== "undefined") {
        return window.innerWidth <= 768;
    }
    return false;
};

export default function Opportunities() {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto ">
                <div className="text-center mb-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                        In The{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            Media
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        As featured in leading popular channels. We are proud to
                        be recognized for our commitment to quality education
                        and innovation.
                    </p>
                </div>

                <div className="mb-8">
                    <Marquee
                        gradient={isMobile() ? false : true}
                        speed={50}
                        pauseOnHover={true}
                    >
                        <span className="flex items-center gap-10">
                            {channels.map((channel, index) => (
                                <img
                                    src={channel}
                                    alt={`Channel ${index + 1}`}
                                    className="h-10 grayscale hover:grayscale-0 hover:invert-0 bg-black p-2 rounded-sm transition-all duration-300 invert"
                                />
                            ))}
                        </span>
                    </Marquee>
                </div>
                <div>
                    <Marquee
                        gradient={isMobile() ? false : true}
                        speed={50}
                        pauseOnHover={true}
                        direction="right"
                    >
                        <span className="flex items-center gap-10">
                            {channels.map((channel, index) => (
                                <img
                                    src={channel}
                                    alt={`Channel ${index + 1}`}
                                    className="h-10 grayscale hover:grayscale-0 hover:invert-0 bg-black p-2 rounded-sm transition-all duration-300 invert"
                                />
                            ))}
                        </span>
                    </Marquee>
                </div>
            </div>
        </section>
    );
}
