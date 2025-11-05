import mentorImage from "../assets/images/asset-2.jpeg";

const courseData = [
    {
        id: 1,
        theme: "purple",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: "45-60 Days",
        enrollmentUrl: "https://example.com/enroll-foundation",
        headline: "Digital Marketing Foundation",
        subheadline: "(The Perfect Start for Beginners & Career Switchers)",
        description:
            "Learn from an industry-leading mentor with 9+ yrs of experience, who has helped 200+ brands scale online and trained over 1,000 learners in performance-driven marketing.",
        deliverables: [
            "Gain a complete understanding of the digital marketing ecosystem — SEO, Social Media, Paid Ads, Email & Content.",
            "Learn to build and execute real-world marketing strategies for startups, brands & personal projects.",
            "Master marketing funnels — from awareness to conversion using proven frameworks.",
            "Understand analytics, KPIs & ROI-driven decision making to measure true marketing success.",
            "Learn how to build your personal brand and grow visibility online with practical strategies.",
            "Includes: Live projects, templates & strategy workbook to apply every concept hands-on.",
        ],
        outcomes: [
            "Gain the skills and mindset to think like a strategist, not just a marketer and get the confidence and clarity to plan, execute, and analyze campaigns like an expert.",
        ],
        instructor: {
            name: "Deepesh Raj",
            title: "Founder of Shinewell Digital Solutions, Associate Professor (PhD in Cybersecurity) & Digital Marketing Expert",
            image: mentorImage,
        },
    },
    {
        id: 2,
        theme: "blue",
        image: "https://bernardmarr.com/wp-content/uploads/2022/02/What-Is-Social-Media-2.0-Simple-Explanation-And-Examples.jpg",
        enrollmentUrl: "https://example.com/enroll-performance-pro",
        headline: "Performance Marketing Pro",
        subheadline: "(Meta & Google Ads Deep Dive)",
        description:
            "Get trained from a results-driven performance marketer who has managed multi-crore ad budgets across industries. Get insider techniques, frameworks, and AI-backed strategies to learn paid marketing with confidence.",
        deliverables: [
            "Learn to set up and manage Meta (Facebook, Instagram & WhatsApp) campaigns that consistently deliver ROI.",
            "Master Google Ads across Search, Display, Video & Shopping with real-world application.",
            "Build high-converting funnels and retargeting systems that drive consistent sales.",
            "Understand audience segmentation, budgeting, and A/B testing to optimize campaign performance.",
            "Learn conversion tracking, pixel setup, and analytics to make data-driven decisions.",
            "Includes ₹10 Lakh+ campaign case studies and ad optimization templates from real client projects.",
        ],
        outcomes: [
            "Launch, manage, and scale profitable ad campaigns confidently — and become a certified performance marketer ready for high-paying roles or freelance projects.",
        ],
        instructor: {
            name: "Deepesh Raj",
            title: "Founder of Shinewell Digital Solutions, Associate Professor (PhD in Cybersecurity) & Digital Marketing Expert",
            image: mentorImage,
        },
        badge: {
            label: "Trending",
            icon: "upchart", // options: upchart, flame, sparkles
            color: "pink", // options: pink, blue, orange, green, purple
        },
    },
    {
        id: 3,
        theme: "green",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        enrollmentUrl: "https://example.com/enroll-social-media",
        headline: "Social Media, Content & Influencer Growth Mastery",
        subheadline: "(Dominate Organic Marketing & Personal Branding)",
        description:
            "Designed and led by a seasoned content strategist and social media growth expert who has helped creators, brands, and educators reach millions organically. With deep expertise in audience psychology, storytelling, and platform algorithms, this course blends creativity with data to help you build an impactful digital presence.",
        deliverables: [
            "Learn to grow Instagram, LinkedIn, YouTube & Threads organically through strategic content planning.",
            "Master content creation frameworks to boost engagement, consistency, and visibility.",
            "Build a complete social media calendar and content strategy tailored to your goals.",
            "Learn to leverage influencer marketing for impactful brand collaborations and partnerships.",
            "Discover AI tools for faster content creation, scheduling, and analytics.",
            "Includes real-time page audits, growth templates & performance playbooks for practical execution.",
        ],
        outcomes: [
            "Build your personal brand, grow your audience organically, and establish a lasting digital influence — all without wasting your ad budget.",
        ],
        instructor: {
            name: "Deepesh Raj",
            title: "Founder of Shinewell Digital Solutions, Associate Professor (PhD in Cybersecurity) & Digital Marketing Expert",
            image: mentorImage,
        },
    },
    {
        id: 4,
        theme: "orange",
        image: "https://www.searchenginejournal.com/wp-content/uploads/2022/08/social-media-tools-630f2f608b225-sej.png",
        enrollmentUrl: "https://example.com/enroll-automation-freelance",
        headline:
            "Marketing Automation, AI Tools & Freelancing Success Blueprint",
        subheadline: "(Scale Faster, Work Smarter, Earn More)",
        description:
            "Learn from the one who streamlined business operations, scaled campaigns, and empowered thousands of freelancers to earn. This program empowers you to automate workflows, manage clients efficiently, and build a profitable digital career using AI smartly.",
        deliverables: [
            "Master automation tools like Zapier, Notion, HubSpot & Meta automation to save time and scale operations.",
            "Discover AI-powered tools for copywriting, design, analytics & ad optimization that enhance productivity.",
            "Build your portfolio, pricing, and proposal system to attract and close freelance clients confidently.",
            "Learn client acquisition strategies to get your first 5 paying clients using proven outreach techniques.",
            "Understand agency setup, team management & scaling models derived from real-world case studies.",
            "Includes freelance toolkit, templates & AI workflows for plug-and-play implementation.",
        ],
        outcomes: [
            "Turn your digital skills into consistent income — freelance, consult, or launch your own agency with clarity and confidence.",
        ],
        instructor: {
            name: "Deepesh Raj",
            title: "Founder of Shinewell Digital Solutions, Associate Professor (PhD in Cybersecurity) & Digital Marketing Expert",
            image: mentorImage,
        },
    },
];

// const a = [
//     {
//         id: 5,
//         theme: "purple",
//         badge: "LaunchPad",
//         image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         category: "Foundation",
//         duration: "1 Month",
//         enrollmentUrl: "https://example.com/enroll-foundation",
//         rating: 5,
//         tags: ["Beginner", "Live Cohort", "Hands-on Projects"],
//         headline: "TESTING FOR COURSE DETAILS PAGE",
//         description:
//             "Build a solid base in websites, SEO, ads, and analytics—perfect for beginners and career switchers looking to enter the field.",
//         deliverables: [
//             "Set up a professional WordPress website from scratch.",
//             "Configure Google Analytics (GA4) and Google Search Console.",
//             "Publish 2 fully SEO-optimized blog posts and pages.",
//             "Draft complete Google & Meta ad campaigns with compelling creatives.",
//             "Track key conversion events and build a simple performance report.",
//         ],
//         availability: "ONLINE & OFFLINE BOTH AVAILABLE",
//         instructor: {
//             name: "Priya Sharma",
//             title: "Senior Marketing Strategist",
//             image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         whoIsThisFor: [
//             "Absolute beginners with no prior marketing experience.",
//             "Small business owners wanting to manage their own online presence.",
//             "Students and recent graduates looking for a high-demand skill.",
//             "Professionals in other fields considering a career change.",
//         ],
//         prerequisites: [
//             "No prior experience required.",
//             "A computer with a stable internet connection.",
//             "Basic computer literacy (browsing, file management).",
//         ],
//         curriculum: [
//             {
//                 module: 1,
//                 title: "Digital Marketing & Website Setup",
//                 topics: [
//                     "Understanding the Digital Marketing Ecosystem",
//                     "Intro to WordPress: Setup & Configuration",
//                     "Choosing a Domain, Hosting, and Themes",
//                     "Building Your First Pages & Blog Posts",
//                 ],
//             },
//             {
//                 module: 2,
//                 title: "SEO & Content Marketing",
//                 topics: [
//                     "On-Page, Off-Page, and Technical SEO Basics",
//                     "Keyword Research and Competitor Analysis",
//                     "Writing High-Quality, SEO-Friendly Content",
//                     "Google Search Console: Indexing & Performance",
//                 ],
//             },
//             {
//                 module: 3,
//                 title: "Paid Advertising (PPC)",
//                 topics: [
//                     "Introduction to Google Ads & Meta Ads",
//                     "Creating Your First Ad Campaign (Search & Social)",
//                     "Writing Ad Copy & Designing Simple Creatives",
//                     "Understanding Bidding & Budgets",
//                 ],
//             },
//             {
//                 module: 4,
//                 title: "Analytics & Reporting",
//                 topics: [
//                     "Setting up Google Analytics 4 (GA4)",
//                     "Understanding Key Metrics (Users, Sessions, Bounce Rate)",
//                     "Tracking Goals & Conversion Events",
//                     "Building a Basic Monthly Performance Report",
//                 ],
//             },
//         ],
//         faq: [
//             {
//                 question: "Is this course really for complete beginners?",
//                 answer: "Yes! We start from the absolute basics. As long as you know how to use a computer and browse the internet, you'll be able to follow along.",
//             },
//             {
//                 question: "Will I need to buy any extra software?",
//                 answer: "You will need to purchase a domain name and hosting for your WordPress site, which typically costs a small amount. We will guide you through budget-friendly options.",
//             },
//         ],
//     },
// ];

export default courseData;
