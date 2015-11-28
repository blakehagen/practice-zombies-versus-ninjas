var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ZombieSchema = new Schema({
    name: { type: String, required: true },
    health: { type: Number, default: 100 },
    attachedAppendages: [{
        name: { type: String, enum: ['Arm', 'Leg', 'Torso', 'Head', 'Foot'], default: 'Head', unique: true }
    }],
    skills: [{ type: String }],
    abilities: [{ type: String }],
    ninjasKilled: [{type: Schema.Types.ObjectId, ref: 'Ninja'}]
});

module.exports = mongoose.model('Zombie', ZombieSchema);