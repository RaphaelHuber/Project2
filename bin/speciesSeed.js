const mongoose = require('mongoose');
const Species = require('../models/Species');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const species = [
  {
    dex: 9,
    name: 'Blastoise',
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
