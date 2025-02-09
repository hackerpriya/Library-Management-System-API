const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title : String,
    author : {
         type:mongoose.Schema.Types.ObjectId, 
         ref: 'Author', 
         required:true},
         publishedYear: Number,
         genre : String,
         copiesAvailable: {
            type: Number,
            default: 1
         }

})


module.exports = mongoose.model('Book',BookSchema)