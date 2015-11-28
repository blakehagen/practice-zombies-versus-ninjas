var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NinjaSchema = new Schema({
    name: {type: String, required: true},
    health: { type: Number, default: 100},
    weapons: [{ type: String }],
    skills: [{ type: String }],
    abilities: [{ type: String }],
    zombiesKilled: [{type: Schema.Types.ObjectId, ref: 'Zombie'}]
});

module.exports = mongoose.model('Ninja', NinjaSchema);