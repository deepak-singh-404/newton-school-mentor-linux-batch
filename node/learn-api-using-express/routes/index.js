const express = require('express')

const router = express.Router()

const { healthCheck, getAllAssingnments, getAssignmentById } = require('../controller/index')

router.get('/api/health', healthCheck)

router.get('/api/assignments', getAllAssingnments)

router.get('/api/assignment', getAssignmentById)

module.exports = router