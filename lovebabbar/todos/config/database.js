const mongoose=require('mongoose')
require('dotenv').config()
const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("db connection is successful")
    }).catch((error)=>{
        console.log("error in connection")
        console.error(error.message)
        process.exit(1)
    })
}
module.exports=dbConnect