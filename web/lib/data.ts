export const services = [
    {
        id: "flutter",
        label: "Flutter Apps",
        heading: "Apps that feel right.",
        body: "We build native-feeling applications from end to end, handling everything from architecture to the small interactions that make people actually enjoy using an app.",
        tags: ["Flutter", "Riverpod", "Animations", "APIs"],
    },
    {
        id: "full-stack",
        label: "Full-Stack Web",
        heading: "Systems with structure.",
        body: "Next.js frontends, scalable Node/Express backends, PostgreSQL databases. Clean architecture and code the next developer won't resent.",
        tags: ["Next.js", "Express", "Node.js", "PostgreSQL"],
    },
    {
        id: "data",
        label: "Data & Systems",
        heading: "Pipelines that deliver.",
        body: "Automated dataset generation, search APIs, LLM refinement, and structural migrations.",
        tags: ["LLMs", "Prisma", "Python", "Data Pipelines"],
    },
];

export const caseStudies = [
    {
        id: "dsa-tracker",
        label: "DSA Progress Tracker",
        project: "Multi-Source DSA Platform",
        descriptor: "A full-stack tracking platform with automated dataset generation",
        link: "https://github.com",
        metrics: [
            { value: "400+", description: "problems tracked across multiple platforms" },
            { value: "JSON", description: "structured automated dataset ingestion" },
            { value: "API", description: "custom LLM-based query refinement" },
        ],
        prose: [
            "We built a full stack DSA progress tracking platform using Next.js and PostgreSQL. The goal was to centralize problem tracking across LeetCode, GeeksforGeeks, and Code360.",
            "The heavy lifting was in the automated dataset generation. We aggregated sheets using search APIs, refined the queries with an LLM, and extracted company tags directly from extension network responses.",
            "The result is a responsive platform with infinite scroll, detailed modals, and a deeply optimized relational schema to ensure multi-source progress tracking remains fast.",
        ],
    },
    {
        id: "ecommerce",
        label: "E-Commerce",
        project: "Admin & Customer Workflows",
        descriptor: "Scale-ready e-commerce platform built on Express and React",
        link: "https://github.com",
        metrics: [
            { value: "JWT", description: "role-based access control (RBAC)" },
            { value: "REST", description: "fully documented API services" },
            { value: "SQL", description: "relational integrity enforced" },
        ],
        prose: [
            "We engineered a complete e-commerce platform balancing dedicated Admin Dashboards with smooth Customer-facing workflows.",
            "Security and architecture were the primary focus. We secured access with JWT-based authentication and enforced strict RBAC to prevent sensitive route exposure.",
            "Underneath, the PostgreSQL schema was designed from scratch to ensure referential integrity, supporting everything from cart logic and orders to multi-address user profiles.",
        ],
    },
];

export const aboutData = {
    label: "About Plinth",
    heading: "We build it right.",
    paragraphs: [
        "We are an engineering team focused on building production-ready software. We've built e-commerce platforms, complex data ingestion pipelines, and cross-platform mobile apps.",
        "We care deeply about architecture. We focus on API design, data modeling, and security because those are the foundations that are hardest to fix later. We combine that solid backend with bright, highly-responsive frontend work.",
    ],
    aside: {
        availability: "Taking new projects",
        stack: [
            "Next.js \u00b7 Node.js \u00b7 Express",
            "PostgreSQL \u00b7 Prisma \u00b7 React",
            "Flutter \u00b7 Tailwind \u00b7 LLMs",
        ],
        basedIn: "Ahmedabad, India",
    },
};

export const contactData = {
    label: "Contact",
    heading: "Let's work together.",
    body: "For project inquiries, collaborations, or discussing your platform architecture.",
    links: [
        { label: "hello@plinth.agency", href: "mailto:hello@plinth.agency" },
        { label: "github.com/plinth", href: "https://github.com" },
    ],
    note: "We'll get back to you within 24 hours.",
};

export const heroData = {
    label: "Available for projects",
    headline: ["Software", "built to", "scale."],
    subhead: "Full-stack systems, automated pipelines, and apps engineered by a team that cares about structure.",
    links: [
        { label: "See our work", href: "#work" },
        { label: "Get in touch", href: "#contact" },
    ],
};

export const footerData = {
    left: "Plinth",
    right: "\u00a9 2026 \u00b7 Plinth Agency",
};
