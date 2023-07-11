const mongoose = require('mongoose')

const familySchema = new mongoose.Schema({
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
})

const FamilyData = new mongoose.model("FamilyData",familySchema)

module.exports = FamilyData;