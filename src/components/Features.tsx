import Asset1 from "../assets/images/asset-3.jpeg";
import Asset2 from "../assets/images/asset-4.jpeg";
import Asset3 from "../assets/images/asset-1.jpeg";

export default function ResponsiveInfoBlock() {
    return (
        <section className="py-8 bg-white text-gray-900">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    {/* --- LEFT COLUMN (Teal) --- */}
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 h-full shadow-sm">
                        <img
                            src={Asset1}
                            alt="Students in a training session"
                            className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                        />
                        <div className="p-6 bg-teal-200 flex-grow flex flex-col justify-center">
                            <p className="text-black text-sm font-medium leading-relaxed">
                                Hands-on Learning with Real Client Campaigns &
                                AI Tools. Get trained on Google & Meta Ads,
                                ChatGPT, Gemini, GA4, GSC, Automation, and
                                Social Media Strategy — all through live
                                projects, case studies, and real brands.
                            </p>
                        </div>
                    </div>

                    {/* --- MIDDLE COLUMN (Red + Gradient) --- */}
                    <div className="flex flex-col gap-6 h-full">
                        {/* Red Card (Stats) */}
                        <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm flex-grow">
                            {/* Image Section */}
                            <div className="w-full sm:w-1/3 h-48 sm:h-auto relative shrink-0">
                                <img
                                    src={Asset2}
                                    alt="Student success"
                                    className="absolute inset-0 w-full h-full object-cover object-[0%_20%]"
                                />
                            </div>
                            {/* Text Section (Cleaned up) */}
                            <div className="p-6 bg-red-400 w-full sm:w-2/3 flex flex-col justify-center items-center text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    1,000+
                                </h3>
                                <p className="text-sm text-white font-medium leading-relaxed">
                                    Learners Mentored.
                                    <br />
                                    Upskilling students, marketers, and
                                    entrepreneurs across Digital, AI &
                                    Automation.
                                </p>
                            </div>
                        </div>

                        {/* Quote Card (Gradient) */}
                        <div className="flex flex-col bg-gradient-to-tl from-purple-600 to-indigo-500 p-8 rounded-lg justify-center shadow-sm flex-grow">
                            <p className="text-lg font-serif italic text-indigo-50 leading-relaxed mb-4">
                                "At LearnVera, we don’t just teach skills — we
                                build confidence, clarity, and creators."
                            </p>
                            <div>
                                <p className="text-base font-bold text-white">
                                    Deepesh Raj
                                </p>
                                <p className="text-sm text-indigo-200">
                                    Founder
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN (Yellow) --- */}
                    <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 h-full shadow-sm">
                        <img
                            src={Asset3}
                            alt="Mentor leading a session"
                            className="w-full h-64 sm:h-72 lg:h-80 object-cover object-[0%_35%]"
                        />
                        <div className="p-6 bg-yellow-200 flex-grow flex flex-col justify-center">
                            <p className="text-black text-lg font-bold leading-tight mb-3">
                                Live Mentor-Led Sessions. Real Feedback. Real
                                Growth.
                            </p>
                            <p className="text-black text-sm font-medium leading-relaxed">
                                Experience interactive classes, campaign
                                reviews, and one-on-one guidance, where we ditch
                                the theory and go all practical.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
