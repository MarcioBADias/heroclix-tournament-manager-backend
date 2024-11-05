const Tournament = require('../models/Tournament')
const User = require('../models/User')

exports.createTournament = async (req, res) => {
    try{
        const { name, isAwarded, prizeCredits } = req.body

        if(isAwarded && req.user.role !== 'manager'){
            return res.status(403).json({ message: 'Apenas gestores podem criar torneios premiados.' })
        }

        const tournament = new Tournament({
            name,
            organizer: req.user.userId,
            isAwarded,
            prizeCredits: isAwarded ? prizeCredits : 0
        })

        await tournament.save()
        res.status(201).json({ message: 'Torneio criado com sucesso', tournament })
    } catch(error) {
        res.status(500).json({ message: 'erro ao criar o torneio', error })
    }
}

exports.getDashboard = async (req, res) => {
    try{
        const user = await User.findById(req.user.userId)

        const tournaments = await Tournament.find({
            $or: [{ organizer: user._id }, { participants: user._id }]
        })

        res.json({
            username: user.username,
            credits: user.credits,
            tournaments
        })
    } catch(error) {
        res.status(500).json({ message: 'Erro ao acessar o dashboard', error })
    }
}