const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = '50 Projects in 50 Days Gallery!';
let idx = 1;
let speed = 200 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 200 / e.target.value));

// GSAP Animation
gsap.set('.card', {
  autoAlpha: 0,
  transformOrigin: '50% 500%',
  scale: 0,
});

let heroTL = gsap.timeline({
  defaults: {
    stagger: { amount: 6 },
    autoAlpha: 1,
    scale: 1,
    ease: 'back.out(0.8)',
  },
});
heroTL.to('.card', {});
