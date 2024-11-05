require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Heroclix tournament API')
})

app.use('/auth', authRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Conectado ao mongoDb')).catch((error) =>console.error('Erro ao conectar ao MOngoDB', error))

app.listen(PORT, () => console.log(`servidor rodando na porta localhost ${PORT}`))