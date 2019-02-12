const mongoose = require('mongoose');
const Move = require('../models/Move');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const moves = [
  {
    name: 'Aqua Jet',
    type: 'Water',
    category: 'Physical',
    power: 40
  },
  {
    name: 'Aqua Ring',
    type: 'Water',
    category: 'Status',
    power: 0
  },
  {
    name: 'Blizzard',
    type: 'Ice',
    category: 'Special',
    power: 120
  },
  {
    name: 'Body Slam',
    type: 'Normal',
    category: 'Physical',
    power: 120
  },
  {
    name: 'Body Slam',
    type: 'Normal',
    category: 'Physical',
    power: 85
  },
  {
    name: 'Dynamic Punch',
    type: 'Fighting',
    category: 'Physical',
    power: 100
  },
  {
    name: 'Focus Blast',
    type: 'Fighting',
    category: 'Special',
    power: 120
  },
  {
    name: 'Headbutt',
    type: 'Normal',
    category: 'Physical',
    power: 70
  },
  {
    name: 'Hydro Pump',
    type: 'Water',
    category: 'Special',
    power: 120
  },
  {
    name: 'Hyper Beam',
    type: 'Normal',
    category: 'Special',
    power: 150
  },
  {
    name: 'Mega Punch',
    type: 'Normal',
    category: 'Physical',
    power: 80
  },
  {
    name: 'Rain Dance',
    type: 'Water',
    category: 'Status',
    power: 0
  }
];

Move.create(moves, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${moves.length} moves`);
});
