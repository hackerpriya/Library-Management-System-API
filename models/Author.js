const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name : String,
    email : {type:String, unique: true, required:true},
    password : {
        type:String, required:true
    },
    bio : String

})


module.exports = mongoose.model('Author',AuthorSchema)