require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_URI = 'mongodb+srv://hc-manager:hc-manager@heroclix-tournament.pmi3c.mongodb.net/?retryWrites=true&w=majority&appName=heroclix-tournament'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Heroclix tournament API')
})

mongoose.connect(MONGO_URI).then(() => console.log('Conectado ao mongoDb')).catch((error) =>console.error('Erro ao conectar ao MOngoDB', error))

app.listen(PORT, () => console.log(`servidor rodando na porta localhost ${PORT}`))