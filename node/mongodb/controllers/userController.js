const User = require('../database/models/User')

const createUser = async (req, res) => {
    try {

        //Get the body from request
        const { name, email } = req.body

        //Do validation
        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Required fields are missing."
            })
        }

        //Check if user already exist with the given email
        const isUserExist = await User.findOne({ email: email })
        if (isUserExist) {
            return res.status(409).json({
                success: false,
                message: "User already exist with the given email."
            })
        }

        //add new entry
        const newUser = await User.create({
            name: name,
            email: email
        })

        return res.status(200).json({ success: true, message: "User created successfully", data: newUser })
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong", error: err.message })
    }
}


const getUser = async (req, res) => {
    try {
        const { userId, email } = req.query

        //Validation
        if (!userId && !email) {
            return res.status(400).json({
                success: false,
                message: "Required params are missing."
            })
        }

        let searchClause = {}

        if (email) {
            searchClause["email"] = email
        }
        if (userId) {
            searchClause["_id"] = userId
        }

        const user = await User.findOne(searchClause)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found."
            })
        }

        return res.status(200).json({
            success: true,
            message: "User fetched successfully.",
            data: user
        })
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong", error: err.message })
    }
}

module.exports = { createUser, getUser }