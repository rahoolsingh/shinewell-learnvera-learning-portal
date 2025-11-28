import whatsAppIcon from "../assets/whatsapp.webp";
import {
    MessageCircle,
    Video,
    Bell,
    ArrowRight,
    Star,
    Users,
    FileText,
} from "lucide-react";
import { Link } from "react-router";

// --- Full Variant (Original Detailed Layout) ---
const FullVariant = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Texture - subtle pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(#25D366 1.5px, transparent 1.5px)",
                    backgroundSize: "32px 32px",
                }}
            ></div>

            {/* Floating Blobs for depth */}
            <div className="absolute -left-20 top-20 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -right-20 bottom-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Card Container */}
                <div className="relative rounded-3xl overflow-hidden bg-[#075E54] shadow-2xl shadow-green-900/20">
                    {/* Decor: WhatsApp Doodles/Pattern Overlay (CSS Gradient simulated) */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] opacity-90"></div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
                        {/* Left Column: Content */}
                        <div className="text-white space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                Don't Miss Out on&nbsp;
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-100">
                                    Updates & Resources
                                </span>
                            </h2>

                            <p className="text-lg text-green-50/90 leading-relaxed max-w-xl">
                                Join our exclusive WhatsApp Channel. Get
                                access to resources that aren't shared anywhere
                                else.
                            </p>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Video,
                                        title: "Free Webinars",
                                        desc: "Weekly sessions with experts",
                                    },
                                    {
                                        icon: Bell,
                                        title: "Instant Updates",
                                        desc: "Instant opportunity updates",
                                    },
                                    {
                                        icon: Star,
                                        title: "Exclusive Notes",
                                        desc: "PDFs & Cheat Sheets",
                                    },
                                    {
                                        icon: MessageCircle,
                                        title: "Direct Support",
                                        desc: "Get your questions answered",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="p-3 rounded-xl bg-white/10 border border-white/10 group-hover:bg-white/20 transition-colors">
                                            <item.icon className="text-green-300 w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-green-100/70">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <Link
                                    to="https://whatsapp.com/channel/0029VbBm6Mh7DAWy5XJH433k"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#075E54] font-bold text-lg hover:bg-green-50 transition-all duration-300 group shadow-lg hover:shadow-xl"
                                >
                                    <img
                                        src={whatsAppIcon}
                                        alt="WhatsApp Icon"
                                        className="w-8 h-8"
                                    />
                                    Join WhatsApp Channel
                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                                <p className="mt-4 text-xs text-green-200/60">
                                    * Join now and stay ahead with exclusive
                                    content!
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Visual/Mockup */}
                        <div className="hidden lg:flex justify-center relative">
                            {/* Abstract Phone/Chat UI Mockup */}
                            <div className="relative w-72 h-[500px] bg-white rounded-[2.5rem] border-8 border-white/10 shadow-2xl rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out z-10 backdrop-blur-sm bg-opacity-10">
                                <div className="absolute inset-2 bg-[#e5ddd5] rounded-[2rem] overflow-hidden flex flex-col">
                                    {/* Header */}
                                    <div className="bg-[#075E54] p-4 flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-white font-bold text-xs overflow-hidden">
                                            <img
                                                src="/logo.png"
                                                alt="Logo"
                                                className="w-6 h-6 bg-white object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm">
                                                Learnvera Growth Hub
                                            </h3>
                                            <p className="text-xs text-white/80">
                                                Channel
                                            </p>
                                        </div>
                                    </div>
                                    {/* Chat Area */}
                                    <div className="p-4 space-y-3 flex-1 overflow-hidden opacity-80">
                                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm w-4/5 self-start">
                                            <div className="h-2 w-full bg-slate-200 rounded mb-2"></div>
                                            <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                                        </div>
                                        <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm w-3/4 self-end ml-auto">
                                            <div className="h-2 w-full bg-green-200/50 rounded mb-2"></div>
                                            <div className="h-2 w-1/2 bg-green-200/50 rounded"></div>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm w-5/6 self-start flex items-center gap-3">
                                            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center text-[8px]">
                                                PDF
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2 w-full bg-slate-200 rounded mb-1"></div>
                                                <div className="h-1.5 w-12 bg-slate-100 rounded"></div>
                                            </div>
                                        </div>
                                        {/* New Message Pop */}
                                        <div className="bg-white p-4 rounded-xl shadow-lg border border-green-100 absolute bottom-8 left-4 right-4 animate-bounce-subtle">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                    <Bell
                                                        size={18}
                                                        className="text-green-600"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-800">
                                                        New Webinar Alert!
                                                    </p>
                                                    <p className="text-[10px] text-slate-500">
                                                        "How to make your first
                                                        money..." - Starts in 30
                                                        mins.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative floating icons around phone */}
                            <div className="absolute top-10 -right-4 p-4 bg-white rounded-2xl shadow-xl animate-float-slow">
                                <Video className="text-blue-500 w-6 h-6" />
                            </div>
                            <div className="absolute bottom-32 right-32 p-2 bg-white rounded-2xl shadow-xl animate-float-fast rotate-12">
                                <img
                                    src={whatsAppIcon}
                                    alt="WhatsApp"
                                    className="w-10 h-10"
                                />
                            </div>
                            <div className="absolute bottom-20 -left-8 p-4 bg-white rounded-2xl shadow-xl animate-float-slower">
                                <FileText className="text-red-500 w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Sleek Variant (Compact Banner) ---
const SleekVariant = () => {
    return (
        <section className="container mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#075E54] to-[#25D366]">
                <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:px-12 gap-8">
                    {/* Left: Icon & Text */}
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                                    <Users size={10} /> WhatsApp Channel
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white leading-tight">
                                Join the Growth Hub
                            </h3>
                            <p className="text-green-50 text-xs font-medium">
                                Get free webinars, job alerts & exclusive notes.
                            </p>
                        </div>
                    </div>

                    {/* Right: Action */}
                    <div className="flex-shrink-0 w-full md:w-auto">
                        <Link
                            to="https://whatsapp.com/channel/0029VbBm6Mh7DAWy5XJH433k"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 bg-white text-[#075E54] font-bold rounded-xl hover:bg-green-50 duration-300 group"
                        >
                            <img
                                src={whatsAppIcon}
                                alt="WhatsApp Channel"
                                className="w-8 h-8"
                            />
                            Join Now
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function WhatsAppCommunity({ variant = "full" }) {
    if (variant === "sleek") {
        return <SleekVariant />;
    }
    return <FullVariant />;
}
