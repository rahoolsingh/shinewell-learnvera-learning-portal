import { Code, Palette, Megaphone, Briefcase, Clock } from "lucide-react";

import socialMediaMarketingThumbnail from "../assets/images/social-media-marketing.png";
import seoContentMarketingThumbnail from "../assets/images/SEO-Course-Design.png";
import emailMarketingThumbnail from "../assets/images/AI-Email.png";
import analyticsReportingThumbnail from "../assets/images/Analytics-Design.png";

import fullStackWebDevThumbnail from "../assets/images/Web-Development-Elements.png";
import pythonDataScienceThumbnail from "../assets/images/Python-Course-Design.png";
import awsCloudFoundationsThumbnail from "../assets/images/3D-Cloud-Design.png";

import uiuxDesignThumbnail from "../assets/images/UI-Element.png";
import photoshopMasterclassThumbnail from "../assets/images/Creative-3D-Design.png";

import startupEntrepreneurshipThumbnail from "../assets/images/startup.png";
import financialAccountingThumbnail from "../assets/images/Financial.png";

const allCoursesData = {
    Marketing: {
        theme: "blue",
        icon: Megaphone,
        courses: [
            {
                id: "m1",
                title: "Social Media Marketing",
                description:
                    "Learn how to build a powerful brand and run profitable ad campaigns on Socials with step-by-step strategies proven to deliver results. Taught by Google & Meta Certified Business Partner, this course helps you master content strategy, ad targeting, and analytics — everything you need to grow any business online.",
                thumbnail: socialMediaMarketingThumbnail,
                deliverables: [
                    "Hands-on experience running real campaigns, mastering ad creatives, and understanding audience psychology.",
                ],
            },
            {
                id: "m2",
                title: "SEO & Content Marketing",
                description:
                    "Go beyond keywords — learn how to make Google prioritise your content. This advanced SEO course is designed by top-ranked professional from LearnVera, helping you deep dive search rankings and build online authority.",
                thumbnail: seoContentMarketingThumbnail,
                deliverables: [
                    "Complete knowledge of SEO tools, content strategy, backlink building, and analytics to rank and grow any brand organically.",
                ],
            },
            {
                id: "m3",
                title: "Email Marketing Mastery",
                description:
                    "Turn your emails into sales machines! Master automation, segmentation, and convincing copywriting with certified mentor who has scaled real businesses through email funnels.",
                thumbnail: emailMarketingThumbnail,
                deliverables: [
                    "The skill to design, automate, and optimize email campaigns that convert audiences into loyal customers — all using tools professionals rely on.",
                ],
            },
            {
                id: "m4",
                title: "Analytics & Reporting",
                description:
                    "Data is power — and this course makes you play with it. Learn GA4, GTM, and many such tools from the industry expert at LearnVera who has helped brands make data-backed decisions that scale revenue.",
                thumbnail: analyticsReportingThumbnail,
                deliverables: [
                    "The ability to track, analyze, and present marketing performance like a professional- skills that every agency and business demands today.",
                ],
            },
        ],
    },
    "Tech & IT": {
        theme: "green",
        icon: Code,
        courses: [
            {
                id: "t1",
                title: "Full Stack Web Development",
                description:
                    "Master real-world development with the MERN stack (MongoDB, Express, React, Node.js) — designed by top industry professionals at LearnVera. From building frontends to deploying scalable backends, you’ll gain job-ready coding skills to launch your tech career or freelance confidently.",
                thumbnail: fullStackWebDevThumbnail,
                deliverables: [
                    "Hands-on experience creating dynamic web apps from scratch, ready to impress employers or clients.",
                ],
            },
            {
                id: "t2",
                title: "Python for Data Science",
                description:
                    "Learn the world’s most in-demand programming language from data experts at LearnVera. This course simplifies Python, Pandas, Matplotlib, and Scikit-learn — guiding you from basics to real analytics projects.",
                thumbnail: pythonDataScienceThumbnail,
                deliverables: [
                    "The skill to collect, visualize, and interpret data like a professional analyst — opening doors to data-driven careers.",
                ],
            },
            {
                id: "t3",
                title: "AWS Cloud Foundations",
                description:
                    "Get cloud-ready with the perfect beginner course for AWS aspirants. Learn directly from LearnVera’s certified mentors who’ve trained hundreds for top cloud roles.",
                thumbnail: awsCloudFoundationsThumbnail,
                deliverables: [
                    "A solid foundation in AWS concepts, hands-on understanding of cloud architecture, and the confidence to work on real projects.",
                ],
            },
        ],
    },
    Creative: {
        theme: "purple",
        icon: Palette,
        courses: [
            {
                id: "c1",
                title: "UI/UX Design Process",
                description:
                    "Design user experiences that stand out — from user research to high-fidelity prototypes in Figma. Guided by expert designers, you’ll master design thinking, usability principles, and workflows used by real startups.",
                thumbnail: uiuxDesignThumbnail,
                deliverables: [
                    "Hands-on skills to craft stunning, user-friendly interfaces and a portfolio-ready prototype.",
                ],
            },
            {
                id: "c2",
                title: "Adobe Photoshop Masterclass",
                description:
                    "Turn your creativity into skill with this complete Photoshop training. Learn from creative professionals at LearnVera who teach real techniques for photo manipulation, compositing, and branding graphics.",
                thumbnail: photoshopMasterclassThumbnail,
                deliverables: [
                    "Confidence to design, retouch, and create visual assets that catch attention — perfect for freelancers, marketers, and design beginners.",
                ],
            },
        ],
    },
    Business: {
        theme: "orange",
        icon: Briefcase,
        courses: [
            {
                id: "b1",
                title: "Startup & Entrepreneurship",
                description:
                    "Turn your business ideas into scalable ventures with real-world startup frameworks and strategies. Guided by experienced founders and mentors, you’ll learn how to validate ideas, build products, pitch investors, and grow sustainably.",
                thumbnail: startupEntrepreneurshipThumbnail,
                deliverables: [
                    "The confidence and roadmap to launch your own startup — from vision to execution.",
                ],
            },
            {
                id: "b2",
                title: "Financial Accounting 101",
                description:
                    "Build a strong foundation in business finance with practical accounting insights taught by industry professionals. Learn how to read balance sheets, manage cash flow, and make data-backed financial decisions.",
                thumbnail: financialAccountingThumbnail,
                deliverables: [
                    "Essential financial literacy to manage money smarter — for your career, startup, or personal growth.",
                ],
            },
        ],
    },
};
export default allCoursesData;
