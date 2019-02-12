const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moveSchema = new Schema({
  name: String,
  type: String,
  category: { type: String, enum: ['Physical', 'Special', 'Status'] },
  power: Number
});

const Move = mongoose.model('Move', moveSchema);

module.exports = Move;
