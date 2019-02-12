const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const natureSchema = new Schema({
  name: String,
  stats: {
    HP: { type: Number, default: 1 },
    Atk: { type: Number, default: 1 },
    Def: { type: Number, default: 1 },
    SpAtk: { type: Number, default: 1 },
    SpDef: { type: Number, default: 1 },
    Spe: { type: Number, default: 1 }
  }
});

const Nature = mongoose.model('Nature', natureSchema);

module.exports = Nature;
