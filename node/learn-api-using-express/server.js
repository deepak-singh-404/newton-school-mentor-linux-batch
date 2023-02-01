const express = require('express')
const app = express()
const cors = require('cors')

const whitelist = ['http://localhost:3000', 'https://servimate.netlify.app']

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors())

app.use(express.json())

const routes = require('./routes/index')

app.use(routes)

const PORT = 5000

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT: ", PORT)
})
