import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import logo from "../assets/images/logo-square-white.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 font-inter">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* --- Top Section: Columns --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Brand & Tagline */}
                    <div>
                        <img src={logo} alt="LearnVera Logo" className="h-40" />
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#courses"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Policies Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                            Policies
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="terms-and-conditions"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="privacy-policy"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="refund-policy"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- Bottom Section: Copyright & Socials --- */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Copyright Text */}
                    <div className="text-sm">
                        © {new Date().getFullYear()} LearnVera, Inc. All rights
                        reserved.
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-5">
                        <a
                            href="https://www.facebook.com/learnveraindia/"
                            target="_blank"
                            className="hover:text-white transition-colors duration-200"
                            aria-label="Facebook"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                            href="https://x.com/learnvera"
                            target="_blank"
                            className="hover:text-white transition-colors duration-200"
                            aria-label="Twitter"
                        >
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                        <a
                            href="https://www.instagram.com/learnvera/"
                            target="_blank"
                            className="hover:text-white transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/learnvera"
                            target="_blank"
                            className="hover:text-white transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a
                            href="https://www.youtube.com/@Learnvera"
                            target="_blank"
                            className="hover:text-white transition-colors duration-200"
                            aria-label="YouTube"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// https://www.youtube.com/@Learnvera
// https://www.instagram.com/learnvera/
// https://www.linkedin.com/company/learnvera
// https://www.facebook.com/learnveraindia/
// https://x.com/learnvera
