const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema =  new Schema({
   
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        // unique:true,

    }
   
}, { versionKey: false })

const user = mongoose.model('user', userSchema);
module.exports = user;