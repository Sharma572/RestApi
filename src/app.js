const express = require("express");
require("../src/db/conn")
const app = express();
const FamilyData = require('./models/family_member')
const port = process.env.PORT || 3000
const router = require('./routers/user')

app.use(express.json())
app.use(router)

app.get("/", async (req,res)=>{
 res.send("Home Page")
})

// We handle post method 

app.post("/family", async(req,res)=>{
try {
    const addFamily = new FamilyData(req.body)
    const insertFamily = await addFamily.save()
    res.send(insertFamily)
} catch (error) {
    console.log(error)
}
})


   app.get("/family", async(req,res)=>{
    try {
      
        const getFamily = await FamilyData.find({})
        res.send(getFamily)
    } catch (error) {
        console.log(error)
    }
    })
    
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})