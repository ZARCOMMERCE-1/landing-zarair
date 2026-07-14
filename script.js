// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Nav scroll shadow
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Stats counter animation
const statValues = document.querySelectorAll('.stat-value[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.getAttribute('data-target'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimal')) || 0;
      const duration = 2000;
      const startTime = performance.now();

      function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      }

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress);
        const current = eased * target;

        el.textContent = prefix + current.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statValues.forEach(el => counterObserver.observe(el));

// Hero subtitle cycling
const cycleWord = document.querySelector('.cycle-word');
const features = [
  'Low-Cost Flights',
  'Gold-Linked Value',
  '1,200 km Rewards',
  'Transparent Pricing',
  'Global Routes',
  'Flight Rewards'
];
let featureIndex = 0;
let cycling = true;

function nextFeature() {
  if (!cycling) return;
  cycleWord.classList.add('hidden');
}

cycleWord.addEventListener('transitionend', () => {
  if (cycleWord.classList.contains('hidden')) {
    featureIndex = (featureIndex + 1) % features.length;
    cycleWord.textContent = features[featureIndex];
    cycleWord.classList.remove('hidden');
  }
});

setInterval(nextFeature, 3000);