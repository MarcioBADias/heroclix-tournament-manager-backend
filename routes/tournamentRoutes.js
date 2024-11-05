const express = require('express')
const { createTournament, getDashboard } = require('../controllers/tournamentController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/create', authMiddleware, createTournament)
router.get('/dashboard', authMiddleware, getDashboard)

module.exports = router