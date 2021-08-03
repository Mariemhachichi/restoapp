const express = require('express')
const app = express()
const db = require ('./config/db')
db();
const plats = require('./routes/platRoute')
const body = require('body-parser')
app.use(express.json())
const cors = require ('cors')
app.use (cors())
app.use('/resto',plats)
app.listen(8080,()=>{
    console.log('ymchi')
})