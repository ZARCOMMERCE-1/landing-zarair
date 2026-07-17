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

// === DYNAMIC ROADMAP PHASES ===
// Configure your roadmap phases here
window.roadmapPhases = [
  {
    title: "Token Creation & Launch",
    description: "Establish tokenomics, create the ZARAi token, and launch the token sale."
  },
  {
    title: "Fundraising",
    description: "Raising $140M through token sales to fund airline operations and fleet acquisition."
  },
  {
    title: "Exchange Listing",
    description: "List ZARAi on major exchanges for global liquidity and trading."
  },
  {
    title: "App & Licensing",
    description: "Develop the ZARAir booking app and obtain airline operating licenses."
  },
  {
    title: "First Commercial Flights",
    description: "Launch initial routes with quality used aircraft on underserved corridors."
  },
  {
    title: "International Expansion",
    description: "Scale operations across borders, activate token rewards, and transition to DAO governance."
  }
];

// Set the current active phase index (0-5)
// Change this number to update which phase shows as "Current"
window.currentPhaseIndex = 0;

// === END DYNAMIC ROADMAP PHASES ===

// Render roadmap phases dynamically
function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  if (!container) return;

  container.innerHTML = roadmapPhases.map((phase, index) => {
    const isActive = index === currentPhaseIndex;
    const phaseLabel = isActive ? `Phase ${index + 1} — Current` : `Phase ${index + 1}`;
    const activeClass = isActive ? 'active' : '';
    const dotClass = isActive ? 'timeline-dot active' : 'timeline-dot';

    return `
      <div class="timeline-item reveal ${activeClass}">
        <div class="${dotClass}"></div>
        <div class="timeline-content">
          <div class="phase">${phaseLabel}</div>
          <h3>${phase.title}</h3>
          <p>${phase.description}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Initialize roadmap on page load
function initRoadmap() {
  renderRoadmap();

  // Manually trigger reveal for dynamically rendered timeline items
  setTimeout(() => {
    const timelineItems = document.querySelectorAll('.timeline-item.reveal');
    timelineItems.forEach(item => {
      item.classList.add('visible');
    });
  }, 100);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRoadmap);
} else {
  initRoadmap();
}

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