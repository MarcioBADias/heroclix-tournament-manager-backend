const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.register = async (req, res) => {
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

exports.login = async (req, res) => {
    try{
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ message: 'E-mail ou senha invalidos'})
        }
        const isPassword = await User.findOne({ password })
        if(!isPassword){
            return res.status(400).json({ message: 'E-mail ou senha invalidos'})
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.json({ message: 'Login realizado com sucesso' }, token)
    } catch(error) {
        res.status(500).json({ message: 'Erro ao realizar o login', error})
    }
}