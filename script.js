const drawButton = document.getElementById('draw-button');
const resultScreen = document.getElementById('result-screen');
const homeScreen = document.getElementById('home-screen');
const cardZone = document.getElementById('card-zone');
const particleCanvas = document.getElementById('particle-canvas');
const backButton = document.getElementById('back-button');
const toggleMusicButton = document.getElementById('toggle-music');
const cardCountButton = document.getElementById('card-count-button');
const modeButton = document.getElementById('mode-button');
const bgMusic = document.getElementById('bg-music');
const flipSound = document.getElementById('flip-sound');
const ctx = particleCanvas.getContext('2d');
const homeTitle = document.getElementById('home-title');
const drawTitle = document.getElementById('draw-title');
let particles = [];
let cardCount = 1;
let mode = 'combat';

function setupMysticText(el, delayStart = 0) {
  if (!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  [...text].forEach((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch;
    span.style.animationDelay = (delayStart + i * 0.1) + 's';
    const shade = Math.floor(Math.random() * 156) + 100; // 100-255
    span.style.color = `rgb(${shade},${shade},${shade})`;
    span.style.textShadow = `0 0 8px rgb(${shade},${shade},${shade})`;
    el.appendChild(span);
  });
}

function createStarBackground() {
  const starsPer100 = 1;
  const width = document.documentElement.offsetWidth;
  const height = document.documentElement.offsetHeight;
  let count = Math.floor(width / 100) * Math.floor(height / 100) * starsPer100;
  let delay = Math.max(1, Math.round(count / 5000));
  const id = setInterval(() => {
    const star = document.createElement('i');
    star.className = 'star';
    if (Math.random() < 0.5) star.classList.add('medium');
    star.style.left = (Math.random() * 99).toFixed(2) + '%';
    star.style.top = (Math.random() * 99).toFixed(2) + '%';
    document.body.appendChild(star);
    if (--count === 0) clearInterval(id);
  }, delay);
}

window.addEventListener('load', () => {
  bgMusic.play().then(() => {
    toggleMusicButton.classList.add('active');
    toggleMusicButton.textContent = '🔊';
  }).catch(() => {
    toggleMusicButton.textContent = '🔈';
  });
  setupMysticText(homeTitle, 0.6);
  setupMysticText(drawTitle, 0.6);
  createStarBackground();
});

function resizeCanvas() {
  particleCanvas.width = resultScreen.clientWidth;
  particleCanvas.height = resultScreen.clientHeight;
}

function createParticles(count) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1
    });
  }
}

function updateParticles() {
  ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > particleCanvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > particleCanvas.height) p.vy *= -1;

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animateParticles() {
  updateParticles();
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles(100);
});

cardCountButton.addEventListener('click', () => {
  cardCount = cardCount % 5 + 1;
  cardCountButton.textContent = cardCount;
});

modeButton.addEventListener('click', () => {
  mode = mode === 'combat' ? 'voyage' : 'combat';
  modeButton.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
});


toggleMusicButton.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleMusicButton.classList.add('active');
    toggleMusicButton.textContent = '🔊';
  } else {
    bgMusic.pause();
    toggleMusicButton.classList.remove('active');
    toggleMusicButton.textContent = '🔈';
  }
});

backButton.addEventListener('click', () => {
  resultScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
});

drawButton.addEventListener('click', () => {
  const count = cardCount;
  const currentMode = mode;

  const deckClone = [...tarotDeck];
  const tirage = [];

  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * deckClone.length);
    tirage.push(deckClone.splice(index, 1)[0]);
  }

  homeScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  resizeCanvas();
  createParticles(100);
  animateParticles();

  cardZone.innerHTML = '';

  tirage.forEach(carte => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper');

    const div = document.createElement('div');
    div.classList.add('card');
    wrapper.appendChild(div);
    cardZone.appendChild(wrapper);

    div.addEventListener('click', () => {
      if (div.classList.contains('flipped')) return;
      div.classList.add('flipped');
      div.innerHTML = `<img src="${carte.image}" alt="${carte.name}" class="card-image">`;

      flipSound.currentTime = 0;
      flipSound.play();

      const info = document.createElement('div');
      info.classList.add('card-info');
      info.innerHTML = `<strong>${carte.name}</strong><p>${carte[currentMode]}</p>`;
      wrapper.appendChild(info);
    });
  });
});