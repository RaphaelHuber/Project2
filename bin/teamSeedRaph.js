const mongoose = require('mongoose');
const Team = require('../models/Team');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const teams = [
  {
    name: 'Test3',
    trainer: 'Raph',
    pokemon: ['5c646c7a2781c45d0b032ec2', '5c64541ca916c85528271824', '5c64540aa916c85528271823', '5c6453eea916c85528271822', '5c6449f3b2651950920e3aa8', '5c6449c6b2651950920e3aa7']
  }
];

Team.create(teams, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${teams.length} teams`);
});
