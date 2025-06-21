const drawButton = document.getElementById('draw-button');
const resultScreen = document.getElementById('result-screen');
const homeScreen = document.getElementById('home-screen');
const cardZone = document.getElementById('card-zone');

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

  cardZone.innerHTML = '';

  tirage.forEach(carte => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.addEventListener('click', () => {
      div.classList.add('flipped');
      div.innerHTML = `
        <img src="${carte.image}" alt="${carte.name}" class="card-image">
        <div class="card-text">
          <strong>${carte.name}</strong>
          <p>${carte[mode]}</p>
        </div>
      `;
    });
    cardZone.appendChild(div);
  });
});
