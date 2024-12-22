const express=require("express");
const app=express()
app.use(express.json())
const mongoose=require("mongoose");
const { type } = require("os");
const connect=async ()=>{
    await mongoose.connect("mongodb://localhost:27017")
}
connect().then(()=>{
    console.log("connected")
})

const userSchema=new mongoose.Schema({
name:{
    type:String
},
age:{
    type:Number
}
})
       const User= mongoose.model("User",userSchema)

       const newUser=new User({
        name:"Manideep",
        age:21
       })
newUser.save().then(()=>{
    console.log("saved")
})