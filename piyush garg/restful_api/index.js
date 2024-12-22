

const express=require("express")
const app=express()
const PORT=3000
const users=require("./MOCK_DATA.json")
app.get("/users",(req,res)=>{
    const html=`<ul>
          ${users.map((user)=>`<li>${user.first_name}</li>`).join("")} 
    </ul>
    `
    res.send(html)
})
app.get("/api/users",(req,res)=>{

    res.json(users)
})
app.post("/api/user",(req,res)=>{
    
})
// app.get("/api/users/:id",(req,res)=>{
//    const {id}=req.params
//     const user=users.find(user=>user.id===Number(id))
//     console.log(user)
//        res.json(user)
// })
app.route("/api/users/:id").get((req,res)=>{
   const {id}=req.params
    const user=users.find(user=>user.id===Number(id))
    console.log(user)
       res.json(user)
})
.patch((req,res)=>{
  return res.json({status:"Pending"})
})
.delete((req,res)=>{
    return res.json({status:"Pending"})
  })
app.post("/api/users",(req,res)=>{
    return res.json({status:"Pending"})
})


app.listen(PORT,()=>console.log("running server"))