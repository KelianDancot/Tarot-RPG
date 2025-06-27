const tarotDeck = [
  {
    "name": "Le Fou (XXII)",
    "combat": "Lors de ce tour de combat, tu peux effectuer une action bonus inattendue (acrobatique, feinte, saut, etc.) sans malus.",
    "voyage": "Tu peux agir sans te faire remarquer : la première action imprévisible ou non conventionnelle de la journée ne provoque pas de réaction hostile immédiate.",
    "combatenvers": "Tu agis de manière désordonnée : désavantage à ton premier jet d’attaque ou de Dextérité en combat.",
    "voyageenvers": "Tu fais une erreur stupide : tu trébuches ou déclenches un petit événement gênant, attirant l’attention non désirée de tous les pnj.",
    "image": "img/major_arcana/TheFool.png"
  },
  {
    "name": "Le Bateleur (I)",
    "combat": "Tu peux copier un sort de niveau 1 lancé autour de toi dans ce combat.",
    "voyage": "Tu peux copier un sort de niveau 1 lancé autour de toi aujourd'hui.",
    "combatenvers": "Lance un des effets de magie sauvage directement",
    "voyageenvers": "Lance un des effets de magie sauvage directement",
    "image": "img/major_arcana/TheMagician.png"
  },
  {
    "name": "La Papesse (II)",
    "combat": "Tu peux identifier instantanément une faiblesse ou un point faible (vulnérabilité ou immunité) d’un ennemi.",
    "voyage": "Tu es consulté comme sage même si tu n’as rien dit.",
    "combatenvers": "Tu perd temporairement ta magie, pas de sort ce tour ci.",
    "voyageenvers": "Toute tentative d’enquête ou de recherche d’information te donne des fausses pistes ou de mauvaises interprétations.",
    "image": "img/major_arcana/TheHighPriestess.png"
  },
  {
    "name": "L’Impératrice (III)",
    "combat": "Tu peux soigner un allié de 1d6 PV en action bonus, une fois par combat.",
    "voyage": "T'es jets de survie obtienne un avantage et un animal non hostile peut t'aider une fois dans la journée.",
    "combatenvers": "Tu est anti-heal pendant toute la durée du combat.",
    "voyageenvers": "Tu est trop absorbé par les plaisirs de la vie (amour, alcool, argent)",
    "image": "img/major_arcana/TheEmpress.png"
  },
  {
    "name": "L’Empereur (IV)",
    "combat": "Tu inspires un allié proche : il peut utiliser une réaction pour te protéger (bonus +2 AC une fois).",
    "voyage": "Une fois dans la journée, tu peux intimider ou impressionner une créature intelligente non-alliée avec un avantage sur ton jet de Charisme.",
    "combatenvers": "Tu deviens une cible évidente. Tous les ennemis t’attaque avec avantage.",
    "voyageenvers": "Les personnes de la classe sociale basse te méprise pour la journée",
    "image": "img/major_arcana/TheEmperor.png"
  },
  {
    "name": "Le Pape (V)",
    "combat": "1d4 dégât radiant bonus sur ton prochain sort.",
    "voyage": "Tu es vu comme un guide spirituel. Les religieux te suivent.",
    "combatenvers": "Tu perd la foi, désavantage à tous tes jets jusqu’à la fin de ton prochain tour.",
    "voyageenvers": "Ton personnage devient raciste pour la journée (RP)",
    "image": "img/major_arcana/TheHierophant.png"
  },
  {
    "name": "L’Amoureux (VI)",
    "combat": "Deux ennemis se trompent de cible au prochain tour.",
    "voyage": "Un lien romantique ou étrange se crée autour de toi.",
    "combatenvers": "Tu protèges quelqu’un instinctivement, au détriment de toi : subis -2 AC pour 1 round.",
    "voyageenvers": "Tu fais l'opposé de ce que le groupe cherche à faire pour la journée",
    "image": "img/major_arcana/TheLovers.png"
  },
  {
    "name": "Le Chariot (VII)",
    "combat": "Tu fonces droit vers ton objectif. Vitesse augmentée de 3 m. Une fois, ignore les terrains difficiles.",
    "voyage": "Tu reçois une aide de transport ou une monture inattendue.",
    "combatenvers": "Tu fonces tête baissée. Vitesse augmentée de 1,5 m (5 ft). -2 d'AC pour le combat.",
    "voyageenvers": "Tu ne cherche pas à comprendre la prochaine explication que l'on essaye de t'apporter.",
    "image": "img/major_arcana/TheChariot.png"
  },
  {
    "name": "La Justice (VIII)",
    "combat": "Si tu es frappé injustement (attaque sournoise ou sort sans avertissement), tu gagnes +2 CA jusqu’à ton prochain tour.",
    "voyage": "Le prochain conflit social se tourneras en ta faveur.",
    "combatenvers": "La prochaine attaque que tu te prends sera à son maximum de dégâts flat.",
    "voyageenvers": "A chaque mauvaise action de la journée tu prend 1d4 de dégâts holy",
    "image": "img/major_arcana/Justice.png"
  },
  {
    "name": "L’Hermite (IX)",
    "combat": "Les ennemies t'oublie pendant 1 tour.",
    "voyage": "Tu obtiens un avantage pour les jets de sagesse",
    "combatenvers": "Silence pendant 1 tour",
    "voyageenvers": "Tu est constamment oublié et ignorer par le groupe pendant une journée",
    "image": "img/major_arcana/TheHermit.png"
  },
  {
    "name": "La Roue de Fortune (X)",
    "combat": "Lance 1d6 à chaque tour qui te donne un effet bénéfique aléatoire",
    "voyage": "Dans la journée vous trouvé 1d10 de po",
    "combatenvers": "Lance 1d6 à chaque tour qui te donne un effet négatif aléatoire",
    "voyageenvers": "Dans la journée vous perder 1d10 de po",
    "image": "img/major_arcana/WheelOfFortune.png"
  },
  {
    "name": "La Force (XI)",
    "combat": "Avantage à tous les tests de force ce combat.",
    "voyage": "Tout ton groupe reçoit +1 à un test d'intimidation ou de force de son choix dans la journée.",
    "combatenvers": "Tu succombes à la rage. Tu tire sur tous ce qui bouge au tour suivant.",
    "voyageenvers": "Tu envoie une mandale dans le prochain personnage à qui tu parle",
    "image": "img/major_arcana/Strength.png"
  },
  {
    "name": "Le Pendu (XII)",
    "combat": "Tu est immunisé au prochain contrôle.",
    "voyage": "Tu peux retiré une carte au prochain court repos.",
    "combatenvers": "Tu perds ton action lors du premier round à cause d’une hésitation mentale.",
    "voyageenvers": "Tu es bloqué mentalement par l’indécision : tu ne peux pas prendre d’initiative sociale majeure",
    "image": "img/major_arcana/TheHangedMan.png"
  },
  {
    "name": "La Mort (XIII)",
    "combat": "Quand un ennemi tombe à 0 PV la première fois dans le combat, tu récupères une action.",
    "voyage": "Un pnj mauvais risque d'avoir un problème cardiaque au cours de la journée",
    "combatenvers": "Tu lance une pièce si c'est pile, tu prend 1d14 nécrotiques si c'est face 1d7",
    "voyageenvers": "Un pnj amical risque d'avoir un problème cardiaque au cours de la journée",
    "image": "img/major_arcana/Death.png"
  },
  {
    "name": "La Tempérance (XIV)",
    "combat": "le prochain ennemi tombe à 0 PV, tu regagnes 1d4 PV",
    "voyage": "toutes tes stats passe minimum à 12 pour ton prochain test",
    "combatenvers": "le prochain ennemi tombe à 0 PV, tu perds 1d4 PV",
    "voyageenvers": "toutes tes stats passe maximum à 8 pour ton prochain test",
    "image": "img/major_arcana/Temperance.png"
  },
  {
    "name": "Le Diable (XV)",
    "combat": "Invoque un diablotin à tes côtés au combat.",
    "voyage": "Vous marchander comme le diable ! Votre prochain marchandage gagne un avantage.",
    "combatenvers": "Invoque un diablotin ennemis au combat.",
    "voyageenvers": "On ne marchande pas avec le diable ! Vous ne pouvez plus marchander pendant 3 heures.",
    "image": "img/major_arcana/TheDevil.png"
  },
  {
    "name": "La Tour (XVI)",
    "combat": "Explosion magique autour de toi : 2d8 dégâts de force dans un rayon de 3m.",
    "voyage": "Tu dévoiles une vérité cachée (secret majeur, traîtrise, mensonge).",
    "combatenvers": "Les ennemis ont appris de vos erreurs, soigne 2d8 de dégâts dans un rayon de 3m",
    "voyageenvers": "Tu est incapable de mentir pendant la journée.",
    "image": "img/major_arcana/TheTower.png"
  },
  {
    "name": "L’Étoile (XVII)",
    "combat": "Tu gagnes une relance sur un dé de sauvegarde.",
    "voyage": "Tu gagnes un point d’inspiration temporaire pour relancer un dé sur un test.",
    "combatenvers": "Tu deviens confus pendant ton prochain tour",
    "voyageenvers": "Tu agis avec excès de confiance. Ton premier jet est fait à désavantage.",
    "image": "img/major_arcana/TheStar.png"
  },
  {
    "name": "La Lune (XVIII)",
    "combat": "Tant que tu ne bouge pas tu deviens invisible pour le prochain tour.",
    "voyage": "Tu devines un mensonge ou une intention cachée. Reçois un avantage sur le prochain test d'intuition.",
    "combatenvers": "Tu prends tes jambes à ton cou pour le prochain round",
    "voyageenvers": "Tu te sens obligé de mentir sur tes 3 prochaines intéractions.",
    "image": "img/major_arcana/TheMoon.png"
  },
  {
    "name": "Le Soleil (XIX)",
    "combat": "Tous les alliés à 3m gagnent +1 à l’attaque pour 1 round",
    "voyage": "Tu es un phare d’énergie. Tous les alliés dans un rayon de 3 m ont avantage à leur prochain test.",
    "combatenvers": "Vous êtes aveuglé par la lumière pendant 1 tour.",
    "voyageenvers": "Tu es un phare bien trop lumineux. Tu perds de la discrétion pour la journée",
    "image": "img/major_arcana/TheSun.png"
  },
  {
    "name": "Le Jugement (XX)",
    "combat": "Reçois une action bonus supplémentaire",
    "voyage": "Tu bénéficies du retour d'une bonne action passée : un PNJ que tu as aidé, un acte oublié ou une dette ancienne te revient positivement.",
    "combatenvers": "Prenez une attaque de l'ennemis le plus proche, si aucun ennemis n'est proche prenez 1d6 holy",
    "voyageenvers": "Une faute ancienne ressurgit : un PNJ trahi, une dette non payée, un acte malveillant revient sous forme de poursuite, trahison ou malus social.",
    "image": "img/major_arcana/Judgement.png"
  },
  {
    "name": "Le Monde (XXI)",
    "combat": "Tu choisis un effet parmi 3 autres cartes révélées.",
    "voyage": "Tu choisis un effet parmi 3 autres cartes révélées.",
    "combatenvers": "Tu choisis le pire des effets parmi 3 autres cartes révélées.",
    "voyageenvers": "Tu choisis le pire des effets parmi 3 autres cartes révélées.",
    "image": "img/major_arcana/TheWorld.png"
  },
  {
    "name": "As de Coupes",
    "combat": "Tu fais perdre 1 PV à un allié ou à toi-même.",
    "voyage": "Tu perds -1 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/AceWisdom.png"
  },
  {
    "name": "Deux de Coupes",
    "combat": "Tu fais perdre 1d2 PV à un allié ou à toi-même.",
    "voyage": "Tu perds -2 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/2Wisdom.png"
  },
  {
    "name": "Trois de Coupes",
    "combat": "Tu fais perdre 1d3 PV à un allié ou à toi-même.",
    "voyage": "Tu perds -3 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/3Wisdom.png"
  },
  {
    "name": "Quatre de Coupes",
    "combat": "Tu fais perdre 1d4 PV à un allié ou à toi-même.",
    "voyage": "Tu perds -4 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/4Wisdom.png"
  },
  {
    "name": "Cinq de Coupes",
    "combat": "Tu fais perdre 1d5 PV à un allié ou à toi-même.",
    "voyage": "Tu perds -5 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/5Wisdom.png"
  },
  {
    "name": "Six de Coupes",
    "combat": "Tu soignes 1 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +1 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/6Wisdom.png"
  },
  {
    "name": "Sept de Coupes",
    "combat": "Tu soignes 1d2 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +2 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/7Wisdom.png"
  },
  {
    "name": "Huit de Coupes",
    "combat": "Tu soignes 1d3 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +3 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/8Wisdom.png"
  },
  {
    "name": "Neuf de Coupes",
    "combat": "Tu soignes 1d4 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +4 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/9Wisdom.png"
  },
  {
    "name": "Dix de Coupes",
    "combat": "Tu soignes 1d5 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +5 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/10Wisdom.png"
  },
  {
    "name": "Valet de Coupes",
    "combat": "Tu soignes 2d5 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +11 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/PageWisdom.png"
  },
  {
    "name": "Cavalier de Coupes",
    "combat": "Tu soignes 2d6 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +12 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/KnightWisdom.png"
  },
  {
    "name": "Reine de Coupes",
    "combat": "Tu soignes 2d8 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +13 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/QueenWisdom.png"
  },
  {
    "name": "Roi de Coupes",
    "combat": "Tu soignes 3d5 PV à un allié ou à toi-même.",
    "voyage": "Tu gagnes +14 sur ton prochain test de Sagesse.",
    "image": "img/wisdom/KingWisdom.png"
  },
  {
    "name": "As de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/AceIntelligence.png"
  },
  {
    "name": "Deux de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/2Intelligence.png"
  },
  {
    "name": "Trois de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/3Intelligence.png"
  },
  {
    "name": "Quatre de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/4Intelligence.png"
  },
  {
    "name": "Cinq de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/5Intelligence.png"
  },
  {
    "name": "Six de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/6Intelligence.png"
  },
  {
    "name": "Sept de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/7Intelligence.png"
  },
  {
    "name": "Huit de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/8Intelligence.png"
  },
  {
    "name": "Neuf de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/9Intelligence.png"
  },
  {
    "name": "Dix de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/10Intelligence.png"
  },
  {
    "name": "Valet de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/PageIntelligence.png"
  },
  {
    "name": "Cavalier de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/KnightIntelligence.png"
  },
  {
    "name": "Reine de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/QueenIntelligence.png"
  },
  {
    "name": "Roi de Épées",
    "combat": "Ton prochain jet d’attaque obtient un bonus de +2.",
    "voyage": "Tu gagnes temporairement +1 en Intelligence.",
    "image": "img/intelligence/KingIntelligence.png"
  },
  {
    "name": "As de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/AceStrength.png"
  },
  {
    "name": "Deux de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/2Strength.png"
  },
  {
    "name": "Trois de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/3Strength.png"
  },
  {
    "name": "Quatre de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/4Strength.png"
  },
  {
    "name": "Cinq de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/5Strength.png"
  },
  {
    "name": "Six de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/6Strength.png"
  },
  {
    "name": "Sept de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/7Strength.png"
  },
  {
    "name": "Huit de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/8Strength.png"
  },
  {
    "name": "Neuf de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/9Strength.png"
  },
  {
    "name": "Dix de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/10Strength.png"
  },
  {
    "name": "Valet de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/PageStrength.png"
  },
  {
    "name": "Cavalier de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/KnightStrength.png"
  },
  {
    "name": "Reine de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/QueenStrength.png"
  },
  {
    "name": "Roi de Bâtons",
    "combat": "Ton prochain sort est amplifié ou plus rapide.",
    "voyage": "Tu gagnes temporairement +1 en Force.",
    "image": "img/strength/KingStrength.png"
  },
  {
    "name": "As de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/AceCharisma.png"
  },
  {
    "name": "Deux de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/2Charisma.png"
  },
  {
    "name": "Trois de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/3Charisma.png"
  },
  {
    "name": "Quatre de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/4Charisma.png"
  },
  {
    "name": "Cinq de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/5Charisma.png"
  },
  {
    "name": "Six de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/6Charisma.png"
  },
  {
    "name": "Sept de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/7Charisma.png"
  },
  {
    "name": "Huit de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/8Charisma.png"
  },
  {
    "name": "Neuf de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/9Charisma.png"
  },
  {
    "name": "Dix de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/10Charisma.png"
  },
  {
    "name": "Valet de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/PageCharisma.png"
  },
  {
    "name": "Cavalier de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/KnightCharisma.png"
  },
  {
    "name": "Reine de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/QueenCharisma.png"
  },
  {
    "name": "Roi de Deniers",
    "combat": "Tu gagnes un avantage à ton prochain test d’objet ou de persuasion.",
    "voyage": "Tu gagnes temporairement +1 en Charisme.",
    "image": "img/charisme/KingCharisma.png"
  }
];

// Ajout automatique des effets inversés uniquement pour les arcanes majeurs
tarotDeck.forEach(card => {
  if (card.image.includes('major_arcana')) {
    card.combatReversed = `${card.combatenvers}`;
    card.voyageReversed = `${card.voyageenvers}`;
  }
});