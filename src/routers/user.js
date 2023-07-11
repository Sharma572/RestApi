const express = require("express");

const router = express.Router();
const UserData = require('../models/users')


router.post("/users", async(req,res)=>{
    try {
        const AddUser = new UserData(req.body);
        console.log(req.body);
        const insertUser = await AddUser.save()
        res.send(insertUser)
    } catch (e) {
        res.send(e)
    }
    })
    
    // We reding data Get method 
    router.get("/users", async (req,res)=>{
        try {
            // Find method to read data
            const getUserData = await UserData.find({})
            res.status(200).send(getUserData)
        } catch (e) {
            res.send(e)
        }
       })
    
    //    handle individual get by id
    router.get("/users/:id",async(req,res)=>{
       try {
        const _id = req.params.id;
        const getOneUser = await UserData.findById(_id);
        res.status(200).send(getOneUser)
       } catch (error) {
        console.log(error)
       }
    })
    
    //    handle edit individual get by id
    router.patch("/users/:id",async(req,res)=>{
        try {
         const _id = req.params.id;
         const getOneUser = await UserData.findByIdAndUpdate(_id,req.body,{
            new : true
         });
         res.status(200).send(getOneUser)
         console.log('User has been updated')
        } catch (error) {
         console.log(error)
        }
     })
     
     //    handle delete individual get by id
    router.delete("/users/:id",async(req,res)=>{
        try {
        //  const _id = req.params.id;
         const deleteOneUser = await UserData.findByIdAndDelete(req.params.id);
         res.status(200).send(deleteOneUser)
         console.log('User has been delete')
        } catch (error) {
         console.log(error)
        }
     })
     
     module.exports = router