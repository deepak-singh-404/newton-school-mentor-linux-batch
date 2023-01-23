const asg = require('../database/assignments.json')
const fs = require('fs')

const healthCheck = (req, res) => {
    return res.status(200).json({
        "success": true,
        "server": "Healthy"
    })
}

const getAllAssingnments = (req, res) => {
    try {
        fs.readFile(__dirname + "/../database/" + "assignments.json", 'utf-8', (err, data) => {
            if (err) {
                console.log("ERROR_IN_GET_ALL_ASSIGNMENTS", err.message)
                return res.status(500).json({
                    "success": false,
                    "message": "Some error occured."
                })
            }
            return res.status(200).json({
                "success": true,
                "data": JSON.parse(data)
            })
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        })
    }
}

const getAssignmentById = (req, res) => {
    try {
        const id = req.query.assignmentId
        const _asg = as.find((a) => a.id == id)
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
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        })
    }
}

const addAssignment = (req, res) => {
    const data = req.body
    if (!data) {
        return res.status(400).json({
            success: false,
            message: "Required fields are missing."
        })
    }

    asg.push(data)
    //Absolute 
    //writefilesync  1- Location 2- Data which you have to write 3- charset
    fs.writeFileSync(__dirname + "/../database/" + "assignments.json", JSON.stringify(asg), 'utf-8')
    return res.status(201).json({
        success: true,
        message: "Added successfully"
    })
}



module.exports = { healthCheck, getAllAssingnments, getAssignmentById, addAssignment }