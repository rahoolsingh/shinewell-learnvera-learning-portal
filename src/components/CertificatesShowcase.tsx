import React from "react";
import { Check, Award, ShieldCheck, Eye } from "lucide-react";

import certificate1 from "../assets/certificate-1.png";
import certificate2 from "../assets/certificate-2.png";
import certificate3 from "../assets/certificate-3.png";

// Placeholder data - replace 'src' with your actual certificate image paths
const certificateImages = [
    {
        title: "Certificate of Achievement",
        src: certificate1,
        description: "Recognition for course completion and excellence.",
    },
    {
        title: "Certificate of Participation",
        src: certificate2,
        description: "Acknowledgment for active involvement.",
    },
    {
        title: "Certificate of Completion",
        src: certificate3,
        description: "Proof of successfully finishing the program.",
    },
];

const additionalCertificates = [
    "Hackathon Participation Badge",
    "Real-world Project Experience",
    "Soft Skills & Communication Training",
    "Agile/Scrum Methodology Certification",
];

export default function CertificatesShowcase() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Minimal Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            ></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Minimal Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                        Credentials That{" "}
                        <span className="text-blue-600">Matter</span>
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        Don't just learn, prove it. Our certificates are more
                        than paper—they're your passport to the tech world.
                    </p>
                </div>

                {/* 1. The Gallery (Certificates) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {certificateImages.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col"
                        >
                            {/* Image Frame */}

                            <div className="relative bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:border-blue-100 transition-all duration-500">
                                {/* Image */}
                                <img
                                    src={cert.src}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out aspect-[1000/707]"
                                />
                            </div>

                            {/* Minimal Text Info */}
                            <div className="pt-6 px-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldCheck
                                        size={18}
                                        className="text-blue-600"
                                    />
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {cert.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-slate-500 pl-6.5">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 2. Additional Credentials (Horizontal Divider Layout) */}
                <div className="border-t border-slate-100 pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Title Column */}
                        <div className="lg:col-span-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                Additional Perks
                            </h3>
                            <p className="text-slate-500">
                                Beyond the main certificates, you'll earn badges
                                and recognitions for specific achievements
                                during the cohort.
                            </p>
                        </div>

                        {/* List Column */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {additionalCertificates.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                                            <Check
                                                size={10}
                                                className="text-blue-600 group-hover:text-white transition-colors duration-300"
                                                strokeWidth={3}
                                            />
                                        </div>
                                        <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
