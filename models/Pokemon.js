const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
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
  abilities: String,
  nickname: String,
  item: String,
  level: Number,
  ivs: {
    HP: Number,
    Atk: Number,
    Def: Number,
    SpAtk: Number,
    SpDef: Number,
    Spd: Number
  },
  evs: {
    HP: Number,
    Atk: Number,
    Def: Number,
    SpAtk: Number,
    SpDef: Number,
    Spd: Number
  },
  nature: String,
  natureMods: {
    HP: Number,
    Atk: Number,
    Def: Number,
    SpAtk: Number,
    SpDef: Number,
    Spd: Number
  }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
