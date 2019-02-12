const mongoose = require('mongoose');
const Species = require('../models/Species');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const species = [
  {
    dex: 9,
    name: 'Blastoise',
    funFacts: ['The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.', 'It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.', 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.'],
    frontSprite: '/images/front9.png',
    backSprite: String,
    type1: 'Water',
    baseStats: {
      HP: 79,
      Atk: 83,
      Def: 100,
      SpAtk: 85,
      SpDef: 105,
      Spe: 78
    },
    moves: ['Aqua Jet', 'Aqua Ring', 'Blizzard', 'Body Slam', 'Hydro Pump', 'Rain Dance'],
    abilities: ['Torrent']
  },
  {
    dex: 26,
    name: 'Raichu',
    funFacts: ['It can loose 100,000-volt bursts of electricity, instantly downing foes several times its size.', 'Its tail discharges electricity into the ground, protecting it from getting shocked.', 'When its electricity builds, its muscles are stimulated, and it becomes more aggressive than usual.', 'If the electric pouches in its cheeks become fully charged, both ears will stand straight up.'],
    frontSprite: '/images/front26.png',
    backSprite: String,
    type1: 'Electric',
    baseStats: {
      HP: 60,
      Atk: 90,
      Def: 55,
      SpAtk: 90,
      SpDef: 80,
      Spe: 100
    },
    moves: ['Dynamic Punch', 'Focus Blast', 'Headbutt', 'Hyper Beam', 'Mega Punch'],
    abilities: ['Static']
  }
];

Species.create(species, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${species.length} species`);
});
