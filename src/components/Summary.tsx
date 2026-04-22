import { motion } from "framer-motion";

const Summary = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-8 md:p-12 shadow-card border border-border space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            Hello, I'm <span className="text-foreground font-semibold">Saurabh Upadhayay</span> — a{" "}
            <span className="text-primary font-semibold">Software Engineer at Microsoft</span> focused on
            building scalable, reliable backend systems and cloud-native infrastructure. I enjoy solving
            complex engineering problems and designing systems that remain resilient under real-world
            production demands.
          </p>
          <p>
            Previously, I've worked at <span className="text-foreground font-semibold">LambdaTest</span>,{" "}
            <span className="text-foreground font-semibold">Fi Money</span>, and{" "}
            <span className="text-foreground font-semibold">Ridecell</span>, where I designed and shipped
            systems across multi-region cloud environments, real-time data pipelines, workflow
            orchestration, and large-scale testing platforms.
          </p>
          <p>
            My core focus areas include{" "}
            <span className="text-foreground font-semibold">system design, distributed systems</span>, and
            building reliable infrastructure. I care deeply about clean architecture, observability, and
            writing code that continues to perform when things go wrong.
          </p>
          <p>
            Beyond engineering, I'm passionate about mentorship and community building. As a mentor at
            Masai, I help aspiring developers strengthen their foundations in Java, Python, and
            JavaScript while guiding them through competitive programming.
          </p>
          <p>
            I actively participate in coding competitions and continuously push myself to improve my
            problem-solving skills and technical depth. I'm always open to connecting with engineers and
            teams working on meaningful, large-scale problems. Let's build something impactful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
