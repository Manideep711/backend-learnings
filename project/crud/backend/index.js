require('dotenv').config()
const express=require('express')
const cors=require('cors')
const getConnection=require('./utils/getConnection')
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;  // If no statusCode is provided, default to 500
    const message = err.message || "Server error";  // If no message is provided, default to "Server error"
  
    res.status(statusCode).json({
      message: message,  // Send the message in the response
    });
  })
getConnection()
app.listen(process.env.PORT,()=>console.log(`server is running port: ${process.env.PORT}`)
)