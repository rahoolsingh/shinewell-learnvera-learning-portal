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

// Merged all logos into one source of truth
const companies = [
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
                            key={index}
                            className="
                                group 
                                flex items-center justify-center 
                                h-32 md:h-40 
                                border-2 border-dashed border-gray-300 rounded-2xl
                                hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 
                                transition-all duration-300 ease-in-out p-8
                            "
                        >
                            <img
                                src={company.url}
                                alt={`${company.name} logo`}
                                className="
                                max-h-10
                                    w-auto 
                                    object-contain 
                                     opacity-80 
                                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 
                                    transition-all duration-500
                                "
                            />
                        </div>
                    ))}

                    {/* Optional: "And many more" card to fill the grid if uneven */}
                    <div className="flex items-center justify-center h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-2xl">
                        <span className="text-slate-500 font-medium text-lg">
                            + Many More
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
