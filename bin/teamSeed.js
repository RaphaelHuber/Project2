const mongoose = require('mongoose');
const Team = require('../models/Team');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const teams = [
  {
    name: 'Test3',
    trainer: 'Gui',
    pokemon: ['5c6442a295c4a13f92c95163', '5c64432795c4a13f92c95165', '5c6448e10d81204866435093', '5c6448e70d81204866435095', '5c6448e70d81204866435095']
  }
];

Team.create(teams, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${teams.length} teams`);
});
