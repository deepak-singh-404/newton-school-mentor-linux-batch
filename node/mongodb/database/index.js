const mongoose = require('mongoose');

let MONGO_URI = "mongodb://127.0.0.1:27017/learnM"

const connectMongoDB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const mongoConnection = await mongoose.connect(MONGO_URI)
            resolve(mongoConnection)
        }
        catch (err) {
            reject(err)
        }
    })
}

module.exports = { connectMongoDB }
