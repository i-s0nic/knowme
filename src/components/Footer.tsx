import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Built by <span className="text-foreground font-semibold">Saurabh Upadhayay</span> ·{" "}
          © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/Saurabh-Upadhayay", label: "GitHub" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/is0nic", label: "LinkedIn" },
            { Icon: Mail, href: "mailto:usaurabh207@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg glass border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
