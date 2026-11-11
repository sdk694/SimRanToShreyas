let revealObserver;

function initializeRevealAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    revealItems.forEach(function (element) {
      element.classList.add('is-visible');
    });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(function (element) {
      element.classList.add('is-visible');
    });
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(function (entries) {
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
  }

  revealItems.forEach(function (element) {
    if (element.dataset.revealObserved !== 'true') {
      element.dataset.revealObserved = 'true';
      revealObserver.observe(element);
    }
  });
}

function addPetalField() {
  const petalField = document.createElement('div');
  petalField.className = 'petal-field';
  petalField.setAttribute('aria-hidden', 'true');

  for (let index = 0; index < 24; index += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    const duration = 18 + (index % 6) * 1.2;
    petal.style.setProperty('--petal-left', (index * 37 % 96) + '%');
    petal.style.setProperty('--petal-duration', duration + 's');
    petal.style.setProperty('--petal-delay', -((index * 2.7) % duration) + 's');
    petalField.appendChild(petal);
  }

  document.body.appendChild(petalField);
}

document.addEventListener('DOMContentLoaded', function () {
  addPetalField();
  initializeRevealAnimations();
});

window.initializeRevealAnimations = initializeRevealAnimations;
