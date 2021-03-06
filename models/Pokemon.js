const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  dex: Number,
  name: String,
  funFacts: { type: [String], default: [''] },
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
    Spe: Number
  },
  trainer: String,
  item: String,
  nature: String,
  ability: String,
  moves: [String],
  ivs: {
    HP: Number,
    Atk: Number,
    Def: Number,
    SpAtk: Number,
    SpDef: Number,
    Spe: Number
  },
  evs: {
    HP: Number,
    Atk: Number,
    Def: Number,
    SpAtk: Number,
    SpDef: Number,
    Spe: Number
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
