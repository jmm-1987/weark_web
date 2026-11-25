(() => {
  const revealItems = document.querySelectorAll("[data-scroll-reveal]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window) || revealItems.length === 0) {
    return;
  }

  document.documentElement.dataset.scrollReady = "true";

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  });

  revealItems.forEach((item) => observer.observe(item));
})();
