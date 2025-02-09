const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    member : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true
    },
    book : {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    borrowDate: {
        type: Date,
        default: Date.now},
    returnDate: Date,
    status: {
            type: String,
            enum: ['borrowed','returned'],
            default:'borrowed'
        }

})


module.exports = mongoose.model('Transaction',TransactionSchema)