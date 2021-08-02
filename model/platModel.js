const mongoose = require('mongoose')
const Schema = mongoose.Schema
const platSchema = new Schema({
    titre:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    prix:{
        type:String,
        required:true
    }

})

module.exports = plats = mongoose.model('plats',platSchema)