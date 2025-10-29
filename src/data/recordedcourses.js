import { Code, Palette, Megaphone, Briefcase, Clock } from "lucide-react";


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
                thumbnail:
                    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "Hands-on experience running real campaigns, mastering ad creatives, and understanding audience psychology.",
                ],
            },
            {
                id: "m2",
                title: "SEO & Content Marketing",
                description:
                    "Go beyond keywords — learn how to make Google prioritise your content. This advanced SEO course is designed by top-ranked professional from LearnVera, helping you deep dive search rankings and build online authority.",
                thumbnail:
                    "https://images.unsplash.com/photo-1554306297-0c86e837format&fit=crop&ixlib-rb-4.0.3&ixd=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "Complete knowledge of SEO tools, content strategy, backlink building, and analytics to rank and grow any brand organically.",
                ],
            },
            {
                id: "m3",
                title: "Email Marketing Mastery",
                description:
                    "Turn your emails into sales machines! Master automation, segmentation, and convincing copywriting with certified mentor who has scaled real businesses through email funnels.",
                thumbnail:
                    "https://images.unsplash.com/photo-1589762107412-a033c51b2c4c?q=80&w=2834&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "The skill to design, automate, and optimize email campaigns that convert audiences into loyal customers — all using tools professionals rely on.",
                ],
            },
            {
                id: "m4",
                title: "Analytics & Reporting",
                description:
                    "Data is power — and this course makes you play with it. Learn GA4, GTM, and many such tools from the industry expert at LearnVera who has helped brands make data-backed decisions that scale revenue.",
                thumbnail:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                thumbnail:
                    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2874&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "Hands-on experience creating dynamic web apps from scratch, ready to impress employers or clients.",
                ],
            },
            {
                id: "t2",
                title: "Python for Data Science",
                description:
                    "Learn the world’s most in-demand programming language from data experts at LearnVera. This course simplifies Python, Pandas, Matplotlib, and Scikit-learn — guiding you from basics to real analytics projects.",
                thumbnail:
                    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "The skill to collect, visualize, and interpret data like a professional analyst — opening doors to data-driven careers.",
                ],
            },
            {
                id: "t3",
                title: "AWS Cloud Foundations",
                description:
                    "Get cloud-ready with the perfect beginner course for AWS aspirants. Learn directly from LearnVera’s certified mentors who’ve trained hundreds for top cloud roles.",
                thumbnail:
                    "https://images.unsplash.com/photo-1590903202131-f03f36193717?q=80&w=2874&auto=format=fit&crop=ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                thumbnail:
                    "https://images.unsplash.com/photo-1611140339018-97c4866c15c1?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "Hands-on skills to craft stunning, user-friendly interfaces and a portfolio-ready prototype.",
                ],
            },
            {
                id: "c2",
                title: "Adobe Photoshop Masterclass",
                description:
                    "Turn your creativity into skill with this complete Photoshop training. Learn from creative professionals at LearnVera who teach real techniques for photo manipulation, compositing, and branding graphics.",
                thumbnail:
                    "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                thumbnail:
                    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "The confidence and roadmap to launch your own startup — from vision to execution.",
                ],
            },
            {
                id: "b2",
                title: "Financial Accounting 101",
                description:
                    "Build a strong foundation in business finance with practical accounting insights taught by industry professionals. Learn how to read balance sheets, manage cash flow, and make data-backed financial decisions.",
                thumbnail:
                    "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2832&auto=format=fit&crop=ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                deliverables: [
                    "Essential financial literacy to manage money smarter — for your career, startup, or personal growth.",
                ],
            },
        ],
    },
};
export default allCoursesData;