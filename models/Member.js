const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    membershipDate : {
        type:  Date,
        default: Date.now
    },

})

module.exports = mongoose.model('Member',MemberSchema)