//Core package of nodejs, you dont have to install using npm

const http = require('http');

const PORT = 5000

const routes = require('./routes/index')

const server = http.createServer(routes)

server.listen(PORT, () => {
    console.log("SERVER STARTED ON PORT: ", PORT)
})
