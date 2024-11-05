const mongoose = require('mongoose')

const tournamentSchema = mongoose.Schema({
    name: { type: String, require: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    participants: [{ type:mongoose.Schema.Types.ObjectId, ref: 'User' }],
    isAwarded: { type: Boolean, default: false },
    prizeCredits: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: [ 'pending', 'ogoing', 'completed'], default: 'pending' }
})

exports.modules = mongoose.model('Tournament', tournamentSchema)