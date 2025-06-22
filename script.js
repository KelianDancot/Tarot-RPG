const drawButton = document.getElementById('draw-button');
const resultScreen = document.getElementById('result-screen');
const homeScreen = document.getElementById('home-screen');
const cardZone = document.getElementById('card-zone');
const particleCanvas = document.getElementById('particle-canvas');
const backButton = document.getElementById('back-button');
const toggleMusicButton = document.getElementById('toggle-music');
const bgMusic = document.getElementById('bg-music');
const flipSound = document.getElementById('flip-sound');
const ctx = particleCanvas.getContext('2d');
let particles = [];

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

toggleMusicButton.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleMusicButton.textContent = 'Musique : ON';
  } else {
    bgMusic.pause();
    toggleMusicButton.textContent = 'Musique : OFF';
  }
});

backButton.addEventListener('click', () => {
  resultScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
});

drawButton.addEventListener('click', () => {
  const count = parseInt(document.getElementById('card-count').value);
  const mode = document.getElementById('mode').value;

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
      info.innerHTML = `<strong>${carte.name}</strong><p>${carte[mode]}</p>`;
      wrapper.appendChild(info);
    });
  });
});