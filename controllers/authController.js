const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.registrer = async (req, res) => {
    try{
        const { username, email, password, role } = req.body

        const existingUser = await User.findOne( { email })
        if(existingUser) {
            return res.status(400).json({ message: 'Usuario ja registrado com esse e-mail'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({ username, email, password: hashedPassword, role })
        await user.save()

        res.status(201).json({ message: 'Usuario registrado com sucesso' })
    }
    catch(error) {
        res.status(500).json({ message: 'erro ao registrar o usuario', error})
    }
}