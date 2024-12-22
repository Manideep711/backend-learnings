const mongoose=require('mongoose')

const getConnection=async ()=>{
try {
   await mongoose.connect(process.env.MONGO_URL)
   console.log("connected to db")
} catch (error) {
    console.log("couldnot connect to db",error.message)
}
}
module.exports=getConnection;