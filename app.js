const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/',(req, res)=>{res.sendFile(path.join(__dirname,'/views/home.html'))})

    