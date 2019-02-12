const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  dex: Number,
  name: String,
  funFacts: [String],
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
  moves: [String],
  abilities: String,
  nickname: String,
  item: String,
  trainer: String,
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
  },
  nature: String
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
