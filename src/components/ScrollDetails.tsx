import { useEffect, useRef, type ReactNode } from "react";

interface ScrollDetailsProps {
  className: string;
  children: ReactNode;
  "data-company"?: string;
}

interface ObservedDetails {
  details: HTMLDetailsElement;
  summary: HTMLElement;
  manual: boolean;
}

const observedCards = new Set<ObservedDetails>();
let openingFrame = 0;
let lastScrollY = 0;
let scrollDirection = 0;

const scheduleOpening = () => {
  if (openingFrame) return;
  openingFrame = window.requestAnimationFrame(() => {
    openingFrame = 0;
    const center = window.innerHeight / 2;
    const cards = [...observedCards].map((card) => ({
      ...card,
      bounds: card.details.getBoundingClientRect(),
      summaryBounds: card.summary.getBoundingClientRect(),
    }));
    const candidates = cards.filter((card) => {
      if (card.manual || card.details.open) return false;
      const visibleHeight = Math.min(card.summaryBounds.bottom, window.innerHeight - 80) - Math.max(card.summaryBounds.top, 88);
      if (visibleHeight < card.summaryBounds.height / 2) return false;

      // Opening an earlier card must not push the card being read out of view.
      return !cards.some((other) => other.details.open
        && other.bounds.top < center && other.bounds.bottom > 88
        && card.bounds.top < other.bounds.top);
    });
    candidates.sort((a, b) => scrollDirection
      ? scrollDirection * (a.summaryBounds.top - b.summaryBounds.top)
      : Math.abs((a.summaryBounds.top + a.summaryBounds.bottom) / 2 - center)
        - Math.abs((b.summaryBounds.top + b.summaryBounds.bottom) / 2 - center));
    if (candidates[0]) candidates[0].details.open = true;
  });
};

const handleScroll = () => {
  const distance = window.scrollY - lastScrollY;
  // Follow reading order during scrolling; direct jumps favor the destination.
  scrollDirection = Math.abs(distance) < window.innerHeight / 2 ? Math.sign(distance) : 0;
  lastScrollY = window.scrollY;
  scheduleOpening();
};

const ScrollDetails = ({ className, children, "data-company": company }: ScrollDetailsProps) => {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = ref.current;
    const summary = details?.querySelector("summary");
    if (!details || !summary || !("IntersectionObserver" in window)) return;

    const card = { details, summary, manual: false };
    observedCards.add(card);
    if (observedCards.size === 1) {
      lastScrollY = window.scrollY;
      scrollDirection = 0;
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", scheduleOpening);
    }
    const openingObserver = new IntersectionObserver((entries) => {
      if (!card.manual && entries.some((entry) => entry.isIntersecting)) scheduleOpening();
    }, { rootMargin: "-88px 0px -80px 0px", threshold: 0.5 });

    const closingObserver = new IntersectionObserver(() => {
      if (card.manual || !details.open) return;
      const bounds = details.getBoundingClientRect();
      // Keep the full body readable after its summary has left the screen.
      if (bounds.bottom < -100 || bounds.top > window.innerHeight + 100) {
        details.open = false;
        scheduleOpening();
      }
    }, { rootMargin: "100px 0px", threshold: 0 });

    const keepManualControl = () => {
      card.manual = true;
      openingObserver.disconnect();
      closingObserver.disconnect();
    };

    details.addEventListener("focusin", keepManualControl);
    summary.addEventListener("click", keepManualControl);
    openingObserver.observe(summary);
    closingObserver.observe(details);
    return () => {
      openingObserver.disconnect();
      closingObserver.disconnect();
      details.removeEventListener("focusin", keepManualControl);
      summary.removeEventListener("click", keepManualControl);
      observedCards.delete(card);
      if (observedCards.size === 0) {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", scheduleOpening);
        window.cancelAnimationFrame(openingFrame);
        openingFrame = 0;
      }
    };
  }, []);

  return <details ref={ref} className={`${className} scroll-details`} data-company={company}>{children}</details>;
};

export default ScrollDetails;
