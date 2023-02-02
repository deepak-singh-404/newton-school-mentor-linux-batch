const express = require('express');
const { connectMongoDB } = require('./database');
const app = express();

//Middlewares
app.use(express.json())
app.use('/api', require('./routes/userRoutes'))

const PORT = 5000

app.listen(PORT, async () => {
    try {
        console.log("SERVER LISTENING ON PORT: ", PORT)
        await connectMongoDB()
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    }
    catch (err) {
        console.log("****ERROR*******", err)
    }
})

