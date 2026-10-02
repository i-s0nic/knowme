import { useEffect } from "react";

const ScrollReveal = ({ revision = "" }: { revision?: string }) => {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const disabled = () => preference.matches || document.documentElement.dataset.motion === "paused";
    const cancelMotion = () => {
      if (disabled()) {
        animations.forEach((animation) => animation.cancel());
        animations.clear();
      }
    };
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting).forEach((entry, index) => {
        observer.unobserve(entry.target);
        if (disabled()) return;
        // Disclosures animate opacity only so their viewport measurements stay stable.
        const frames = entry.target.matches(".experience-entry")
          ? [{ opacity: 0 }, { opacity: 1 }]
          : [{ opacity: 0, translate: "0 28px" }, { opacity: 1, translate: "0 0" }];
        const animation = entry.target.animate(frames, {
          duration: 650,
          delay: Math.min(index, 3) * 65,
          easing: "cubic-bezier(.22, 1, .36, 1)",
          fill: "backwards",
        });
        animations.add(animation);
        animation.finished.then(
          () => animations.delete(animation),
          () => animations.delete(animation),
        );
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
    document.querySelectorAll(".section-heading, .story-card, .experience-entry, .project-card, .skill-group, .award-card, .learning-grid, .about-copy")
      .forEach((element) => observer.observe(element));
    const motionObserver = new MutationObserver(cancelMotion);
    motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
    preference.addEventListener("change", cancelMotion);
    return () => {
      observer.disconnect();
      motionObserver.disconnect();
      preference.removeEventListener("change", cancelMotion);
      animations.forEach((animation) => animation.cancel());
    };
  }, [revision]);

  return null;
};

export default ScrollReveal;
