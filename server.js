const express = require('express')
const app = express()
const db = require ('./config/db')
db();

app.listen(8000,()=>{
    console.log('ymchi')
})