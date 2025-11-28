import studentAvatar1 from "../assets/ph/1.png"; // Placeholder for student avatars
import studentAvatar2 from "../assets/ph/2.png";
import studentAvatar3 from "../assets/ph/3.png";
import studentAvatar4 from "../assets/ph/4.png";
import Asset1 from "../assets/images/asset-3.jpeg";
import Asset2 from "../assets/images/asset-4.jpeg";
import Asset3 from "../assets/images/asset-1.jpeg";

export default function ResponsiveInfoBlock() {
    return (
        // Clean white background, minimal padding adjustment
        <section className="py-4 md:py-8 bg-white text-gray-900">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:col-span-2 lg:col-span-1 flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200">
                        <img
                            src={Asset1}
                            alt="Students in a training session"
                            className="w-full h-auto object-cover md:h-80 lg:h-96"
                        />
                        <div className="p-5 bg-teal-200 flex-grow">
                            <p className="text-black text-xs md:text-sm font-medium leading-relaxed">
                                Hands-on Learning with Real Client Campaigns &
                                AI Tools Get trained on Google & Meta Ads,
                                ChatGPT, Gemini, GA4, GSC, Automation, and
                                Social Media Strategy — all through live
                                projects, case studies, and real brands.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:col-span-2 lg:col-span-1">
                        <div className="md:col-span-2 lg:col-span-1 flex bg-white rounded-lg overflow-hidden border border-gray-200">
                            <img
                                src={Asset2}
                                alt="Students in a training session"
                                className="object-cover aspect-square h-48 md:h-auto w-48"
                            />
                            <div className="p-5 bg-red-400 flex-grow">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="flex items-center justify-center -space-x-2 mb-3">
                                        <img
                                            src={studentAvatar1}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <img
                                            src={studentAvatar2}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <img
                                            src={studentAvatar3}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <img
                                            src={studentAvatar4}
                                            alt="Student avatar"
                                            className="w-10 h-10 rounded-full border-2 border-white bg-gray-500 object-cover"
                                        />
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-700 text-xs font-bold text-white border-2 border-white shrink-0">
                                            800+
                                        </span>
                                    </div>
                                    <p className="text-center text-xs sm:text-sm text-white mt-3">
                                        <span className="font-bold text-base text-white">
                                            1,000+ Learners Mentored
                                        </span>{" "}
                                        <br /> Upskilling students, marketers,
                                        and entrepreneurs across Digital, AI &
                                        Automation
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Right: Quote Card - Retains contrasting gradient for professionalism. No shadow/hover. */}
                        <div className="col-span-1 flex flex-col bg-gradient-to-tl from-purple-600 to-indigo-500 p-6 rounded-lg justify-center">
                            <p className="text-sm sm:text-xl font-serif italic text-indigo-100 leading-relaxed mb-3">
                                "At LearnVera, we don’t just teach skills — we
                                build confidence, clarity, and creators of the
                                most in-demand digital world."
                            </p>
                            <p className="text-md font-semibold text-white">
                                Deepesh Raj
                            </p>
                            <p className="text-sm text-indigo-200">Founder</p>
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1 flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200">
                        <img
                            src={Asset3}
                            alt="Mentor leading a session with students"
                            className="w-full h-auto object-cover md:h-80 lg:h-96"
                        />
                        <div className="p-5 bg-yellow-200 flex-grow">
                            <p className="text-black text-lg font-bold leading-relaxed">
                                Live Mentor-Led Sessions. Real Feedback. Real
                                Growth.
                            </p>
                            <p className="text-black text-xs md:text-sm font-medium leading-relaxed mt-1">
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
