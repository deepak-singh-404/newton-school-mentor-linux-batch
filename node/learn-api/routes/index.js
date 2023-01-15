const { healthController, getAllAssignments } = require('../controller/index')

const routes = async (req, res) => {
    if (req.url == "/api/health" && req.method == "GET") {
        healthController(req, res)
    }
    if (req.url == '/api/assignments' && req.method == "GET") {
        getAllAssignments(req, res)
    }
    
}

module.exports = routes