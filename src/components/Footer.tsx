import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "@/data/portfolio";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container footer-inner">
      <span>{profile.name}<span className="footer-divider">/</span>&copy; {new Date().getFullYear()}</span>
      <Link to="/#home" className="text-link">Back to top <ArrowUp size={14} aria-hidden="true" /></Link>
    </div>
  </footer>
);

export default Footer;
