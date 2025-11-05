import { FileCheck2 } from "lucide-react";

export default function TermsConditions() {
    return (
        <div className="font-inter min-h-screen py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="px-6 py-12 sm:p-20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-0">
                            Terms & Conditions
                        </h1>
                        <FileCheck2 className="w-16 h-16 text-indigo-500 opacity-75 hidden sm:block" />
                    </div>

                    <p className="text-xs text-gray-600 mb-16 border-b pb-6 border-gray-200">
                        Effective Date: 6th November 2025
                    </p>

                    <div className="prose prose-lg max-w-none prose-indigo text-gray-700 prose-headings:font-semibold prose-headings:text-gray-800 prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3">
                        <p>
                            Welcome to LearnVera. By accessing or using our
                            website, courses, and services—including online
                            courses, live sessions, and offline classes—you
                            agree to comply with these Terms & Conditions.
                            Please read them carefully before proceeding.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Course Enrollment
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                Enrollment is confirmed only after successful
                                payment and verification.
                            </li>
                            <li>
                                <strong>Online courses:</strong> Access is
                                provided digitally through your LearnVera
                                dashboard.
                            </li>
                            <li>
                                <strong>Live sessions:</strong> You will receive
                                schedule details and joining instructions prior
                                to the session.
                            </li>
                            <li>
                                <strong>Offline classes:</strong> Venue,
                                timings, and batch details will be shared after
                                enrollment.
                            </li>
                        </ul>
                        <p>
                            Access to courses and sessions is strictly for
                            personal learning use. Redistribution, reselling, or
                            sharing of login credentials or class access is
                            prohibited.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Intellectual Property
                        </h2>
                        <p>
                            All content, videos, PDFs, templates, and course
                            materials—whether for online, live, or offline
                            courses—are the intellectual property of LearnVera
                            and its instructors. Copying, reproducing, or
                            distributing materials without written permission is
                            a violation of copyright law.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            User Conduct
                        </h2>
                        <p>
                            Learners must use the platform and attend classes
                            ethically and respectfully. Misuse of forums,
                            plagiarism, or sharing confidential course materials
                            may result in suspension or termination of access.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Payment & Access
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                Course access or class participation is granted
                                only after successful payment confirmation.
                            </li>
                            <li>
                                Access is non-transferable and may be
                                time-limited or lifetime-based as per the course
                                details at the time of purchase.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Limitation of Liability
                        </h2>
                        <p>
                            LearnVera provides courses, live sessions, and
                            offline classes for educational purposes only. We do
                            not guarantee job placements or specific income
                            outcomes. Results may vary based on individual
                            effort and market factors.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Platform & Class Availability
                        </h2>
                        <p>
                            We strive for uninterrupted access and timely
                            delivery of live and offline sessions but do not
                            guarantee that the website, courses, or sessions
                            will always be available or error-free. Scheduled
                            maintenance, updates, technical issues, or
                            unforeseen circumstances may cause temporary
                            interruptions or rescheduling.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Modifications
                        </h2>
                        <p>
                            LearnVera reserves the right to update, enhance, or
                            modify course content, live session schedules,
                            offline class arrangements, pricing, or policies at
                            any time to ensure better learning experiences.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Governing Law
                        </h2>
                        <p>
                            These terms shall be governed by and interpreted in
                            accordance with the laws of India, and any disputes
                            shall be subject to the jurisdiction of courts in
                            Bangalore, Karnataka.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
