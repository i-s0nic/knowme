import { useEffect, useState } from "react";

const titles = ["Windows engineering", "Backend engineering", "Distributed systems"];

const TypingTitle = ({ paused }: { paused: boolean }) => {
  const [frame, setFrame] = useState({ word: 0, letters: 0, deleting: false });
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [hidden, setHidden] = useState(() => document.hidden);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || hidden) return;
    const word = titles[frame.word];
    const complete = frame.letters === word.length;
    const delay = frame.deleting ? 35 : complete ? 1800 : 70;
    const timer = window.setTimeout(() => {
      setFrame((current) => {
        if (!current.deleting && complete) return { ...current, deleting: true };
        if (current.deleting && current.letters === 0) {
          return { word: (current.word + 1) % titles.length, letters: 0, deleting: false };
        }
        return { ...current, letters: current.letters + (current.deleting ? -1 : 1) };
      });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [frame, paused, reducedMotion, hidden]);

  return (
    <p className="hero-specialties">
      <span className="sr-only">Windows engineering, backend engineering and distributed systems.</span>
      <span className="typing-title" aria-hidden="true">
        {paused || reducedMotion ? titles[0] : titles[frame.word].slice(0, frame.letters)}
        <span className="typing-caret" />
      </span>
    </p>
  );
};

export default TypingTitle;
