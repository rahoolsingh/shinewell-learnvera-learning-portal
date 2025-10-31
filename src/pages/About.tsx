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
    Linkedin, // Added for instructor
    ChevronDown, // Added for hero
} from "lucide-react";
import { motion, useInView } from "framer-motion"; // Added for animations
import CountUp from "react-countup"; // Added for stats
import { useRef } from "react"; // Added for useInView

// --- Reusable StarRating (from your provided files) ---
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

// --- New Animated Stat Component ---
const AnimatedStat = ({ icon: Icon, end, label }) => {
    const ref = useRef(null);
    // Triggers animation when the element is 100px from the bottom of the viewport
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    return (
        <div className="flex flex-col items-center" ref={ref}>
            <Icon className="w-10 h-10 text-blue-400 mb-3" />
            <span className="text-4xl lg:text-5xl font-extrabold">
                {isInView ? <CountUp end={end} duration={2.5} /> : "0"}
                {label.includes("%") ? "%" : "+"}
            </span>
            <span className="text-gray-300">{label.replace("%", "")}</span>
        </div>
    );
};

// --- New Reusable Animated CTA Button ---
const CtaButton = () => (
    <motion.a
        href="/contact"
        aria-label="Get Free Consultation"
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02, y: -2 }}
        className="relative inline-block text-center px-10 py-4 text-xl font-bold rounded-xl
      bg-gradient-to-r from-green-500 to-cyan-500 text-white
      shadow-lg shadow-green-500/30
      transition-all duration-300 ease-out overflow-hidden group"
    >
        <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
            }}
        />
        {/* Text is kept exactly as per your original button */}
        <span className="relative z-10">Get Free Consultation</span>
    </motion.a>
);

const testimonialsData = [
    {
        name: "Aarav Mehta",
        title: "Fresher (Digital Marketing Graduate)",
        quote: "I had zero experience before joining LearnVera. Within weeks, I was handling live ad campaigns and even got my first internship before finishing the course. It felt like working in a real agency from day one!",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Priya Nair",
        title: "Small Business Owner",
        quote: "I used to depend on agencies for marketing. After LearnVera’s program, I run my own campaigns, track results, and cut costs by 60%. It’s the best investment I’ve made for my business.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Rohan Gupta",
        title: "Career Switcher (Sales to Marketing)",
        quote: "I was nervous about switching careers, but LearnVera made it smooth. And, Deepesh is a gem, his real-world knowledge changed everything for me.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                        Future-Proofing Careers with Practical Skills
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        The world doesn’t need more degrees, it needs practical
                        understanding. We’re closing the global skill gap by
                        replacing theoretical knowledge with hands-on, AI-backed
                        skills that lead to real career and business growth.
                    </p>
                    {/* Animated Scroll Down Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-8 h-8 text-white" />
                    </motion.div>
                </div>
            </section>
            
            {/* --- 2. Mission & Vision Section (Redesigned Layout) --- */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mission */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="p-3 bg-blue-100 rounded-full">
                                    <Rocket className="w-8 h-8 text-blue-600" />
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Our Mission
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To make digital learning useful and careers
                                stable. We're here to bridge the gap between
                                theoretical concepts and real world demands.
                                Each course is designed by experts who have been
                                there, grown businesses, and understand what
                                brings results. We don't merely teach theories,
                                we equip you with practical approaches. For
                                learners, it means confidence and career growth.
                                For businesses, it means finding skilled,
                                job-ready talent that truly makes a difference.
                            </p>
                        </motion.div>
                        <motion.img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Team discussing mission"
                            className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                    </div>
                    
                    {/* Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <motion.img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Team planning vision"
                            className="rounded-2xl shadow-xl w-full object-cover aspect-video lg:order-first"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="p-3 bg-purple-100 rounded-full">
                                    <Eye className="w-8 h-8 text-purple-600" />
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Our Vision
                                </h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To make high-quality, hands-on, and affordable
                                digital education accessible to the ambitious —
                                from freshers and career switchers to
                                entrepreneurs. We aim to empower learners with
                                the latest AI tools and modern digital skills
                                that matter in this fast-changing world. We
                                believe that practical skills can’t be mastered
                                through theories alone, which is why every
                                learner here, gains real-world experience and
                                works on practical projects. We’re building a
                                future where every learner is confident and
                                future-ready to turn knowledge into real
                                results.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* --- 3. Stats Bar (Animated) --- */}
            <section className="bg-gray-800 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <AnimatedStat icon={Users} end={5000} label="Students Trained" />
                        <AnimatedStat icon={Briefcase} end={95} label="Placement Rate %" />
                        <AnimatedStat icon={Medal} end={50} label="Expert Instructors" />
                    </div>
                </div>
            </section>
            
            {/* --- 4. Our Core Values (Animated Cards) --- */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Why We Do What We Do
                        </h2>
                        <p className="text-lg text-gray-600">
                            We stand for learning that works in the real world —
                            practical, AI-ready, and built for growth. Every
                            learner, mentor, and course at LearnVera reflects
                            that mission.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                        >
                            <Zap className="w-8 h-8 text-green-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">
                                Practical Over Theory
                            </h3>
                            <p className="text-sm text-gray-600">
                                You can’t become skilled by reading about skills
                                — you learn by doing. Every LearnVera course is
                                built around real projects, live campaigns, and
                                business case studies that teaches what
                                professionals face in the real world. Because
                                real growth comes from experience, not just
                                lectures.
                            </p>
                        </motion.div>
                        {/* Card 2 */}
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                        >
                            <Lightbulb className="w-8 h-8 text-orange-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">
                                Future-Ready Learning
                            </h3>
                            <p className="text-sm text-gray-600">
                                We don’t teach what worked yesterday — we teach
                                what works today and tomorrow. Our programs
                                integrate modern AI tools, digital strategies,
                                and hands-on projects to prepare learners for a
                                fast-changing, tech-driven world. You’ll always
                                stay ahead, not catch up.
                            </p>
                        </motion.div>
                        {/* Card 3 */}
                        <motion.div 
                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                        >
                            <Heart className="w-8 h-8 text-red-600 mb-3" />
                            <h3 className="text-xl font-bold mb-2">
                                Career-Focused Growth
                            </h3>
                            <p className="text-sm text-gray-600">
                                Every learner at LearnVera has a goal — to build
                                a successful career or business. We design every
                                course with that in mind. From
                                portfolio-building tasks to interview prep and
                                mentorship, everything you learn, directly moves
                                you closer to your next big opportunity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* --- 5. Meet the Instructors (Redesigned Card) --- */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Taught by the Industry’s Finest
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our instructors aren't just teachers; they are
                            active leaders in the industry. They run the
                            agencies, lead the teams, and write the strategies.
                        </p>
                    </div>
                    {/* Centered Horizontal Card */}
                    <div className="flex justify-center">
                        <motion.div 
                            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 max-w-md lg:max-w-4xl lg:flex"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img
                                src="https://media.licdn.com/dms/image/v2/D5603AQEq_uek4fsYVQ/profile-displayphoto-shrink_800_800/B56Zh25PTsHQAc-/0/1754341375924?e=1763596800&v=beta&t=1bHOyZUqof1SKURIbAxYBPvaDsMiFVenvMxTnyA0v-8"
                                alt="Deepesh Raj"
                                className="w-full lg:w-1/3 h-64 lg:h-auto object-cover"
                            />
                            <div className="p-8 lg:w-2/3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            Deepesh Raj
                                        </h3>
                                        <p className="text-md font-medium text-blue-600 mb-3">
                                            Growth Strategist & Founder
                                        </p>
                                    </div>
                                    <a href="https://www.linkedin.com/in/deeepeshraj/" target="_blank" className="text-gray-400 hover:text-blue-600" aria-label="LinkedIn">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                </div>
                                {/* Text content is kept exactly as provided */}
                                <p className="text-sm text-gray-600">
                                    He’s a growth strategist, entrepreneur, and
                                    digital marketing expert with a Ph.D. in
                                    Cybersecurity and over 9 years of hands-on
                                    experience. As the Founder & CEO of
                                    Shinewell Digital Solutions Pvt. Ltd., a
                                    renowned digital marketing agency, he has
                                    helped 200+ clients across the globe scale
                                    their businesses and mentored 1000+ learners
                                    using data-driven and AI-powered strategies.
                                    <br />
                                    <br />
                                    Having spent crores in ad campaigns across
                                    multiple platforms, Deepesh brings to the
                                    classroom what most only read in case
                                    studies — real-world experience. He also
                                    serves as an Associate Professor, combining
                                    academic depth with practical insight to
                                    teach what truly works in today’s digital
                                    world.
                                    <br />
                                    <br />
                                    Learners know him not just for his
                                    knowledge, but for his clarity, mentorship,
                                    and results-first mindset. When you learn
                                    from him, you don’t just gain skills — you
                                    gain the mindset of someone who’s already
                                    mastered the game.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* --- 6. Our Story (Redesigned Layout) --- */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Founders in a meeting"
                                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <span className="text-sm font-bold text-blue-600 uppercase">
                                Our Journey
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 mt-2">
                                Practice-Driven Learning
                            </h2>
                            {/* Text content is kept exactly as provided */}
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    It all began at Shinewell Digital Solutions
                                    — Bangalore’s leading digital marketing
                                    agency where we faced a challenge most
                                    businesses do: finding people who were not
                                    just certified, but truly skilled. Time and
                                    again, we met candidates who had strong
                                    theoretical knowledge but struggled to apply
                                    it in real projects. That’s when we realized
                                    the problem wasn’t talent — it was th
                                </p>
                                <p>
                                    e lack of practical exposure. So, we created
                                    the solution we wished existed — a platform
                                    where learners don’t just study marketing,
                                    they do marketing. From managing live
                                    campaigns to handling clients and building
                                    strategies, every learner at LearnVera gains
                                    real, practical experience that delivers
                                    results. What started as an in-house
                                    training initiative at Shinewell is{" "}
                                </p>
                                <p>
                                    now shaping global careers every day. And
                                    the best part? We don’t leave you hanging
                                    after the course ends — LearnVera provides
                                    in-house internships and placement
                                    opportunities, ensuring your learning
                                    journey builds you a successful career.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* --- 7. Testimonials (Animated Cards) --- */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                            Success Speaks for Itself
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonialsData.map((item, i) => (
                            <motion.div
                                key={item.name}
                                className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col border border-gray-200"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ scale: 1.03, y: -5 }}
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- 8. CTA Section (Redesigned Button) --- */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join thousands of successful professionals who
                            transformed their careers with us. Find the perfect
                            course for you and start learning today.
                        </p>
                        {/* --- Replaced with consistent CtaButton --- */}
                        <CtaButton />
                    </div>
                </div>
            </section>
        </div>
    );
}