const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  trainer: String,
  pokemon: [{ type: Schema.Types.ObjectId, ref: 'Pokemon' }]
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
