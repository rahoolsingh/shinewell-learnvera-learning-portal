import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className=" font-inter min-h-screen py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="px-6 py-12 sm:p-20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-0">
                            Privacy Policy
                        </h1>
                        <ShieldCheck className="w-16 h-16 text-indigo-500 opacity-75 hidden sm:block" />
                    </div>

                    <p className="text-xs text-gray-600 mb-16 border-b pb-6 border-gray-200">
                        Effective Date: 6th November 2025
                    </p>

                    <div className="prose prose-lg max-w-none prose-indigo text-gray-700 prose-headings:font-semibold prose-headings:text-gray-800 prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3">
                        <p>
                            At LearnVera, we respect your privacy and are
                            committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use,
                            and safeguard your data when you access our website,
                            enroll in our courses, participate in live sessions,
                            or attend offline classes.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Information We Collect
                        </h2>
                        <p>
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>
                                Personal details such as your name, email
                                address, phone number, and billing information
                                during enrollment for online courses, live
                                sessions, or offline classes.
                            </li>
                            <li>
                                Usage data such as device details, IP address,
                                browser type, and interactions with our website,
                                online learning materials, or live session
                                platforms.
                            </li>
                            <li>
                                Voluntary information you provide during
                                feedback, surveys, or support communication.
                            </li>
                            <li>
                                Location or attendance data for offline classes,
                                if required for administrative purposes.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            How We Use Your Information
                        </h2>
                        <p>Your information helps us to:</p>
                        <ul className="list-disc list-inside">
                            <li>
                                Provide access to your purchased courses, live
                                sessions, offline classes, and learning
                                resources.
                            </li>
                            <li>
                                Communicate important updates, schedules,
                                learning materials, and account-related
                                notifications.
                            </li>
                            <li>
                                Improve our course content, live sessions,
                                offline class experience, website, and customer
                                support.
                            </li>
                            <li>Ensure legal and administrative compliance.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Data Protection
                        </h2>
                        <p>
                            We use industry-standard security measures to
                            safeguard your data against unauthorized access,
                            alteration, or disclosure. While we maintain strict
                            protocols, you acknowledge that no online or offline
                            platform can guarantee 100% security.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Third-Party Services
                        </h2>
                        <p>
                            LearnVera may use trusted third-party tools (such as
                            payment gateways, analytics, communication systems,
                            or live session platforms) that have their own
                            privacy practices. We recommend reviewing their
                            policies for a complete understanding.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Your Rights
                        </h2>
                        <p>
                            You may request to review, update, or delete your
                            personal data by contacting our support team at{" "}
                            <a
                                href="mailto:support@learnvera.com"
                                className="transition-colors hover:text-indigo-800 font-medium"
                            >
                                support@learnvera.com
                            </a>
                            . Certain data may be retained as required by law or
                            for legitimate business purposes (e.g., transaction
                            records or attendance records for offline classes).
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Policy Updates
                        </h2>
                        <p>
                            We may revise this Privacy Policy periodically.
                            Updates will be reflected on this page with a
                            revised “Effective Date.” Continued use of our
                            platform, participation in live sessions, or
                            attendance in offline classes implies acceptance of
                            the updated terms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
