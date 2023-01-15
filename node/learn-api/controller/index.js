const assignments = require('../database/assignments.json')
const { sendResponse } = require('../utlity/responseGenerator')

const healthController = (req, res) => {
    let finalResponse = {
        success: true,
        message: "Server is healthy"
    }
    sendResponse(res, 200, finalResponse)
}

const getAllAssignments = (req, res) => {
    let finalResponse = {
        success: true,
        message: "Fetched successfully.",
        data: assignments
    }
    sendResponse(res, 200, finalResponse)

}

// const getAssignmentsById = (req, res) => {



// }

module.exports = { healthController, getAllAssignments }