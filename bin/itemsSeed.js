const mongoose = require('mongoose');
const Item = require('../models/Item');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const items = [
  {
    name: 'Choice Band',
    stats: {
      Atk: 1.5
    }
  },
  {
    name: 'Choice Specs',
    stats: {
      SpAtk: 1.5
    }
  },
  {
    name: 'Choice Scarf',
    stats: {
      Spe: 1.5
    }
  },
  {
    name: 'Life Orb',
    stats: {
      Atk: 1.3,
      SpAtk: 1.3
    }
  }
];

Item.create(items, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${items.length} items`);
});
