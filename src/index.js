const express = require('express')
const app = express()
const path = require('path')
const port = 3000

//Server
app.set("port",process.env.PORT || port)
app.listen(app.get("port"),() => console.log("Server live on http://localhost:"+app.get("port")))

//Public Access
const publicPath = path.resolve(__dirname, '../public') 
app.use(express.static(publicPath))

//Routes
app.use(require('./routes/web'))


