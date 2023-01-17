const express = require('express')
const app = express()

const routes = require('./routes/index')

app.use(routes)

const PORT = 5000

app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT: ", PORT)
})

