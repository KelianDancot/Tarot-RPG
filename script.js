const deck = [
  { carte: "Le Mat (0)", effet: "Tu peux agir deux fois ce tour, mais tu agis en dernier à l'initiative." },
  { carte: "Le Bateleur (I)", effet: "Tu peux relancer un sort niveau 1 sans consommer de slot." },
  { carte: "La Papesse (II)", effet: "Tu obtiens un bonus de +2 en sauvegarde de Sagesse pendant 1 heure." },
  { carte: "L’Impératrice (III)", effet: "Tes sorts de soins restaurent +1d6 PV supplémentaires." },
  { carte: "L’Empereur (IV)", effet: "Tu gagnes +2 CA pendant 1 minute." },
  { carte: "Le Pape (V)", effet: "Tes alliés dans un rayon de 9m ont avantage aux jets de sauvegarde pendant 1 minute." },
  { carte: "L’Amoureux (VI)", effet: "Tu peux forcer deux créatures à faire un test de CHA ; si échec, elles deviennent charmées entre elles." },
  { carte: "Le Chariot (VII)", effet: "Tu gagnes +3m de déplacement et une attaque supplémentaire ce tour." },
  { carte: "La Justice (VIII)", effet: "Tu peux obliger une créature à refaire un jet qui vient de réussir." },
  { carte: "L’Hermite (IX)", effet: "Tu es invisible pendant 1 minute tant que tu restes immobile." },
  { carte: "La Roue de Fortune (X)", effet: "Relance immédiate d’un jet raté, mais si tu échoues à nouveau, tu perds 1d10 PV." },
  { carte: "La Force (XI)", effet: "Tu gagnes avantage sur tous les jets de Force et de Constitution pendant 10 minutes." },
  { carte: "Le Pendu (XII)", effet: "Tu lances un sort gratuitement, mais perds ton action au tour suivant." },
  { carte: "La Mort (XIII)", effet: "Un sort lancé inflige le double des dégâts, mais tu subis 1d12 dégâts nécrotiques." },
  { carte: "Tempérance (XIV)", effet: "Tu peux transférer un effet négatif d’un allié vers toi." },
  { carte: "Le Diable (XV)", effet: "Tu doubles tes dégâts pendant 1 minute, mais subis 1 niveau d’épuisement." },
  { carte: "La Tour (XVI)", effet: "Tu infliges 2d10 dégâts de ton choix autour de toi (zone 3m), mais tu es repoussé de 3m." },
  { carte: "L’Étoile (XVII)", effet: "Tu récupères 2d8 PV et un slot de niveau 1." },
  { carte: "La Lune (XVIII)", effet: "Tu imposes désavantage à une cible sur ses prochains jets, mais tu hallucines pendant 1 minute." },
  { carte: "Le Soleil (XIX)", effet: "Tous les alliés proches récupèrent 1d6 PV par tour pendant 3 tours." },
  { carte: "Le Jugement (XX)", effet: "Tu relances un sort sans coût et cibles +1 créature." },
  { carte: "Le Monde (XXI)", effet: "Tu choisis un effet parmi 3 cartes précédemment tirées." },
  { carte: "As de Coupes", effet: "Tu gagnes 1 PV." },
  { carte: "Deux de Coupes", effet: "Tu gagnes 2 PV ou tu partages 1 PV avec un allié proche." },
  { carte: "Trois de Coupes", effet: "Tu gagnes 3 PV ou tu partages 1 PV avec un allié proche." },
  { carte: "Quatre de Coupes", effet: "Tu gagnes 4 PV ou tu partages 2 PV avec un allié proche." },
  { carte: "Cinq de Coupes", effet: "Tu gagnes 5 PV ou tu partages 2 PV avec un allié proche." },
  { carte: "Six de Coupes", effet: "Tu gagnes 6 PV ou tu partages 3 PV avec un allié proche." },
  { carte: "Sept de Coupes", effet: "Tu gagnes 7 PV ou tu partages 3 PV avec un allié proche." },
  { carte: "Huit de Coupes", effet: "Tu gagnes 8 PV ou tu partages 4 PV avec un allié proche." },
  { carte: "Neuf de Coupes", effet: "Tu gagnes 9 PV ou tu partages 4 PV avec un allié proche." },
  { carte: "Dix de Coupes", effet: "Tu gagnes 10 PV ou tu partages 5 PV avec un allié proche." },
  { carte: "Valet de Coupes", effet: "Tu gagnes 11 PV ou tu partages 5 PV avec un allié proche." },
  { carte: "Cavalier de Coupes", effet: "Tu gagnes 12 PV ou tu partages 6 PV avec un allié proche." },
  { carte: "Reine de Coupes", effet: "Tu gagnes 13 PV ou tu partages 6 PV avec un allié proche." },
  { carte: "Roi de Coupes", effet: "Tu gagnes 14 PV ou tu partages 7 PV avec un allié proche." },
  { carte: "As de Épées", effet: "Ton prochain jet d’attaque obtient +1 ou tu peux parer une attaque avec +1 CA." },
  { carte: "Deux de Épées", effet: "Ton prochain jet d’attaque obtient +1 ou tu peux parer une attaque avec +1 CA." },
  { carte: "Trois de Épées", effet: "Ton prochain jet d’attaque obtient +2 ou tu peux parer une attaque avec +2 CA." },
  { carte: "Quatre de Épées", effet: "Ton prochain jet d’attaque obtient +2 ou tu peux parer une attaque avec +2 CA." },
  { carte: "Cinq de Épées", effet: "Ton prochain jet d’attaque obtient +3 ou tu peux parer une attaque avec +3 CA." },
  { carte: "Six de Épées", effet: "Ton prochain jet d’attaque obtient +3 ou tu peux parer une attaque avec +3 CA." },
  { carte: "Sept de Épées", effet: "Ton prochain jet d’attaque obtient +4 ou tu peux parer une attaque avec +4 CA." },
  { carte: "Huit de Épées", effet: "Ton prochain jet d’attaque obtient +4 ou tu peux parer une attaque avec +4 CA." },
  { carte: "Neuf de Épées", effet: "Ton prochain jet d’attaque obtient +5 ou tu peux parer une attaque avec +5 CA." },
  { carte: "Dix de Épées", effet: "Ton prochain jet d’attaque obtient +5 ou tu peux parer une attaque avec +5 CA." },
  { carte: "Valet de Épées", effet: "Ton prochain jet d’attaque obtient +6 ou tu peux parer une attaque avec +6 CA." },
  { carte: "Cavalier de Épées", effet: "Ton prochain jet d’attaque obtient +6 ou tu peux parer une attaque avec +6 CA." },
  { carte: "Reine de Épées", effet: "Ton prochain jet d’attaque obtient +7 ou tu peux parer une attaque avec +7 CA." },
  { carte: "Roi de Épées", effet: "Ton prochain jet d’attaque obtient +7 ou tu peux parer une attaque avec +7 CA." },
  { carte: "As de Bâtons", effet: "Ton prochain sort inflige +1 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Deux de Bâtons", effet: "Ton prochain sort inflige +1 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Trois de Bâtons", effet: "Ton prochain sort inflige +2 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Quatre de Bâtons", effet: "Ton prochain sort inflige +2 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Cinq de Bâtons", effet: "Ton prochain sort inflige +3 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Six de Bâtons", effet: "Ton prochain sort inflige +3 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Sept de Bâtons", effet: "Ton prochain sort inflige +4 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Huit de Bâtons", effet: "Ton prochain sort inflige +4 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Neuf de Bâtons", effet: "Ton prochain sort inflige +5 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Dix de Bâtons", effet: "Ton prochain sort inflige +5 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Valet de Bâtons", effet: "Ton prochain sort inflige +6 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Cavalier de Bâtons", effet: "Ton prochain sort inflige +6 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Reine de Bâtons", effet: "Ton prochain sort inflige +7 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "Roi de Bâtons", effet: "Ton prochain sort inflige +7 dégâts ou affecte +1 cible supplémentaire." },
  { carte: "As de Charisme", effet: "Tu gagnes un bonus de +1 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Deux de Charisme", effet: "Tu gagnes un bonus de +1 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Trois de Charisme", effet: "Tu gagnes un bonus de +2 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Quatre de Charisme", effet: "Tu gagnes un bonus de +2 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Cinq de Charisme", effet: "Tu gagnes un bonus de +3 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Six de Charisme", effet: "Tu gagnes un bonus de +3 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Sept de Charisme", effet: "Tu gagnes un bonus de +4 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Huit de Charisme", effet: "Tu gagnes un bonus de +4 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Neuf de Charisme", effet: "Tu gagnes un bonus de +5 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Dix de Charisme", effet: "Tu gagnes un bonus de +5 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Valet de Charisme", effet: "Tu gagnes un bonus de +6 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Cavalier de Charisme", effet: "Tu gagnes un bonus de +6 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Reine de Charisme", effet: "Tu gagnes un bonus de +7 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
  { carte: "Roi de Charisme", effet: "Tu gagnes un bonus de +7 à un test d’outil ou de compétence, ou une ressource matérielle temporaire." },
];

function tirerCartes() {
  const cartesContainer = document.getElementById('cartes-container');
  cartesContainer.innerHTML = '';

  const deckClone = [...deck];
  const tirage = [];

  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * deckClone.length);
    tirage.push(deckClone.splice(index, 1)[0]);
  }

  tirage.forEach(carte => {
    const div = document.createElement('div');
    div.classList.add('carte');
    div.innerHTML = `<h2>${carte.carte}</h2><p>${carte.effet}</p>`;
    cartesContainer.appendChild(div);
  });
}
