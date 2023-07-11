const mongoose = require("mongoose");
// DemoMern atlas link
const DB = "mongodb+srv://raunakDB:Raunak0097@cluster0.qukcsns.mongodb.net/?retryWrites=true&w=majority" 
mongoose.connect(DB).then(()=>{
    console.log("Connection Successfully")
}).catch((error)=>{
    console.log(error.message)
})