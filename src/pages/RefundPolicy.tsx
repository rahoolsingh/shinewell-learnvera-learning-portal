import { RotateCcw } from "lucide-react";

export default function RefundPolicy() {
    return (
        <div className="font-inter min-h-screen py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="px-6 py-12 sm:p-20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-0">
                            Refund & Cancellation Policy
                        </h1>
                        <RotateCcw className="w-16 h-16 text-indigo-500 opacity-75 hidden sm:block" />
                    </div>

                    <p className="text-xs text-gray-600 mb-16 border-b pb-6 border-gray-200">
                        Effective Date: 6th November 2025
                    </p>

                    <div className="prose prose-lg max-w-none prose-indigo text-gray-700 prose-headings:font-semibold prose-headings:text-gray-800 prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3">
                        <p>
                            At LearnVera, our goal is to deliver maximum value
                            through carefully designed, expert-led courses. Each
                            program undergoes extensive quality review to ensure
                            practical, industry-ready learning.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Course Access and Delivery
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                Upon successful enrollment and payment
                                confirmation, you receive access to the
                                purchased course.
                            </li>
                            <li>
                                <strong>Online courses:</strong> Access is
                                provided immediately through your LearnVera
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

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Course Experience
                        </h2>
                        <p>
                            We encourage learners to review course details,
                            preview modules, curriculum highlights, and class
                            schedules before purchasing. Every course is
                            designed to provide clarity on what you’ll learn and
                            achieve.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Cancellations & Modifications
                        </h2>
                        <p>
                            Once enrollment is completed, cancellation or
                            transfer of access is not available, as course
                            access, live session participation, and offline
                            class registration begin immediately upon purchase.
                        </p>
                        <p>
                            Important: All course purchases—including online
                            courses, live sessions, and offline classes—are
                            final. No refunds will be provided under any
                            circumstances.
                        </p>
                        <p>
                            In case of duplicate transactions or technical
                            payment errors, our team will promptly review and
                            resolve them.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Exceptional Circumstances
                        </h2>
                        <p>
                            In rare cases of verified technical errors,
                            non-delivery, or scheduling issues due to system
                            faults or unforeseen events, course access or class
                            participation may be reissued, rescheduled, or
                            adjusted after investigation. All resolutions are
                            handled at the discretion of LearnVera’s support and
                            management team.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-4">
                            Contact Us
                        </h2>
                        <p>
                            For any concerns or issues, please contact{" "}
                            <a
                                href="mailto:learnveraindia@gmail.com"
                                className="transition-colors hover:text-indigo-800 font-medium"
                            >
                                learnveraindia@gmail.com
                            </a>{" "}
                            with your transaction details for prompt assistance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
