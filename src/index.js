const express = require('express')
const app = express()
const path = require('path')

//Server
app.listen(3000, () => console.log('Server live on http://localhost:3000'))

//Public Access
const publicpath = path.resolve(__dirname, '../public') 
app.use(express.static(publicpath))

//Routes
app.use(require('./routes/web'))