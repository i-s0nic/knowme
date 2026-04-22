import { motion } from "framer-motion";
import { Award, Trophy, Medal, Target, ExternalLink, BadgeCheck } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Spot Award – Fi (Epifi Technologies)",
    description:
      "Received for outstanding performance in implementing critical features, reducing infrastructure costs, and enhancing system reliability.",
    link: "https://www.linkedin.com/in/is0nic/overlay/1713153390448/single-media-viewer/?profileId=ACoAADF7qiIBDqVHMcNBKKLpTMC8u5qnBXmZf_c",
  },
  {
    icon: Trophy,
    title: "Ranked 26th – Hackerearth January Circuits 21",
    description: "Achieved among 40,000+ participants, showcasing competitive programming proficiency.",
    link: "https://www.hackerearth.com/challenges/competitive/january-circuits-21/leaderboard/page/1/",
  },
  {
    icon: Medal,
    title: "Ranked 41st – Scaler Codex 2.0",
    description:
      "Ranked high in a competitive coding contest with 30,000+ participants, demonstrating algorithmic skills.",
    link: "https://moonshot.scaler.com/s/sl/1o503kBk9p",
  },
  {
    icon: Target,
    title: "Google Kickstart Round G 2022",
    description:
      "Achieved 866th rank, showcasing the ability to solve complex problems under timed conditions.",
    link: "https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/00000000008caba4",
  },
];

const certifications = [
  { name: "Certified Problem Solver", category: "Programming" },
  { name: "Algorithms on Graph", category: "Computer Science" },
  { name: "Patent Law for Engineers and Scientists", category: "Legal" },
  { name: "Developing Soft Skills and Personality", category: "Soft Skills" },
  { name: "Certificate of Achievement (Ranked #41)", category: "Achievement" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">
            Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Recognition & Awards</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {achievements.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-card flex gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <a.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-foreground leading-snug">{a.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 border border-border hover:border-primary/40 transition flex items-start gap-3"
              >
                <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm leading-snug">{c.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
