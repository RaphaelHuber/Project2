const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const speciesSchema = new Schema({
  dex: Number,
  name: String,
  frontSprite: String,
  backSprite: String,
  type1: String,
  type2: { type: String, default: 'Neutral' },
  baseStats: {
    HP: Number,
    Atk: Number,
    Def: Number,
    SpAtk: Number,
    SpDef: Number,
    Spd: Number
  },
  moves: [String],
  abilities: [String]
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;
