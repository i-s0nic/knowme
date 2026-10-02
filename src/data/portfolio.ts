export interface Detail {
  title: string;
  description: string;
}

export interface Role {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  team: string;
  current?: boolean;
  kind: "Engineering" | "Mentorship";
  summary: string;
  details: Detail[];
  technologies: string[];
}

export interface Story {
  id: string;
  company: string;
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  contributions: string[];
  outcome: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  category: "Personal" | "Professional";
  period?: string;
  description: string;
  details: string[];
  technologies: string[];
  link?: { href: string; label: string };
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  grade: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const profile: {
  name: string;
  role: string;
  company: string;
  location: string;
  email: string;
  linkedin: string;
  github?: string;
  siteUrl: string;
  intro: string;
  about: string[];
} = {
  name: "Saurabh Upadhayay",
  role: "Software Engineer",
  company: "Microsoft",
  location: "Noida, India",
  email: "usaurabh207@gmail.com",
  linkedin: "https://www.linkedin.com/in/is0nic/",
  github: "https://github.com/i-s0nic",
  siteUrl: "https://i-s0nic.github.io/knowme/",
  intro: "I'm a software engineer at Microsoft working on Windows onboarding, with a background in distributed testing and financial products.",
  about: [
    "At Microsoft, I connect onboarding features to OS services and update existing flows. Part of that work is making components easier to test and debug.",
    "Before Microsoft, I worked on distributed tests, virtual machines, and scheduling at TestMu AI. My work at Fi covered workflows, real-time updates, and data pipelines.",
    "I've also taught data structures, algorithms, and competitive programming at Masai and Fractal, working with students in classes, code reviews, and individual sessions.",
  ],
};

export const roles: Role[] = [
  {
    id: "microsoft",
    company: "Microsoft",
    role: "Software Engineer",
    period: "Apr 2026 - Present",
    location: "Noida, India",
    team: "Windows Onboarding",
    current: true,
    kind: "Engineering",
    summary: "I build Windows onboarding features and integrate them with operating-system services.",
    details: [
      { title: "Onboarding flows", description: "Developing features end to end and updating legacy flows while preserving functionality, accessibility, and recovery behavior." },
      { title: "Platform integration", description: "Developing Windows API contracts and C# and C++/WinRT integrations compatible with existing consumers." },
      { title: "Operational reliability", description: "I use pipeline health, telemetry, and customer feedback to assess impact and fix root causes across component boundaries." },
      { title: "Architecture and testability", description: "Defined component architecture and unit-testing standards, replacing tightly coupled dependencies with testable interfaces." },
      { title: "Developer workflows", description: "Building debugging tools and reproducible VM-based workflows with automated tests, end-to-end validation, and accessibility checks." },
    ],
    technologies: ["C#", "C++", "C++/WinRT", "Windows APIs", "Unit testing", "VM-based validation"],
  },
  {
    id: "testmu",
    company: "TestMu AI (formerly LambdaTest)",
    role: "Member of Technical Staff",
    period: "Aug 2024 - Apr 2026",
    location: "Bengaluru, India",
    team: "HyperExecute",
    kind: "Engineering",
    summary: "Built distributed test execution and virtualization systems for HyperExecute.",
    details: [
      { title: "Parallel Playwright execution", description: "Made multi-worker Playwright runs configurable within a single VM." },
      { title: "Regional and on-premises deployment", description: "Built and scaled deployments in GDPR-compliant regions and on-premises environments, using region-aware APIs, tenant-isolated storage, and automated agent delivery." },
      { title: "Android emulator infrastructure", description: "Built an elastically scaling platform to run web tests on Android emulators without physical devices." },
      { title: "macOS virtualization", description: "Developed core virtualization systems and unified orchestration with configuration-driven routing and queue backends." },
      { title: "Storage lifecycle management", description: "Built cross-cloud storage systems with tiering and cleanup based on retention requirements." },
      { title: "Shared scheduling", description: "Designed a white-label scheduling engine for HyperExecute, Kane AI, and Accessibility products." },
      { title: "Distributed reporting", description: "Consolidated parallel worker outputs into unified reports using cloud storage." },
      { title: "OS and browser updates", description: "Built an OS and browser update framework to expand test coverage." },
    ],
    technologies: ["Go", "Playwright", "Distributed systems", "Kubernetes", "Virtualization", "Cloud storage", "Test orchestration"],
  },
  {
    id: "fi-engineer",
    company: "Fi",
    role: "Software Engineer",
    period: "Jul 2023 - Aug 2024",
    location: "Bengaluru, India",
    team: "Cards",
    kind: "Engineering",
    summary: "Developed credit card onboarding and backend systems for financial products.",
    details: [
      { title: "Credit card onboarding", description: "Designed templated Temporal workflows and A/B experiments for onboarding." },
      { title: "Real-time updates", description: "Integrated Server-Sent Events for stock prices, option trades, and order statuses." },
      { title: "Communication orchestration", description: "Built a communication orchestrator handling trigger types and timings, scheduling, and runtime task management for critical messages." },
      { title: "Server-driven UI", description: "Built a framework to deliver UI content, layouts, text, and images from the backend." },
      { title: "Caching and database load", description: "Added Redis caching for high-throughput data access and RPCs." },
      { title: "Transaction data pipeline", description: "Integrated Amazon Kinesis to write transaction events directly to Amazon S3 for Snowflake analysis, bypassing traditional databases." },
    ],
    technologies: ["Go", "Temporal", "Server-Sent Events", "gRPC", "Redis", "Amazon Kinesis", "Amazon S3", "Snowflake"],
  },
  {
    id: "fi-intern",
    company: "Fi",
    role: "SDE Intern",
    period: "Nov 2022 - Jul 2023",
    location: "Bengaluru, India",
    team: "Wealth",
    kind: "Engineering",
    summary: "Contributed to deposits, US stocks, and mutual funds on Fi's Wealth team.",
    details: [
      { title: "Wealth product development", description: "Worked on features for deposits, US stocks, and mutual funds." },
      { title: "Tax statement generation", description: "Built in-app report generation and email delivery for Tax Saver mutual fund statements." },
    ],
    technologies: ["Go", "SQL", "Protocol Buffers", "gRPC", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "ridecell",
    company: "Ridecell",
    role: "SDE Intern",
    period: "May 2022 - Aug 2022",
    location: "Pune, India",
    team: "Fleet Automation",
    kind: "Engineering",
    summary: "Developed event-driven notifications and vehicle lifecycle features for fleet owners.",
    details: [
      { title: "Fleet communication", description: "Built notifications for speeding events, subscription expiry, battery and engine maintenance, and service readiness." },
      { title: "Vehicle lifecycle", description: "Added vehicle-status and overdue-service alerts for fleet maintenance and operations." },
      { title: "Unit testing", description: "Added unit tests for fleet automation features." },
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Apache Kafka", "Unit testing"],
  },
  {
    id: "masai",
    company: "Masai",
    role: "DSA Mentor",
    period: "Oct 2022 - Aug 2023",
    location: "Bengaluru, India",
    team: "Mentors",
    kind: "Mentorship",
    summary: "I taught data structures and algorithms through classes, individual lessons, and code reviews.",
    details: [
      { title: "Teaching and problem solving", description: "Taught competitive programming in Java, JavaScript, and Python, including dynamic programming and graph algorithms." },
      { title: "Individual guidance", description: "Helped students with daily exercises, contests, and homework, reviewing solutions for efficiency and clarity." },
    ],
    technologies: ["Java", "JavaScript", "Python", "Data structures", "Dynamic programming", "Graph algorithms"],
  },
  {
    id: "fractal",
    company: "Fractal: The Coding Club, IET Lucknow",
    role: "Mentor",
    period: "Sep 2020 - Jun 2023",
    location: "Lucknow, India",
    team: "Fractal Mentors 2020",
    kind: "Mentorship",
    summary: "Ran competitive programming workshops and coding challenges, with support for beginners.",
    details: [
      { title: "Community and instruction", description: "Taught data structures and algorithms through workshops, coding challenges, interactive C++ sessions, and personal coaching." },
      { title: "Beginner support", description: "Helped students with problem-solving and competitions, and worked with club members on assignments and learning activities." },
    ],
    technologies: ["C++", "Data structures", "Algorithms", "Competitive programming", "Problem setting"],
  },
];

export const stories: Story[] = [
  {
    id: "windows",
    company: "Microsoft",
    eyebrow: "Windows onboarding",
    title: "Windows onboarding",
    description: "I develop features, update legacy flows, and make components testable.",
    context: "New and legacy onboarding flows must work with existing OS services and API consumers.",
    contributions: [
      "Developing Windows API contracts and connecting application features to the OS through C# and C++/WinRT.",
      "Flow updates preserve accessibility, recovery behavior, and compatibility.",
      "Defined component and unit-testing standards and introduced testable interfaces. I also build debugging tools and reproducible VM workflows.",
    ],
    outcome: "Ongoing work, guided by telemetry, customer feedback, and end-to-end checks.",
    technologies: ["C#", "C++/WinRT", "Windows APIs", "Unit testing", "Accessibility"],
  },
  {
    id: "hyperexecute",
    company: "TestMu AI (formerly LambdaTest)",
    eyebrow: "Distributed test execution",
    title: "Distributed testing on HyperExecute",
    description: "Built multi-worker execution, shared scheduling, and distributed reporting.",
    context: "My work covered workers inside a VM and the orchestration around each test run.",
    contributions: [
      "Made Playwright multi-worker execution configurable within a single VM.",
      "The scheduling engine supported HyperExecute, Kane AI, and Accessibility products.",
      "Built report aggregation using cloud storage.",
    ],
    outcome: "Parallel runs produced a unified report from individual worker outputs.",
    technologies: ["Go", "Playwright", "Distributed systems", "Virtualization", "Cloud storage"],
  },
  {
    id: "fi",
    company: "Fi",
    eyebrow: "Financial product systems",
    title: "Financial workflows at Fi",
    description: "Built credit card workflows and backend-driven product features.",
    context: "The work covered onboarding experiments, financial updates, and UI delivery.",
    contributions: [
      "Designed templated Temporal workflows and supported A/B experimentation.",
      "Integrated Server-Sent Events for live stock prices, option trades, and order statuses.",
      "Built a server-driven UI framework to deliver content, layouts, text, and images.",
    ],
    outcome: "Financial updates streamed through SSE, with UI content managed from the backend.",
    technologies: ["Go", "Temporal", "Server-Sent Events", "gRPC", "Server-driven UI"],
  },
];

export const projects: Project[] = [
  {
    id: "tax-statement-generator",
    title: "Tax Statement Generator",
    category: "Professional",
    description: "Tax statements for Tax Saver mutual fund investments in the Fi app.",
    details: [
      "I built this during my internship on Fi's Wealth team.",
      "An in-app report action generates and emails the statement without a manual request.",
    ],
    technologies: ["Go", "SQL", "Protocol Buffers", "gRPC", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "combett",
    title: "Combett",
    category: "Personal",
    period: "Apr 2022 - May 2022",
    description: "A full-stack community platform for coding, development, and placement preparation.",
    details: [
      "Built a React client and Node.js REST APIs for sharing software engineering resources and connecting with others.",
      "Account creation and authentication use Google OAuth; community data lives in MongoDB Atlas.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "Google OAuth", "Git"],
  },
  {
    id: "get-weather",
    title: "Get-Weather",
    category: "Personal",
    period: "Jan 2022",
    description: "Current weather by city, retrieved from a public API.",
    details: [
      "Built a responsive interface with Node.js, Express, Handlebars templates, and Bootstrap 5.",
      "Client-side JavaScript and server-side requests retrieve and display weather data.",
    ],
    technologies: ["Node.js", "Express.js", "JavaScript", "Handlebars", "Bootstrap 5", "HTML", "JSON", "Weather API", "Heroku", "npm", "Git"],
  },
  {
    id: "student-info-system",
    title: "Student Info System",
    category: "Personal",
    period: "Nov 2021 - Dec 2021",
    description: "A Java application for student records, with role-specific views.",
    details: [
      "Built the desktop interface in Swing using object-oriented design.",
      "The app supports account creation and authentication, with persistent storage in MySQL.",
    ],
    technologies: ["Java", "Swing", "MySQL", "Object-oriented programming", "NetBeans", "XAMPP", "Git"],
  },
  {
    id: "code-it-out",
    title: "Code It Out",
    category: "Personal",
    period: "Apr 2020 - Sep 2020",
    description: "My collection of C++ data structure and algorithm solutions.",
    details: [
      "Solutions from multiple coding platforms link directly to their problem statements.",
      "Built the single-page resource with HTML and CSS and published it on GitHub Pages.",
    ],
    technologies: ["C++", "Data structures", "Algorithms", "HTML", "CSS", "Git", "GitHub Pages"],
    link: { href: "https://i-s0nic.github.io/Code_It_Out/", label: "Explore Code It Out" },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Windows and systems",
    description: "Connecting applications to OS services and debugging across component boundaries.",
    items: ["C#", "C++", "C++/WinRT", "Windows development", "Operating systems", "API development", "Debugging"],
  },
  {
    title: "Backend and workflows",
    description: "Building services, durable workflows, and real-time communication.",
    items: ["Go", "Microservices", "Temporal", "gRPC", "Protocol Buffers", "Server-Sent Events", "Python", "Django"],
  },
  {
    title: "Platforms and infrastructure",
    description: "Distributed execution, virtualization, and repeatable delivery.",
    items: ["Distributed systems", "Platform engineering", "Kubernetes", "Virtualization", "Test orchestration", "Cloud infrastructure", "Linux", "CI/CD"],
  },
  {
    title: "Data and event systems",
    description: "Building event pipelines and managing caching, persistence, and storage lifecycles.",
    items: ["Redis", "PostgreSQL", "MySQL", "CockroachDB", "Apache Kafka", "Amazon Kinesis", "Amazon S3", "Snowflake", "Elasticsearch"],
  },
  {
    title: "Application development",
    description: "Web and desktop application development.",
    items: ["JavaScript", "React", "Node.js", "Express.js", "REST APIs", "HTML", "CSS", "Java", "Swing"],
  },
  {
    title: "Engineering practice",
    description: "Designing testable software and mentoring other programmers.",
    items: ["Software design", "Unit testing", "Test-driven development", "Data structures", "Algorithms", "Code review", "Technical documentation", "Mentorship"],
  },
];

export const awards: Award[] = [
  {
    title: "FY26 Q4 Engineering Excellence Award",
    issuer: "Microsoft",
    date: "Aug 2026",
    description: "Recognized for engineering excellence at Microsoft.",
  },
  {
    title: "Spot Award",
    issuer: "Fi Money (Epifi Technologies)",
    date: "Jan 2024",
    description: "Recognized for exceptional performance within a short period at Fi.",
  },
];

export const education: EducationEntry[] = [
  { school: "Institute of Engineering and Technology, Lucknow", degree: "Bachelor of Technology, Information Technology", period: "2019 - 2023", grade: "A1 (9 CGPA)" },
  { school: "Gyan Deep Senior Secondary Public School", degree: "Intermediate, Physics, Chemistry and Mathematics", period: "Apr 2017 - Apr 2018", grade: "A1 (95%)" },
  { school: "Gyan Deep Senior Secondary Public School", degree: "High School", period: "Apr 2015 - Apr 2016", grade: "A1 (10 CGPA)" },
];

export const certifications: Certification[] = [
  { title: "Certificate of Achievement (Ranked #41)", issuer: "Scaler", date: "Feb 2022" },
  { title: "Competitive Programmer's Core Skills", issuer: "Coursera", date: "Apr 2021" },
  { title: "Algorithms on Graph", issuer: "Coursera", date: "Dec 2020" },
  { title: "Patent Law for Engineers and Scientists", issuer: "NPTEL", date: "Nov 2020" },
  { title: "Developing Soft Skills and Personality", issuer: "NPTEL", date: "Nov 2020" },
  { title: "Certified Problem Solver (Intermediate)", issuer: "HackerRank", date: "Nov 2020" },
  { title: "Certified Problem Solver (Basic)", issuer: "HackerRank", date: "Jun 2020" },
  { title: "Algorithm Toolbox", issuer: "Coursera", date: "May 2020" },
];
