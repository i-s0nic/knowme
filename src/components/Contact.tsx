import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
          <div className="mt-4 h-1 w-16 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to opportunities in software engineering and backend development.
            Let's connect and build something impactful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-5"
        >
          <a
            href="mailto:usaurabh207@gmail.com"
            className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 transition shadow-card flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground">usaurabh207@gmail.com</p>
            </div>
          </a>

          <div className="glass rounded-2xl p-6 border border-border shadow-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
              <p className="font-semibold text-foreground">Noida, Uttar Pradesh, India</p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/is0nic"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 transition shadow-card flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
              <p className="font-semibold text-foreground">linkedin.com/in/is0nic</p>
            </div>
          </a>

          <a
            href="https://github.com/Saurabh-Upadhayay"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-2xl p-6 border border-border hover:border-primary/50 hover:-translate-y-1 transition shadow-card flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</p>
              <p className="font-semibold text-foreground">github.com/Saurabh-Upadhayay</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center"
        >
          <a
            href="mailto:usaurabh207@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition"
          >
            <Send className="w-4 h-4" /> Send a message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
