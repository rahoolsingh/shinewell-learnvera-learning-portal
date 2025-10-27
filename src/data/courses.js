const courseData = [
    {
        id: 1,
        theme: "purple",
        badge: "LaunchPad",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Foundation",
        duration: "1 Month",
        enrollmentUrl: "https://example.com/enroll-foundation",
        rating: 5,
        tags: ["Beginner", "Live Cohort", "Hands-on Projects"],
        headline: "Master the Fundamentals of Digital Marketing",
        description:
            "Build a solid base in websites, SEO, ads, and analytics—perfect for beginners and career switchers looking to enter the field.",
        deliverables: [
            "Set up a professional WordPress website from scratch.",
            "Configure Google Analytics (GA4) and Google Search Console.",
            "Publish 2 fully SEO-optimized blog posts and pages.",
            "Draft complete Google & Meta ad campaigns with compelling creatives.",
            "Track key conversion events and build a simple performance report.",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
        instructor: {
            name: "Priya Sharma",
            title: "Senior Marketing Strategist",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        whoIsThisFor: [
            "Absolute beginners with no prior marketing experience.",
            "Small business owners wanting to manage their own online presence.",
            "Students and recent graduates looking for a high-demand skill.",
            "Professionals in other fields considering a career change.",
        ],
        prerequisites: [
            "No prior experience required.",
            "A computer with a stable internet connection.",
            "Basic computer literacy (browsing, file management).",
        ],
        curriculum: [
            {
                module: 1,
                title: "Digital Marketing & Website Setup",
                topics: [
                    "Understanding the Digital Marketing Ecosystem",
                    "Intro to WordPress: Setup & Configuration",
                    "Choosing a Domain, Hosting, and Themes",
                    "Building Your First Pages & Blog Posts",
                ],
            },
            {
                module: 2,
                title: "SEO & Content Marketing",
                topics: [
                    "On-Page, Off-Page, and Technical SEO Basics",
                    "Keyword Research and Competitor Analysis",
                    "Writing High-Quality, SEO-Friendly Content",
                    "Google Search Console: Indexing & Performance",
                ],
            },
            {
                module: 3,
                title: "Paid Advertising (PPC)",
                topics: [
                    "Introduction to Google Ads & Meta Ads",
                    "Creating Your First Ad Campaign (Search & Social)",
                    "Writing Ad Copy & Designing Simple Creatives",
                    "Understanding Bidding & Budgets",
                ],
            },
            {
                module: 4,
                title: "Analytics & Reporting",
                topics: [
                    "Setting up Google Analytics 4 (GA4)",
                    "Understanding Key Metrics (Users, Sessions, Bounce Rate)",
                    "Tracking Goals & Conversion Events",
                    "Building a Basic Monthly Performance Report",
                ],
            },
        ],
        faq: [
            {
                question: "Is this course really for complete beginners?",
                answer: "Yes! We start from the absolute basics. As long as you know how to use a computer and browse the internet, you'll be able to follow along.",
            },
            {
                question: "Will I need to buy any extra software?",
                answer: "You will need to purchase a domain name and hosting for your WordPress site, which typically costs a small amount. We will guide you through budget-friendly options.",
            },
        ],
    },
    {
        id: 2,
        theme: "green",
        badge: "Growth Pro",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Professional",
        duration: "2 Month",
        enrollmentUrl: "https://example.com/enroll-foundation",
        rating: 4,
        tags: ["Intermediate", "Performance Focus", "Real Campaigns"],
        headline: "Launch & Optimize ROI-Driven Ad Campaigns",
        description:
            "Go beyond the basics. Learn to plan, launch, and optimize ROI-focused Meta & Google Ads with data-driven reporting and scaling strategies.",
        deliverables: [
            "Build full-funnel Meta Ads: cold acquisition, retargeting, and lookalike audiences.",
            "Master Google Search, Display & YouTube campaigns with advanced keyword and bidding strategies.",
            "Implement GA4 & GTM for robust conversion tracking.",
            "Create insightful Looker Studio (Data Studio) dashboards.",
            "Understand A/B testing, scaling techniques, and ad policy compliance.",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
        instructor: {
            name: "Rohan Gupta",
            title: "Head of Performance Marketing",
            image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        whoIsThisFor: [
            "Marketers with basic knowledge of Google or Meta Ads.",
            "Freelancers wanting to offer professional PPC services.",
            "E-commerce managers responsible for ad budgets.",
            "Foundation course graduates ready for the next level.",
        ],
        prerequisites: [
            "Completion of the Foundation course or equivalent experience.",
            "Basic understanding of marketing funnels.",
            "Access to an active ad account (or willingness to create one).",
        ],
        curriculum: [
            {
                module: 1,
                title: "Advanced Meta Ads",
                topics: [
                    "Pixel Implementation & Conversion API",
                    "Audience Strategy: Custom, Lookalike, Saved",
                    "Campaign Objectives & Funnel Building",
                    "Dynamic Creatives & A/B Testing",
                ],
            },
            {
                module: 2,
                title: "Advanced Google Ads",
                topics: [
                    "Advanced Keyword Research & Match Types",
                    "Smart Bidding vs. Manual CPC",
                    "Ad Extensions & Quality Score Optimization",
                    "Running YouTube & Display Network Ads",
                ],
            },
            {
                module: 3,
                title: "GTM & Analytics",
                topics: [
                    "Google Tag Manager (GTM) Fundamentals",
                    "Tracking Events, Triggers, and Variables",
                    "Building Custom Reports in GA4",
                    "Connecting GA4 to Looker Studio",
                ],
            },
            {
                module: 4,
                title: "Optimization & Scaling",
                topics: [
                    "Reading Ad Reports & Identifying Trends",
                    "CPA, ROAS, and LTV Calculations",
                    "Strategies for Scaling Winning Campaigns",
                    "Troubleshooting Ad Disapprovals & Policy",
                ],
            },
        ],
        faq: [
            {
                question: "Will we work with real budgets?",
                answer: "You will have the option to run live campaigns with your own budget (even a small one) under our guidance. We also provide simulation projects if you prefer not to spend.",
            },
            {
                question: "How is this different from the Foundation course?",
                answer: "The Foundation course is about *setting up* tools. This Professional course is about *using* those tools to generate a measurable return on investment (ROI).",
            },
        ],
    },
    {
        id: 3,
        theme: "blue",
        badge: "Omni Master",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e2775d2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Mastery",
        duration: "3 Month",
        enrollmentUrl: "https://example.com/enroll-foundation",
        rating: 5,
        tags: ["Advanced", "CRO", "Content Engine"],
        headline: "Build High-Converting Funnels & Content Systems",
        description:
            "Master the full customer lifecycle. Design high-converting funnels, build scalable content engines, and run email/WhatsApp lifecycle campaigns.",
        deliverables: [
            "Design and A/B test landing pages for higher Conversion Rate (CVR).",
            "Develop an AI-assisted content strategy (pillar posts + repurposed assets).",
            "Set up a Shopify store with full analytics and attribution.",
            "Build automated Email & WhatsApp flows for nurture and retention.",
            "Understand advanced Conversion Rate Optimization (CRO) principles.",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
        instructor: {
            name: "Aisha Khan",
            title: "E-commerce & CRO Specialist",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        whoIsThisFor: [
            "Experienced marketers wanting to move into a strategic role.",
            "E-commerce brand managers and entrepreneurs.",
            "PPC specialists who want to understand the full funnel.",
            "Content marketers looking to improve conversion and retention.",
        ],
        prerequisites: [
            "Strong understanding of SEO, Content, and Paid Ads (Professional course or equivalent).",
            "Experience with GA4 and basic analytics.",
            "Familiarity with e-commerce or lead generation concepts.",
        ],
        curriculum: [
            {
                module: 1,
                title: "Funnel Design & CRO",
                topics: [
                    "Mapping the Customer Journey (AIDA, TOFU/MOFU/BOFU)",
                    "Landing Page Psychology & UX Design",
                    "A/B Testing Tools & Methodology (Google Optimize, etc.)",
                    "Heatmaps, Session Recordings, and User Feedback",
                ],
            },
            {
                module: 2,
                title: "E-commerce & Shopify",
                topics: [
                    "Setting up a Shopify Store from Scratch",
                    "Shopify App Ecosystem for Marketing",
                    "E-commerce Analytics & Cohort Analysis",
                    "Multi-Channel Attribution Models",
                ],
            },
            {
                module: 3,
                title: "Content Engine",
                topics: [
                    "Pillar Content & Topic Clusters Strategy",
                    "Using AI Tools for Content Research & Drafting",
                    "Content Repurposing: Video to Blog to Social",
                    "Content Distribution & Promotion Channels",
                ],
            },
            {
                module: 4,
                title: "Lifecycle & Retention",
                topics: [
                    "Email Marketing Platforms (e.g., Mailchimp, Klaviyo)",
                    "Building Automated Nurture Sequences",
                    "WhatsApp Marketing & Automation Tools",
                    "Customer Segmentation & Personalization",
                ],
            },
        ],
        faq: [
            {
                question: "What is 'CRO'?",
                answer: "CRO stands for Conversion Rate Optimization. It's the practice of increasing the percentage of users who perform a desired action (like making a purchase or filling a form) on your website.",
            },
            {
                question: "Do I need to own a Shopify store for this?",
                answer: "It's not required, but highly recommended. We will provide a developer environment, but having your own store to practice on will give you the best experience.",
            },
        ],
    },
    {
        id: 4,
        theme: "orange",
        badge: "Complete",
        image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Specialization",
        duration: "4 Month",
        enrollmentUrl: "https://example.com/enroll-foundation",
        rating: 5,
        tags: ["Expert", "GTM/GA4", "Automation"],
        headline: "Become a Full-Stack Marketer & Agency Lead",
        description:
            "This is the capstone. Master advanced GTM/GA4 tracking, build marketing automations, and learn to package, price, and sell your services like an agency.",
        deliverables: [
            "Implement GTM data layer events for complex tracking.",
            "Build advanced GA4 reports for cross-platform analysis.",
            "Create Zapier/Integromat flows for lead routing and scoring.",
            "Launch a complete digital product (e.g., an ebook) funnel.",
            "Develop pricing, proposals, and SOPs to scale your services.",
        ],
        availability: "ONLINE & OFFLINE BOTH AVAILABLE",
        instructor: {
            name: "Vikram Singh",
            title: "Digital Agency Founder & Automation Expert",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        whoIsThisFor: [
            "Senior marketers aiming for a Head of Marketing role.",
            "Experienced freelancers ready to build an agency.",
            "Technical marketers who love data and automation.",
            "Graduates of the Mastery course ready for the final step.",
        ],
        prerequisites: [
            "Completion of all previous courses (Foundation, Pro, Mastery) or equivalent high-level experience.",
            "Comfortable with data, spreadsheets, and basic logic.",
            "A strong desire to run a business or lead a team.",
        ],
        curriculum: [
            {
                module: 1,
                title: "Advanced GTM & GA4",
                topics: [
                    "The GTM Data Layer: Pushing & Reading Data",
                    "Server-Side Tagging vs. Client-Side",
                    "Advanced GA4 Event Configuration",
                    "BigQuery Integration & Basic SQL for Marketers",
                ],
            },
            {
                module: 2,
                title: "Marketing Automation",
                topics: [
                    "Intro to No-Code Tools (Zapier, Make/Integromat)",
                    "Webhooks & API Basics for Marketers",
                    "Automating Lead Routing from Forms to CRM",
                    "Building Lead Scoring & SLA Systems",
                ],
            },
            {
                module: 3,
                title: "Launching a Digital Product",
                topics: [
                    "Product Idea & Validation",
                    "Creating a Sales Page & Checkout (e.g., Gumroad, Razorpay)",
                    "Building an Affiliate Program",
                    "End-to-End Funnel Tracking & Optimization",
                ],
            },
            {
                module: 4,
                title: "Running the Business",
                topics: [
                    "Packaging & Pricing Your Services (Retainer, Project)",
                    "Writing Winning Proposals & Contracts",
                    "Client Onboarding & Management",
                    "Creating Standard Operating Procedures (SOPs) to Scale",
                ],
            },
        ],
        faq: [
            {
                question: "Is this course very technical?",
                answer: "It is the most technical of all four courses. While we don't write complex code, we do work with data layers, basic logic (if/then), and API connectors. A technical mindset is a big plus.",
            },
            {
                question: "What do you mean by 'Full-Stack Marketer'?",
                answer: "A full-stack marketer is someone who understands the entire marketing process, from the creative and strategic side (content, ads) to the technical and data side (analytics, automation, CRO). This course focuses on bridging that gap.",
            },
        ],
    },
];

export default courseData;
