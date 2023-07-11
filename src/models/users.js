const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require : true,
        trim : true
    },
    dob:{
        type: Date,
        require : true,
        trim : true
    },
    empId:{
        type:String,
        require:true,
         trim : true,
         unique:true
    },
    mobile:{
        type:Number,
        required:false,
        minlength:[10],
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        require:false,
        default:'user', //admin or user
        enum:['admin','user']
    }
})

const UserData = new mongoose.model("UserData",userSchema)

module.exports = UserData;