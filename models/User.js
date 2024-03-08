const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    username: {type: String,required:true},
    email : {type: String, required:true},
    password : {type:String,reqiored:true},
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamps:true});

module.exports = mongoose.model("User",UserSchema);