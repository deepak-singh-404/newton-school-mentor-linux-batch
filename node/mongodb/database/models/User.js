const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)