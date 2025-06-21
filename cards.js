const cardDeck = [
  {
    "name": "Le Mat",
    "combat": "Tu ignores les attaques d'opportunité ce tour.",
    "voyage": "Tu es perçu comme inoffensif. Tout le monde te sous-estime.",
    "image": "img/major_arcana/TheFool.jpg"
  },
  {
    "name": "Le Bateleur",
    "combat": "Tu peux copier un sort de niveau 1 lancé autour de toi.",
    "voyage": "Tu gagnes la confiance immédiate dans toute nouvelle rencontre.",
    "image": "img/major_arcana/TheMagician.jpg"
  },
  {
    "name": "La Papesse",
    "combat": "Tu gagnes une barrière psychique de +2 en sauvegarde de Sagesse.",
    "voyage": "Tu es consulté comme sage même si tu n’as rien dit.",
    "image": "img/major_arcana/TheHighPriestess.jpg"
  },
  {
    "name": "L’Impératrice",
    "combat": "Tes sorts de soin soignent le double pendant 1 minute.",
    "voyage": "On te traite avec déférence partout où tu passes.",
    "image": "img/major_arcana/TheEmpress.jpg"
  },
  {
    "name": "L’Empereur",
    "combat": "Tu imposes un test de sauvegarde à tout ennemi proche (Effroi).",
    "voyage": "On t’écoute comme un leader. Sauf les autres leaders.",
    "image": "img/major_arcana/TheEmperor.jpg"
  },
  {
    "name": "Le Pape",
    "combat": "Tes alliés regagnent un slot de niveau 1 au choix.",
    "voyage": "Tu es vu comme un guide spirituel. Les religieux te suivent.",
    "image": "img/major_arcana/TheHierophant.jpg"
  },
  {
    "name": "L’Amoureux",
    "combat": "Deux ennemis se trompent de cible au prochain tour.",
    "voyage": "Un lien romantique ou étrange se crée autour de toi.",
    "image": "img/major_arcana/TheLovers.jpg"
  },
  {
    "name": "Le Chariot",
    "combat": "Tu gagnes +2 CA jusqu’à la fin du combat.",
    "voyage": "Tu reçois une aide de transport ou une monture inattendue.",
    "image": "img/major_arcana/TheChariot.jpg"
  },
  {
    "name": "La Justice",
    "combat": "Tu forces un ennemi à refaire un jet réussi.",
    "voyage": "Un conflit social se tourne immédiatement en ta faveur.",
    "image": "img/major_arcana/Justice.jpg"
  },
  {
    "name": "L’Hermite",
    "combat": "Tu es invisible 1 tour si tu ne bouges pas.",
    "voyage": "Tu es ignoré par tous sauf ceux en détresse ou besoin.",
    "image": "img/major_arcana/TheHermit.jpg"
  },
  {
    "name": "La Roue de Fortune",
    "combat": "Relance gratuite d’un jet raté (coût : 1d6 PV).",
    "voyage": "Choisis un événement aléatoire : un bon, un neutre, un mauvais.",
    "image": "img/major_arcana/WheelOfFortune.jpg"
  },
  {
    "name": "La Force",
    "combat": "Avantage à tous les tests de force ce combat.",
    "voyage": "Tout ton groupe reçoit +1 à un test social de son choix.",
    "image": "img/major_arcana/Strength.jpg"
  },
  {
    "name": "Le Pendu",
    "combat": "Tu lances un sort gratuitement, mais agis en dernier au tour suivant.",
    "voyage": "Tu reçois une intuition soudaine sur une situation bloquée.",
    "image": "img/major_arcana/TheHangedMan.jpg"
  },
  {
    "name": "La Mort",
    "combat": "Ton prochain sort inflige le double des dégâts (tu perds 1d10 PV).",
    "voyage": "Un événement important se termine, un nouveau commence.",
    "image": "img/major_arcana/Death.jpg"
  },
  {
    "name": "Tempérance",
    "combat": "Tu supprimes une condition négative sur toi ou un allié.",
    "voyage": "Une tension est suspendue : tous se calment pendant 1 minute.",
    "image": "img/major_arcana/Temperance.jpg"
  },
  {
    "name": "Le Diable",
    "combat": "Tes attaques infligent le double, mais tu es à découvert.",
    "voyage": "Un mensonge, un désir ou une vérité cachée surgit autour de toi.",
    "image": "img/major_arcana/TheDevil.jpg"
  },
  {
    "name": "La Tour",
    "combat": "Explosion magique autour de toi : 2d8 dégâts dans un rayon de 3m.",
    "voyage": "Un secret ou un complot est révélé brutalement.",
    "image": "img/major_arcana/TheTower.jpg"
  },
  {
    "name": "L’Étoile",
    "combat": "Tous les alliés reprennent 1d8 PV et 1 slot mineur.",
    "voyage": "Quelqu’un t’idéalise ou veut te suivre.",
    "image": "img/major_arcana/TheStar.jpg"
  },
  {
    "name": "La Lune",
    "combat": "Tu infliges désavantage à un ennemi ciblé jusqu'à son prochain tour.",
    "voyage": "Tu devines un mensonge ou une intention cachée.",
    "image": "img/major_arcana/TheMoon.jpg"
  },
  {
    "name": "Le Soleil",
    "combat": "Tous les alliés proches ont +1 à tout pendant 2 tours.",
    "voyage": "Tous les PNJ deviennent bienveillants temporairement.",
    "image": "img/major_arcana/TheSun.jpg"
  },
  {
    "name": "Le Jugement",
    "combat": "Tu rejoues immédiatement après ce tour si tu réussis un test de CHA.",
    "voyage": "Un élément de ton passé resurgit — mais pour te servir.",
    "image": "img/major_arcana/Judgement.jpg"
  },
  {
    "name": "Le Monde",
    "combat": "Tu choisis un effet parmi 3 autres cartes révélées.",
    "voyage": "Tu es en harmonie avec l’environnement et le monde t’aide.",
    "image": "img/major_arcana/TheWorld.jpg"
  },
  {
    "name": "As de Coupes",
    "combat": "Tu soignes 1 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/AceWisdom.jpg"
  },
  {
    "name": "Deux de Coupes",
    "combat": "Tu soignes 1d2 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/2Wisdom.jpg"
  },
  {
    "name": "Trois de Coupes",
    "combat": "Tu soignes 1d3 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/3Wisdom.jpg"
  },
  {
    "name": "Quatre de Coupes",
    "combat": "Tu soignes 1d4 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/4Wisdom.jpg"
  },
  {
    "name": "Cinq de Coupes",
    "combat": "Tu soignes 1d5 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/5Wisdom.jpg"
  },
  {
    "name": "Six de Coupes",
    "combat": "Tu soignes 1d6 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/6Wisdom.jpg"
  },
  {
    "name": "Sept de Coupes",
    "combat": "Tu soignes 1d7 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/7Wisdom.jpg"
  },
  {
    "name": "Huit de Coupes",
    "combat": "Tu soignes 1d8 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/8Wisdom.jpg"
  },
  {
    "name": "Neuf de Coupes",
    "combat": "Tu soignes 1d9 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/9Wisdom.jpg"
  },
  {
    "name": "Dix de Coupes",
    "combat": "Tu soignes 1d10 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/10Wisdom.jpg"
  },
  {
    "name": "Valet de Coupes",
    "combat": "Tu soignes 2d5 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/PageWisdom.jpg"
  },
  {
    "name": "Cavalier de Coupes",
    "combat": "Tu soignes 2d6 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/KnightWisdom.jpg"
  },
  {
    "name": "Reine de Coupes",
    "combat": "Tu soignes 2d8 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/QueenWisdom.jpg"
  },
  {
    "name": "Roi de Coupes",
    "combat": "Tu soignes 3d5 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes temporairement +1 en Sagesse.",
    "image": "img/wisdom/KingWisdom.jpg"
  },
  {
    "name": "As de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/AceIntelligence.jpg"
  },
  {
    "name": "Deux de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/2Intelligence.jpg"
  },
  {
    "name": "Trois de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/3Intelligence.jpg"
  },
  {
    "name": "Quatre de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/4Intelligence.jpg"
  },
  {
    "name": "Cinq de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/5Intelligence.jpg"
  },
  {
    "name": "Six de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/6Intelligence.jpg"
  },
  {
    "name": "Sept de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/7Intelligence.jpg"
  },
  {
    "name": "Huit de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/8Intelligence.jpg"
  },
  {
    "name": "Neuf de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/9Intelligence.jpg"
  },
  {
    "name": "Dix de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/10Intelligence.jpg"
  },
  {
    "name": "Valet de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/PageIntelligence.jpg"
  },
  {
    "name": "Cavalier de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/KnightIntelligence.jpg"
  },
  {
    "name": "Reine de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/QueenIntelligence.jpg"
  },
  {
    "name": "Roi de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/KingIntelligence.jpg"
  },
  {
    "name": "As de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/AceStrength.jpg"
  },
  {
    "name": "Deux de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/2Strength.jpg"
  },
  {
    "name": "Trois de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/3Strength.jpg"
  },
  {
    "name": "Quatre de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/4Strength.jpg"
  },
  {
    "name": "Cinq de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/5Strength.jpg"
  },
  {
    "name": "Six de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/6Strength.jpg"
  },
  {
    "name": "Sept de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/7Strength.jpg"
  },
  {
    "name": "Huit de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/8Strength.jpg"
  },
  {
    "name": "Neuf de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/9Strength.jpg"
  },
  {
    "name": "Dix de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/10Strength.jpg"
  },
  {
    "name": "Valet de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/PageStrength.jpg"
  },
  {
    "name": "Cavalier de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/KnightStrength.jpg"
  },
  {
    "name": "Reine de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/QueenStrength.jpg"
  },
  {
    "name": "Roi de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/KingStrength.jpg"
  },
  {
    "name": "As de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/AceCharisma.jpg"
  },
  {
    "name": "Deux de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/2Charisma.jpg"
  },
  {
    "name": "Trois de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/3Charisma.jpg"
  },
  {
    "name": "Quatre de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/4Charisma.jpg"
  },
  {
    "name": "Cinq de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/5Charisma.jpg"
  },
  {
    "name": "Six de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/6Charisma.jpg"
  },
  {
    "name": "Sept de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/7Charisma.jpg"
  },
  {
    "name": "Huit de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/8Charisma.jpg"
  },
  {
    "name": "Neuf de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/9Charisma.jpg"
  },
  {
    "name": "Dix de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/10Charisma.jpg"
  },
  {
    "name": "Valet de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/PageCharisma.jpg"
  },
  {
    "name": "Cavalier de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/KnightCharisma.jpg"
  },
  {
    "name": "Reine de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/QueenCharisma.jpg"
  },
  {
    "name": "Roi de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/major_arcana/KingCharisma.jpg"
  }
];