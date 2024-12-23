const express=require('express')
const app=express()
//app.use(express.json())
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("heello")
})
app.post('/api/cars',(req,res)=>{
           const {name,brand}=req.body;
           console.log(name)
           console.log(brand)
           res.send("car submitted successfully")

})
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/myCars',{
    useNewurlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log("Recieved error")
})
app.listen(3000,()=>{
   console.log("server is running")
})