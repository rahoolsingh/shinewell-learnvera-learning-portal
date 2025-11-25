import React, { useState, useEffect } from "react";
// Note: Make sure your path to assets is correct based on your project structure
import amazonLogo from "../assets/brands/amazon.png";
import googleLogo from "../assets/brands/google.png";
import microsoftLogo from "../assets/brands/microsoft.png";
import infosysLogo from "../assets/brands/infosys.png";
import cognizantLogo from "../assets/brands/cognizant.png";
import tcsLogo from "../assets/brands/tcs.png";
import boatLogo from "../assets/brands/boat.png";
import ibmLogo from "../assets/brands/ibm.png";
import facebookLogo from "../assets/brands/facebook.png";
import adobeLogo from "../assets/brands/adobe.png";
import flipkartLogo from "../assets/brands/flipkart.png";

const originalCompanies = [
    { name: "Amazon", url: amazonLogo },
    { name: "Google", url: googleLogo },
    { name: "Microsoft", url: microsoftLogo },
    { name: "Infosys", url: infosysLogo },
    { name: "Cognizant", url: cognizantLogo },
    { name: "TCS", url: tcsLogo },
    { name: "boAt", url: boatLogo },
    { name: "ibm", url: ibmLogo },
    { name: "Facebook", url: facebookLogo },
    { name: "Adobe", url: adobeLogo },
    { name: "Flipkart", url: flipkartLogo },
];

export default function HiringPartners() {
    const [companies, setCompanies] = useState(originalCompanies);
    // State to trigger the visual glitch effect on the logos
    const [isGlitching, setIsGlitching] = useState(false);

    // Standard Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        // Trigger the glitch cycle every 3 seconds
        const interval = setInterval(() => {
            // 1. Start visual glitch (blur/fade logo)
            setIsGlitching(true);

            // 2. Wait 150ms, then swap the actual logo data
            setTimeout(() => {
                setCompanies((prev) => shuffleArray(prev));

                // 3. Wait another 150ms, then snap logo back to clear
                setTimeout(() => {
                    setIsGlitching(false);
                }, 150);
            }, 150);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-gray-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
                <div className="text-center mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                        Learn From Us & Get Hired In
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Join thousands of students who have secured careers at
                        top-tier tech giants and innovative startups.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {companies.map((company, index) => (
                        <div
                            key={index} // Using index as key keeps the DOM nodes stable, only content changes
                            className="
                                group 
                                flex items-center justify-center 
                                h-32 md:h-40 
                                border-2 border-dashed border-gray-300 rounded-2xl
                                hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 
                                transition-all duration-300 ease-in-out p-8
                                overflow-hidden relative
                            "
                        >
                            {/* The image now handles the glitch state. 
                               We use transition-all duration-300 for a quick snap effect.
                            */}
                            <img
                                src={company.url}
                                alt={`${company.name} logo`}
                                className={`
                                    max-h-10
                                    w-auto 
                                    object-contain 
                                    transition-all duration-300 ease-out
                                    
                                    /* Conditional Glitch State */
                                    ${
                                        isGlitching
                                            ? "blur-[2px] opacity-40 scale-90 grayscale translate-x-1" // Glitch active: blurry, faded, smaller, shifted slightly
                                            : "blur-0 opacity-80 scale-100 translate-x-0" // Normal state
                                    }

                                    /* Hover states (override normal state) */
                                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                                `}
                            />
                        </div>
                    ))}

                    {/* Static "And many more" card */}
                    <div className="flex items-center justify-center h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50/50">
                        <span className="text-slate-500 font-medium text-lg">
                            + Many More
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
