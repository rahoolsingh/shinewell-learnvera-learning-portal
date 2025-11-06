import Marquee from "react-fast-marquee";

export default function FounderVideoMessage() {
    const embedUrl = `https://www.youtube.com/embed/u0noTxTXdb0`;

    return (
        <section className="py-24 bg-gray-950 text-gray-100 font-sans px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div
                        className={`relative flex flex-col justify-between w-full md:col-span-1 lg:col-span-2`}
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Founder's Message
                            </h2>
                            <h3 className="text-5xl font-bold text-cyan-500 mb-2.5 relative">
                                Deepesh Raj
                                <svg
                                    width="300" // Increased width for better visual
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

                            <p className="text-gray-300 text-sm">
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

                        {/* <div className="grid gap-8">
                            <div className="border-2 border-dashed -rotate-3 p-3 rounded-lg bg-teal-400/70 flex gap-4 w-64 items-center justify-center">
                                <p className="text-3xl font-extrabold text-white">
                                    16M+
                                </p>
                                <p className="text-xs text-white font-bold">
                                    Seconds of Confusion Eliminated
                                </p>
                            </div>
                            <div className="border-2 border-dashed rotate-3 p-3 rounded-lg bg-cyan-500/70 flex gap-4 w-60 items-center justify-center">
                                <p className="text-3xl font-extrabold text-white">
                                    8K+
                                </p>
                                <p className="text-xs text-white font-bold">
                                    Real Campaigns Run by Our Students
                                </p>
                            </div>
                        </div> */}
                    </div>

                    <div className="md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center h-full w-full">
                        {/* <p className="text-sm font-semibold uppercase text-blue-400 mb-2 ml-4">
                            A Message from Our Founder
                        </p> */}

                        <div
                            className={`group relative overflow-hidden rounded-3xl shadow-xl
                                border-4 border-white
                                aspect-video transition-all duration-500 ease-out
                                hover:shadow-blue-400/20 w-full h-full
                            `}
                        >
                            <iframe
                                src={embedUrl}
                                className="absolute inset-0 w-full h-full scale-105"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Founder's Message"
                            ></iframe>

                            <Marquee
                                className="!absolute text-sm text-white bg-cyan-500 bottom-0 py-1 "
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
