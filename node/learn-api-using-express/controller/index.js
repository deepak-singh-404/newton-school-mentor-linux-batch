const { response } = require('express')
const asg = require('../database/assignments.json')

const healthCheck = (req, res) => {
    return res.status(200).json({
        "success": true,
        "server": "Healthy"
    })
}

const getAllAssingnments = (req, res) => {
    return res.status(200).json({
        "success": true,
        "data": asg
    })
}

const getAssignmentById = (req, res) => {
    const id = req.query.assignmentId
    const _asg = asg.find((a) => a.id == id)
    if (!_asg) {
        return res.status(404).json({
            success: false,
            message: "Assignment not found."
        })
    }
    return res.status(200).json({
        success: true,
        data: _asg
    })
}

module.exports = { healthCheck, getAllAssingnments, getAssignmentById }