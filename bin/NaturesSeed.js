const mongoose = require('mongoose');
const Nature = require('../models/Nature');

const dbName = 'pokemon-team';
mongoose.connect(`mongodb://localhost/${dbName}`);

const natures = [
  {
    name: 'Lonely',
    stats: {
      Atk: 1.1,
      Def: 0.9
    }
  },
  {
    name: 'Adamant',
    stats: {
      Atk: 1.1,
      SpAtk: 0.9
    }
  },
  {
    name: 'Naughty',
    stats: {
      Atk: 1.1,
      SpDef: 0.9
    }
  },
  {
    name: 'Brave',
    stats: {
      Atk: 1.1,
      Spe: 0.9
    }
  },
  {
    name: 'Bold',
    stats: {
      Def: 1.1,
      Atk: 0.9
    }
  },
  {
    name: 'Impish',
    stats: {
      Def: 1.1,
      SpAtk: 0.9
    }
  },
  {
    name: 'Lax',
    stats: {
      Def: 1.1,
      SpDef: 0.9
    }
  },
  {
    name: 'Relaxed',
    stats: {
      Def: 1.1,
      Spe: 0.9
    }
  },
  {
    name: 'Modest',
    stats: {
      SpAtk: 1.1,
      Atk: 0.9
    }
  },
  {
    name: 'Mild',
    stats: {
      SpAtk: 1.1,
      Def: 0.9
    }
  },
  {
    name: 'Rash',
    stats: {
      SpAtk: 1.1,
      SpDef: 0.9
    }
  },
  {
    name: 'Quiet',
    stats: {
      SpAtk: 1.1,
      Spe: 0.9
    }
  },
  {
    name: 'Calm',
    stats: {
      SpDef: 1.1,
      Atk: 0.9
    }
  },
  {
    name: 'Gentle',
    stats: {
      SpDef: 1.1,
      Def: 0.9
    }
  },
  {
    name: 'Careful',
    stats: {
      SpDef: 1.1,
      SpAtk: 0.9
    }
  },
  {
    name: 'Sassy',
    stats: {
      SpDef: 1.1,
      Spe: 0.9
    }
  },
  {
    name: 'Timid',
    stats: {
      Spe: 1.1,
      Atk: 0.9
    }
  },
  {
    name: 'Hasty',
    stats: {
      Spe: 1.1,
      Def: 0.9
    }
  },
  {
    name: 'Jolly',
    stats: {
      Spe: 1.1,
      SpAtk: 0.9
    }
  },
  {
    name: 'Naive',
    stats: {
      Spe: 1.1,
      SpDef: 0.9
    }
  },
  {
    name: 'Bashful'
  },
  {
    name: 'Docile'
  },
  {
    name: 'Hardy'
  },
  {
    name: 'Quirky'
  },
  {
    name: 'Serious'
  }
];

Nature.create(natures, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${natures.length} natures`);
});
