import { motion } from "framer-motion";
import { MapPin, Users, ExternalLink } from "lucide-react";

type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  team?: string;
  current?: boolean;
  bullets: { title: string; description: string }[];
  technologies: string;
};

const experienceData: Experience[] = [
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    role: "Software Development Engineer II (SDE-2)",
    period: "April 2026 – Present",
    location: "Noida, India",
    current: true,
    bullets: [
      {
        title: "Large-scale Backend Systems",
        description:
          "Building large-scale backend systems and distributed infrastructure at Microsoft.",
      },
      {
        title: "Platform-level Engineering",
        description:
          "Working on platform-level problems that operate at the scale Microsoft is known for.",
      },
    ],
    technologies: "Distributed Systems, Cloud Infrastructure, Backend Engineering, Platform Engineering",
  },
  {
    company: "LambdaTest India Pvt. Ltd.",
    logo: "/TestMu AI.jpeg",
    role: "Member of Technical Staff",
    period: "Aug 2024 – Apr 2026",
    location: "Noida, India",
    team: "HyperExecute",
    bullets: [
      { title: "Storage Optimizations", description: "Built cross-cloud data storage aligned with customer data retention policies. Automated lifecycle rules for storage class transitions and clean-up, achieving up to 40% cost reduction." },
      { title: "Kane AI and Accessibility Scheduling", description: "Built a whitelabel scheduling engine in HyperExecute, streamlining test execution for products like Kane AI and Accessibility. Improved scheduling efficiency by 20% and boosted test reliability through integrated workflows." },
      { title: "macOS Virtualization", description: "Developed core systems for macOS virtualization, reducing bare-metal machine costs by 50% and improving system uptime by 100% through efficient resource utilization." },
      { title: "Optimized VM Execution", description: "Improved binary execution inside virtual machines, resulting in a 30% increase in HyperExecute test performance by optimizing resource allocation and code execution." },
      { title: "Dynamic OS and Browser Updates", description: "Designed a seamless update system for operating systems and browser platforms, accelerating update speeds by 40% for browsers and 70% for OS versions, which directly improved user test coverage." },
      { title: "WebDriver Mode for Selenium", description: "Created a WebDriver mode for Selenium in HyperExecute, reducing one-hop latency by 25%, thereby improving test execution times and benefiting automated testing." },
    ],
    technologies: "Golang, MySQL, Kubernetes, Apache Kafka, AWS, Azure, GCP, Microservices, Distributed Systems, Virtualization, HyperExecute, Selenium, macOS",
  },
  {
    company: "Epifi Technologies India Pvt. Ltd. (Fi Money)",
    logo: "/fi-money-vector-logo.svg",
    role: "Software Engineer",
    period: "July 2023 – Aug 2024",
    location: "Bangalore, India",
    team: "Cards",
    bullets: [
      { title: "Credit Card Onboarding Flows", description: "Designed and developed credit card onboarding orchestration via templated temporal workflows utilizing A/B experimentation, significantly boosting user engagement metrics by 42% and decreasing funnel drop-off rates by 36%." },
      { title: "SSE for Live Updates", description: "Decreased reliance on vendor API calls by over 99% through formulating SSE streams for live updates on stock and option prices, trades, and order status." },
      { title: "Communication Orchestration", description: "Crafted an orchestrator for scheduling communications with agnostic trigger timing and communication types. Achieved a 30% system load reduction." },
      { title: "Server-Driven UI", description: "Architected a scalable server-driven UI framework that streamlined frontend development by centralizing UI logic at BE, reducing time-to-deployment by ~70%." },
      { title: "Performance Optimization", description: "Overhauled transaction processing using Amazon Kinesis for direct event writing to S3, increasing data retrieval speed by 40%." },
    ],
    technologies: "Golang, gRPC, Kubernetes, Snowflake, Temporal.io, PostgreSQL, CockroachDB, Apache Kafka, Amazon Kinesis, Amazon ECS, Protocol Buffers, FinTech",
  },
  {
    company: "Epifi Technologies India Pvt. Ltd. (Fi Money)",
    logo: "/fi-money-vector-logo.svg",
    role: "SDE Intern",
    period: "Nov 2022 – July 2023",
    location: "Bengaluru, India",
    team: "Wealth",
    bullets: [
      { title: "Deposits, US Stocks, and Mutual Funds", description: "Built features for deposits, US stocks, and mutual fund investments." },
      { title: "Mutual Fund Tax Statements", description: "Developed a feature to generate and email automated tax statements in the Tax Saver category, simplifying proof of income and refunds for users." },
      { title: "System Improvements", description: "Optimized high throughput DAOs and RPCs utilizing Redis for caching, reducing database load and enhancing performance by ~50-70% while cutting infrastructure costs by 9%." },
    ],
    technologies: "Golang, gRPC, Kubernetes, Snowflake, Temporal.io, PostgreSQL, CockroachDB, Apache Kafka, AWS, Protocol Buffers",
  },
  {
    company: "Masai",
    logo: "/Masai.jpeg",
    role: "DSA Mentor",
    period: "Oct 2022 – Aug 2023",
    location: "Bengaluru, India",
    team: "Mentors",
    bullets: [
      { title: "Mentoring & Teaching DSA", description: "Taught Data Structures and Algorithms for competitive coding using Core Java, JavaScript, and Python." },
      { title: "Classroom and Individual Instruction", description: "Conducted both classroom and individual sessions to ensure personalized learning experiences." },
      { title: "Assisting New Students", description: "Helped new students in competitive programming with daily activities, problem-solving exercises, coding contests, and algorithmic challenges." },
      { title: "Student Support & Reviews", description: "Guided students in daily coding activities, contests, code reviews, and optimized solutions for efficiency." },
    ],
    technologies: "Core Java, JavaScript, Python, Data Structures, Algorithms, Dynamic Programming, Graph Algorithms",
  },
  {
    company: "Fractal: The Coding Club, IET Lucknow",
    logo: "/Fractal .jpeg",
    role: "Mentor",
    period: "Sep 2020 – Jun 2023",
    location: "Lucknow, India",
    team: "Fractal Mentors 2020",
    bullets: [
      { title: "Cultivating Competitive Coding Culture", description: "Led initiatives to build a competitive coding culture, organized workshops, and instructed DSA concepts using C++." },
      { title: "Supporting Beginners", description: "Provided support for beginners and collaborated on coding assignments to create a dynamic, growth-oriented learning environment." },
    ],
    technologies: "C++, Data Structures, Algorithms, Competitive Programming",
  },
  {
    company: "Ridecell",
    logo: "/ridecell-seeklogo.svg",
    role: "Software Development Engineer Intern",
    period: "May 2022 – Aug 2022",
    location: "Pune division, Maharashtra, India",
    team: "Fleet Automation",
    bullets: [
      { title: "Fleet Automation Communication", description: "Developed systems for notifying fleet owners about key vehicle events (speeding, subscription, maintenance), improving fleet management responsiveness by 50%." },
      { title: "Lifecycle Management Features", description: "Implemented alerts for overdue service and fleet status to enhance uptime and minimize maintenance delays by 40%." },
      { title: "Unit Testing", description: "Added unit tests for automation features, resulting in 30% improved test coverage." },
    ],
    technologies: "Python, Django, DRF, PostgreSQL, Microservices, Distributed Systems, OOP, Linux",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Journey</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Backend engineering, mentorship, and core platform work across major tech companies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.article
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: Math.min(idx * 0.05, 0.25) }}
                className="relative pl-16 md:pl-24"
              >
                {/* Logo node */}
                <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-strong border border-primary/40 shadow-glow flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                <div className="glass rounded-2xl border border-border shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.company}</h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-primary/15 text-primary border border-primary/30">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                              </span>
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-semibold mt-1">{exp.role}</p>
                      </div>
                      <span className="text-xs md:text-sm text-muted-foreground font-medium px-3 py-1 rounded-full glass border border-border">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {exp.location}
                      </span>
                      {exp.team && (
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" /> {exp.team}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground text-sm md:text-base">{b.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                              {b.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-5 border-t border-border">
                      <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-2">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.split(",").map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-foreground/80 border border-border"
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
