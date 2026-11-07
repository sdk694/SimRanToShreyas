function initializeRevealAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  revealItems.forEach(function (element, index) {
    element.style.transitionDelay = (index * 120) + 'ms';
  });

  if (prefersReducedMotion) {
    revealItems.forEach(function (element) {
      element.classList.add('is-visible');
    });
    return;
  }

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -10% 0px'
  });

  revealItems.forEach(function (element) {
    revealObserver.observe(element);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initializeRevealAnimations();
});

window.initializeRevealAnimations = initializeRevealAnimations;
