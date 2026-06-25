import { useEffect } from "react";

// Reveals any `.reveal` element once it scrolls into view.
//
// • Uses a single IntersectionObserver (created per page / when deps change).
// • Fires only when the element is genuinely in the viewport — a negative bottom
//   rootMargin means it triggers when the user has actually scrolled *to* it,
//   not the moment its top edge peeks in (which made animations finish off-screen).
// • Animates once, then unobserves. The transition runs on opacity + a 3D
//   transform, which the compositor handles on the GPU for the duration of the
//   animation only — no permanent will-change layers left behind.
// • Staggers siblings via CSS (:nth-child) so grids cascade smoothly.
// • Respects prefers-reduced-motion (reveals instantly, no transition).
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
    if (els.length === 0) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      // threshold: a chunk of the element must be visible; rootMargin pulls the
      // trigger line up from the bottom so it fires once the section is reached.
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
