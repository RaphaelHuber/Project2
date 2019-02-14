const mongoose = require('mongoose');
const Species = require('../models/Species');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const species = [
  {
    dex: 1,
    name: 'Venusaur',
    funFacts: ['It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.', 'After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.'],
    frontSprite: '/images/front1.png',
    backSprite: '/images/back1.png',
    type1: 'Grass',
    type2: 'Poison',
    baseStats: {
      HP: 80,
      Atk: 82,
      Def: 83,
      SpAtk: 100,
      SpDef: 100,
      Spe: 80
    },
    moves: ['Body Slam', 'Earthquake', 'Giga Drain', 'Leaf Storm', 'Sludge Bomb', 'Solar Beam'],
    abilities: ['Overgrow']
  },
  {
    dex: 6,
    name: 'Charizard',
    funFacts: [],
    frontSprite: '/images/front6.png',
    backSprite: '/images/back6.png',
    type1: 'Fire',
    type2: 'Flying',
    baseStats: {
      HP: 78,
      Atk: 84,
      Def: 78,
      SpAtk: 109,
      SpDef: 85,
      Spe: 100
    },
    moves: ['Aerial Ace', 'Dragon Claw', 'Earthquake', 'Flamethrower', 'Solar Beam', 'Thunder Punch'],
    abilities: ['Blaze']
  },
  {
    dex: 9,
    name: 'Blastoise',
    funFacts: ['The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.', 'It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.'],
    frontSprite: '/images/front9.png',
    backSprite: '/images/back9.png',
    type1: 'Water',
    baseStats: {
      HP: 79,
      Atk: 83,
      Def: 100,
      SpAtk: 85,
      SpDef: 105,
      Spe: 78
    },
    moves: ['Aqua Jet', 'Blizzard', 'Body Slam', 'Hydro Pump', 'Ice Beam', 'Rain Dance'],
    abilities: ['Torrent']
  },
  {
    dex: 26,
    name: 'Raichu',
    funFacts: ['It can loose 100,000-volt bursts of electricity, instantly downing foes several times its size.', 'Its tail discharges electricity into the ground, protecting it from getting shocked.'],
    frontSprite: '/images/front26.png',
    backSprite: '/images/back26.png',
    type1: 'Electric',
    baseStats: {
      HP: 60,
      Atk: 90,
      Def: 55,
      SpAtk: 90,
      SpDef: 80,
      Spe: 100
    },
    moves: ['Focus Blast', 'Headbutt', 'Hyper Beam', 'Mega Punch', 'Thunder Wave', 'Thunderbolt'],
    abilities: ['Static']
  },
  {
    dex: 65,
    name: 'Alakazam',
    funFacts: ['Its brain can outperform a super-computer. Its intelligence quotient is said to be 5,000.', 'The spoons clutched in its hands are said to have been created by its psychic powers.'],
    frontSprite: '/images/front65.png',
    backSprite: '/images/back65.png',
    type1: 'Psychic',
    baseStats: {
      HP: 55,
      Atk: 50,
      Def: 45,
      SpAtk: 135,
      SpDef: 85,
      Spe: 120
    },
    moves: ['Calm Mind', 'Focus Blast', 'Psychic', 'Recover', 'Shadow Ball', 'Thunder Wave'],
    abilities: ['Inner Focus', 'Synchronize']
  },
  {
    dex: 82,
    name: 'Magneton',
    funFacts: ['Formed by several Magnemites linked together. They frequently appear when sunspots flare up.', 'When many Magneton gather together, the resulting magnetic storm disrupts radio waves.'],
    frontSprite: '/images/front82.png',
    backSprite: '/images/back82.png',
    type1: 'Electric',
    type2: 'Steel',
    baseStats: {
      HP: 50,
      Atk: 60,
      Def: 95,
      SpAtk: 120,
      SpDef: 70,
      Spe: 70
    },
    moves: ['Hyper Beam', 'Rain Dance', 'Swift', 'Thunderbolt'],
    abilities: ['Magnet Pull', 'Sturdy']
  },
  {
    dex: 112,
    name: 'Rhydon',
    funFacts: ['Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.', 'It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.'],
    frontSprite: '/images/front112.png',
    backSprite: '/images/back112.png',
    type1: 'Ground',
    type2: 'Rock',
    baseStats: {
      HP: 105,
      Atk: 130,
      Def: 120,
      SpAtk: 45,
      SpDef: 45,
      Spe: 40
    },
    moves: ['Crunch', 'Earthquake', 'Fire Punch', 'Stone Edge'],
    abilities: ['Lightning Rod', 'Rock Head']
  },
  {
    dex: 130,
    name: 'Gyarados',
    funFacts: ['Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.', 'They say that during past wars, Gyarados would appear and leave blazing ruins in its wake.'],
    frontSprite: '/images/front130.png',
    backSprite: '/images/back130.png',
    type1: 'Water',
    type2: 'Flying',
    baseStats: {
      HP: 95,
      Atk: 125,
      Def: 79,
      SpAtk: 60,
      SpDef: 100,
      Spe: 81
    },
    moves: ['Dragon Dance', 'Earthquake', 'Ice Fang', 'Roar', 'Stone Edge', 'Waterfall'],
    abilities: ['Intimidate']
  },
  {
    dex: 143,
    name: 'Snorlax',
    funFacts: ['Snorlax\'s typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.', 'Its stomach can digest any kind of food, even if it happens to be moldy or rotten.'],
    frontSprite: '/images/front143.png',
    backSprite: '/images/back143.png',
    type1: 'Normal',
    baseStats: {
      HP: 160,
      Atk: 110,
      Def: 65,
      SpAtk: 65,
      SpDef: 110,
      Spe: 30
    },
    moves: ['Body Slam', 'Brick Break', 'Rest', 'Sleep Talk'],
    abilities: ['Immunity', 'Thick Fat']
  },
  {
    dex: 149,
    name: 'Dragonite',
    funFacts: ['An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.', 'Dragonite is capable of circling the globe in just sixteen hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.'],
    frontSprite: '/images/front149.png',
    backSprite: '/images/back149.png',
    type1: 'Dragon',
    type2: 'Flying',
    baseStats: {
      HP: 91,
      Atk: 134,
      Def: 95,
      SpAtk: 100,
      SpDef: 100,
      Spe: 80
    },
    moves: ['Body Slam', 'Barrier', 'Dragon Claw', 'Earthquake', 'Focus Blast', 'Thunderbolt'],
    abilities: ['Inner Focus']
  }
];

Species.create(species, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${species.length} species`);
});
