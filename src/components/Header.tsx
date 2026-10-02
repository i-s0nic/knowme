import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  { to: "/#work", label: "Work" },
  { to: "/#experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/#about", label: "About" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname, hash, key } = useLocation();

  useEffect(() => setOpen(false), [key]);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-container header-inner">
        <Link to="/#home" className="wordmark" aria-label={`${profile.name}, home`}>
          <span>{profile.name}<span className="wordmark-caption">{profile.role}</span></span>
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={`main-navigation${open ? " is-open" : ""}`}>
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              aria-current={`${pathname}${hash}` === to ? "location" : undefined}
              onClick={() => setOpen(false)}
            >{label}</Link>
          ))}
          <Link to="/#contact" className="nav-contact" onClick={() => setOpen(false)}>
            Let's talk <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
