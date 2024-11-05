const mongoose = require('mongoose')

const useSchemna = new mongoose.Schema({
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, enum: ['user', 'manager'], default: 'user' },
    credits: { type: Number, default: 0 }
})

module.exports = mongoose.model('User', useSchemna)