import {
    Star,
    Rocket,
    Eye,
    Users,
    Briefcase,
    Medal,
    Zap,
    Lightbulb,
    Heart,
    Quote,
} from "lucide-react";

// --- Reusable StarRating (from your previous files) ---
const StarRating = ({ rating, className = "" }) => {
    return (
        <div className={`flex items-center gap-0.5 ${className}`}>
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-4 h-4 ${
                        index < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={index < rating ? "currentColor" : "none"}
                />
            ))}
        </div>
    );
};

// --- Page-Specific Data (for team & testimonials) ---
const teamData = [
    {
        name: "Priya Sharma",
        title: "Senior Marketing Strategist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Priya has over a decade of experience in building multi-million dollar marketing funnels for tech startups.",
    },
    {
        name: "Rohan Gupta",
        title: "Head of Performance Marketing",
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Rohan is a certified Google & Meta ads specialist who has managed over $10M in ad spend with a proven ROI.",
    },
    {
        name: "Aisha Khan",
        title: "E-commerce & CRO Specialist",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Aisha lives for data, helping e-commerce brands double their conversion rates through meticulous A/B testing.",
    },
    {
        name: "Vikram Singh",
        title: "Agency Founder & Automation Expert",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Vikram scaled his own agency from 0 to 7-figures using the automation and SOPs he now teaches.",
    },
];

const testimonialsData = [
    {
        name: "Arjun Reddy",
        title: "Marketing Manager",
        quote: "The 'Growth Pro' course was a game-changer. I was promoted within 3 months of applying what I learned. The live projects are no joke.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sneha Patel",
        title: "Freelancer",
        quote: "I switched careers from finance to marketing after the 'Foundation' course. The instructors are real experts who genuinely care about your success.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "David Lee",
        title: "Small Business Owner",
        quote: "I finally understand SEO and GA4. My website traffic is up 150% and I'm not wasting money on ads anymore. 100% recommend.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function AboutUsPage() {
    return (
        <div className="bg-white">
            {/* --- 1. Hero Section --- */}
            <section className="relative bg-gray-900 text-white py-24 md:py-32">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        We're Closing the Digital Skill Gap.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        We don't just teach marketing; we build marketers. Our
                        mission is to empower the next generation of digital
                        leaders with hands-on, practical skills that drive real
                        results.
                    </p>
                </div>
            </section>

            {/* --- 2. Mission & Vision Section --- */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <Rocket className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Our Mission
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                To provide the most practical,
                                results-oriented digital marketing education on
                                the planet. We bridge the gap between academic
                                theory and real-world application by putting
                                students in live cohorts, running real
                                campaigns, and getting them mentored by
                                industry-leading professionals.
                            </p>
                        </div>
                        <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-8 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <Eye className="w-8 h-8 text-purple-600" />
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Our Vision
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                To create a world where anyone with ambition can
                                gain the skills to build a successful career or
                                business in the digital economy. We envision a
                                global community of expert marketers who are
                                creative, data-driven, and ethically grounded.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. Stats Bar --- */}
            <section className="bg-gray-800 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <Users className="w-10 h-10 text-blue-400 mb-3" />
                            <span className="text-4xl font-extrabold">
                                5,000+
                            </span>
                            <span className="text-gray-300">
                                Students Trained
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Briefcase className="w-10 h-10 text-blue-400 mb-3" />
                            <span className="text-4xl font-extrabold">
                                95%
                            </span>
                            <span className="text-gray-300">
                                Placement Rate
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Medal className="w-10 h-10 text-blue-400 mb-3" />
                            <span className="text-4xl font-extrabold">50+</span>
                            <span className="text-gray-300">
                                Expert Instructors
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 4. Our Core Values --- */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our values aren't just words on a wall. They are the
                            operating principles behind every course we build
                            and every student we teach.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <Zap className="w-8 h-8 text-green-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">
                                Practice Over Theory
                            </h3>
                            <p className="text-sm text-gray-600">
                                You can't learn to swim from a textbook. Our
                                courses are built on hands-on projects, real
                                budgets, and live campaigns.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <Lightbulb className="w-8 h-8 text-orange-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">
                                Constant Evolution
                            </h3>
                            <p className="text-sm text-gray-600">
                                Digital marketing changes every day. Our
                                curriculum is updated every month, not every
                                year, to ensure you learn what's working *now*.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <Heart className="w-8 h-8 text-red-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">
                                Community-Centric
                            </h3>
                            <p className="text-sm text-gray-600">
                                Your network is your net worth. We foster a
                                lifelong community of peers, mentors, and alumni
                                for support and opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 5. Meet the Instructors --- */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Learn from the Best in the Business
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our instructors aren't just teachers; they are
                            active leaders in the industry. They run the
                            agencies, lead the teams, and write the strategies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamData.map((member) => (
                            <div
                                key={member.name}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 text-center"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-600 mb-3">
                                        {member.title}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 6. Our Story --- */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Founders in a meeting"
                                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                            />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-blue-600 uppercase">
                                Our Journey
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 mt-2">
                                From Agency to Academy
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    It all started in 2018. As a digital agency,
                                    we faced a constant challenge: hiring new
                                    marketers who actually knew how to do the
                                    job. We found graduates with degrees but no
                                    practical skills, and self-taught marketers
                                    with gaps in their strategic knowledge.
                                </p>
                                <p>
                                    We were spending months training every new
                                    hire. So, we built the training program we
                                    wished existed. What began as an internal
                                    bootcamp quickly became our passion. In 2022,
                                    we opened our doors to the public, and we've
                                    been transforming careers ever since.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 7. Testimonials --- */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Don't Just Take Our Word For It
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonialsData.map((item) => (
                            <div
                                key={item.name}
                                className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col border border-gray-200"
                            >
                                <Quote className="w-10 h-10 text-blue-300 mb-4" />
                                <p className="text-gray-700 mb-6 flex-grow">
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {item.title}
                                        </p>
                                    </div>
                                    <div className="ml-auto">
                                        <StarRating rating={item.rating} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 8. CTA Section --- */}
            <section className="bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Join thousands of successful professionals who
                            transformed their careers with us. Find the perfect
                            course for you and start learning today.
                        </p>
                        {/* --- Re-used Animated Button --- */}
                        <div className="relative group w-full max-w-xs mx-auto">
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 animate-borderFlow"></div>
                            <a href="/contact">
                                <button
                                    className={`relative px-8 py-3 text-xl font-extrabold rounded-xl overflow-hidden w-full
    text-white transform skew-x-[-10deg] transition-all duration-300 ease-out 
    hover:skew-x-[0deg] hover:scale-105 active:scale-98
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
    before:transform before:translate-x-[-100%] before:skew-x-[-20deg]
    before:transition-transform before:duration-700 before:ease-out
    hover:before:translate-x-[100%]
    bg-gradient-to-r from-teal-500 via-purple-500 to-cyan-500 animate-gradientFlow`}
                                >
                                    Get Free Consultation
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>W
        </div>
    );
}