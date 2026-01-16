// ==============================
// Sélection des éléments du DOM
// ==============================
const drawButton = document.getElementById('draw-button');
const resultScreen = document.getElementById('result-screen');
const homeScreen = document.getElementById('home-screen');
const floatingContainer = document.getElementById('floating-container');
const cardZone = document.getElementById('card-zone'); // Zone où placer les cartes
const particleCanvas = document.getElementById('particle-canvas');
const backButton = document.getElementById('back-button'); // Bouton retour
const stockButton = document.getElementById('stock-button');
const stockScreen = document.getElementById('stock-screen');
const stockBackButton = document.getElementById('stock-back-button');
const stockList = document.getElementById('stock-list');
const effectModal = document.getElementById('effect-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');
const toggleMusicButton = document.getElementById('toggle-music');
const cardCountButton = document.getElementById('card-count-button');
const modeButton = document.getElementById('mode-button');
const sliderPrevButton = document.getElementById('slider-prev');
const sliderNextButton = document.getElementById('slider-next');
const bgMusic = document.getElementById('bg-music');
const flipSound = document.getElementById('flip-sound');
const drawSound = document.getElementById('draw-sound');

// Contexte du canvas pour les particules
const ctx = particleCanvas.getContext('2d');

// ==============================
// Slider horizontal pour les cartes
// ==============================
function updateSliderButtons() {
  const maxScrollLeft = cardZone.scrollWidth - cardZone.clientWidth;
  sliderPrevButton.disabled = cardZone.scrollLeft <= 0;
  sliderNextButton.disabled = cardZone.scrollLeft >= maxScrollLeft - 1;
}

function getCardStep() {
  const card = cardZone.querySelector('.card-wrapper');
  if (!card) return cardZone.clientWidth;
  const cardStyles = getComputedStyle(card);
  const cardWidth = card.getBoundingClientRect().width;
  const gap = parseFloat(cardStyles.marginLeft) + parseFloat(cardStyles.marginRight);
  return cardWidth + gap;
}

function slideCards(direction) {
  const step = getCardStep();
  cardZone.scrollBy({ left: direction * step, behavior: 'smooth' });
  window.setTimeout(updateSliderButtons, 250);
}

sliderPrevButton.addEventListener('click', () => slideCards(-1));
sliderNextButton.addEventListener('click', () => slideCards(1));
cardZone.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateSliderButtons);
});

// ==============================
// Variables de jeu
// ==============================
let particles = [];       // Particules d'arrière-plan
let cardCount = 1;        // Nombre de cartes à tirer
let mode = 'combat';      // Mode actuel (combat ou voyage)
let drawStarted = false;  // Empêche de relancer un tirage en cours
let currentDraw = [];     // Cartes tirées en cours
let revealedCount = 0;    // Nombre de cartes révélées
const stockCounts = new Map(); // Stock ajustable par carte

function getEffectKey(currentMode, reversed) {
  if (!reversed) return currentMode;
  return `${currentMode}envers`;
}

// Crée et anime des cartes qui flottent sur l'écran d'accueil
function createFloatingCards(count) {
  // On vide d'abord le conteneur
  floatingContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const card = document.createElement('div');
    card.classList.add('floating-card');

    const size = Math.random() * 60 + 40; // 40px to 100px
    const duration = Math.random() * 15 + 10; // 10s to 25s
    const opacity = Math.random() * 0.5 + 0.3;
    const tx = (Math.random() - 0.5) * 200 + 'px';
    const ty = (Math.random() - 0.5) * 200 + 'px';
    const rot = (Math.random() - 0.5) * 60 + 'deg';

    card.style.top = Math.random() * 100 + '%';
    card.style.left = Math.random() * 100 + '%';
    card.style.setProperty('--size', `${size}px`);
    card.style.setProperty('--duration', `${duration}s`);
    card.style.setProperty('--opacity', opacity);
    card.style.setProperty('--tx', tx);
    card.style.setProperty('--ty', ty);
    card.style.setProperty('--rot', rot);

    // On ajoute la carte animée au conteneur
    floatingContainer.appendChild(card);
  }
}

// Au chargement de la page, on lance la musique et les cartes flottantes
window.addEventListener('load', () => {
  bgMusic.play().then(() => {
    toggleMusicButton.classList.add('active');
    toggleMusicButton.textContent = '🔊';
  }).catch(() => {
    toggleMusicButton.textContent = '🔈';
  });
  createFloatingCards(30);
});

function resizeCanvas() {
  particleCanvas.width = resultScreen.clientWidth;
  particleCanvas.height = resultScreen.clientHeight;
}

// Génère les particules en arrière-plan
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

// Met à jour la position des particules à chaque frame
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

// Boucle d'animation des particules
function animateParticles() {
  updateParticles();
  requestAnimationFrame(animateParticles);
}

// Réinitialise le canvas quand la fenêtre change de taille
window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles(100);
});

// Changement du nombre de cartes à tirer
cardCountButton.addEventListener('click', () => {
  cardCount = cardCount % 6 + 1;
  cardCountButton.textContent = cardCount;
});

// Bascule entre le mode combat et voyage
modeButton.addEventListener('click', () => {
  mode = mode === 'combat' ? 'voyage' : 'combat';
  modeButton.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
});

// Active ou coupe la musique
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

// Retour à l'écran d'accueil
backButton.addEventListener('click', () => {
  resultScreen.classList.add('hidden');
  stockScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
  stockButton.classList.add('hidden');
  drawStarted = false;
  createFloatingCards(30);
});

async function animateDrawButton(times) {
  for (let i = 0; i < times; i++) {
    // Reset position so the animation always starts from the same place
    drawButton.style.top = '56.5%';
    drawButton.style.opacity = '1';

    
    drawSound.currentTime = 0;
    drawSound.play();
    // Force reflow to allow the animation to replay
    void drawButton.offsetWidth;

    await new Promise(resolve => {
      const end = () => {
        drawButton.classList.remove('draw-animation');
        drawButton.removeEventListener('animationend', end);
        
        resolve();
      };
      drawButton.addEventListener('animationend', end);
      drawButton.classList.add('draw-animation');
    });
  }
  // reset position
  drawButton.style.top = '56.5%';
  drawButton.style.opacity = '1';
}

// Lance un nouveau tirage de cartes
async function startDraw() {
  if (drawStarted) return; // Empêche les doubles clics
  drawStarted = true;
  
  const count = cardCount;      // nombre de cartes à piocher
  const currentMode = mode;     // mode sélectionné
  revealedCount = 0;
  stockButton.classList.add('hidden');
  currentDraw = [];
  stockCounts.clear();

  // Animation du bouton de pioche simulant chaque carte tirée
  await animateDrawButton(count);

  // On nettoie l'écran d'accueil
  floatingContainer.innerHTML = '';
  
  const deckClone = [...tarotDeck]; // clone pour ne pas modifier le jeu original
  const tirage = [];               // résultat du tirage

  // Sélection aléatoire des cartes
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * deckClone.length);
    const carte = deckClone.splice(index, 1)[0];
    const isMajor = carte.image.includes('major_arcana');
    const reversed = isMajor && Math.random() < 0.5; // seulement les majeures
    const effectKey = getEffectKey(currentMode, reversed);
    const effectText = carte[effectKey] || '';
    tirage.push({ ...carte, reversed, effectKey, effectText });
  }

  // Passage sur l'écran de résultat
  homeScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  

  resizeCanvas();          // Ajuste la taille du canvas
  createParticles(100);    // Prépare les particules
  animateParticles();      // Lance l'animation

  cardZone.innerHTML = '';

  // Affichage des cartes piochées
  currentDraw = tirage;
  tirage.forEach((carte, index) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper', 'deal-animation');
    wrapper.style.animationDelay = `${index * 0.2}s`;

    const div = document.createElement('div');
    div.classList.add('card');
    wrapper.appendChild(div);
    cardZone.appendChild(wrapper);

    // Révèle la carte au clic
    div.addEventListener('click', () => {
      if (div.classList.contains('flipped')) return;
      div.classList.add('flipped');
      const imgClass = carte.reversed ? 'card-image reversed' : 'card-image';
      const imgAlt = carte.reversed ? `${carte.name} à l'envers` : carte.name;
      div.innerHTML = `<img src="${carte.image}" alt="${imgAlt}" class="${imgClass}">`;

      flipSound.currentTime = 0;
      flipSound.play();

      const info = document.createElement('div');
      info.classList.add('card-info');
      const displayName = carte.reversed ? `${carte.name} (à l'envers)` : carte.name;
      info.innerHTML = `<strong>${displayName}</strong><p>${carte.effectText}</p>`;
      wrapper.appendChild(info);
      revealedCount += 1;
      if (currentMode === 'combat' && revealedCount === tirage.length) {
        stockButton.classList.remove('hidden');
      }
    });
  });

  updateSliderButtons();
}

drawButton.addEventListener('click', startDraw);

homeScreen.addEventListener('click', (e) => {
  if (!e.target.closest('.ui-panel') && e.target !== drawButton) {
    startDraw();
  }
});

stockButton.addEventListener('click', () => {
  resultScreen.classList.add('hidden');
  stockScreen.classList.remove('hidden');
  renderStockList();
});

stockBackButton.addEventListener('click', () => {
  stockScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
  effectModal.classList.add('hidden');
});

effectModal.addEventListener('click', (event) => {
  if (event.target === effectModal) {
    effectModal.classList.add('hidden');
  }
});

function renderStockList() {
  stockList.innerHTML = '';
  currentDraw.forEach((carte) => {
    const row = document.createElement('div');
    row.classList.add('stock-row');

    const name = document.createElement('span');
    name.classList.add('stock-name');
    name.textContent = carte.reversed ? `${carte.name} (à l'envers)` : carte.name;

    const controls = document.createElement('div');
    controls.classList.add('stock-controls');

    const minusButton = document.createElement('button');
    minusButton.classList.add('stock-button');
    minusButton.type = 'button';
    minusButton.textContent = '-';

    const count = document.createElement('span');
    count.classList.add('stock-count');
    const currentCount = stockCounts.get(carte.name) ?? 0;
    count.textContent = currentCount;

    const plusButton = document.createElement('button');
    plusButton.classList.add('stock-button');
    plusButton.type = 'button';
    plusButton.textContent = '+';

    const eyeButton = document.createElement('button');
    eyeButton.classList.add('stock-button');
    eyeButton.type = 'button';
    eyeButton.textContent = '👁️';
    eyeButton.setAttribute('aria-label', `Voir l'effet de ${carte.name}`);

    minusButton.addEventListener('click', () => {
      const value = Math.max(0, (stockCounts.get(carte.name) ?? 0) - 1);
      stockCounts.set(carte.name, value);
      count.textContent = value;
    });

    plusButton.addEventListener('click', () => {
      const value = (stockCounts.get(carte.name) ?? 0) + 1;
      stockCounts.set(carte.name, value);
      count.textContent = value;
    });

    eyeButton.addEventListener('click', () => {
      modalTitle.textContent = carte.reversed ? `${carte.name} (à l'envers)` : carte.name;
      modalText.textContent = carte.effectText || 'Aucun effet défini.';
      effectModal.classList.remove('hidden');
    });

    controls.append(minusButton, count, plusButton, eyeButton);
    row.append(name, controls);
    stockList.appendChild(row);
  });
}
