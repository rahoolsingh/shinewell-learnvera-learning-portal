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

export default function Opportunities() {
    return (
        <section className="py-16 bg-white">
            <div className="   mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-7xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        THE OPPORTUNITIES
                    </h2>
                    <p className="text-xl text-gray-600">
                        In a world run by AI and innovation, digital skills
                        aren’t optional — they’re the only way to a secured
                        future.
                    </p>
                </div>

                <div className="mb-8">
                    <Marquee gradient={true} speed={50} pauseOnHover={true}>
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
                        gradient={true}
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
