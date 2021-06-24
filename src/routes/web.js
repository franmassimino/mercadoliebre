const express = require('express')
const app = express.Router()
const path = require('path')



app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/register.html'))
})



module.exports = app