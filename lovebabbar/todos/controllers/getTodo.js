
const Todo=require('../models/Todo')
exports.getTodo=async (req,res)=>{
    try {
        const response=await Todo.find({
        })
        res.status(200).json({
            success:true,
            data:response,
            message:'entry created successfully'
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
    
}
exports.getTodoById=async (req,res)=>{
    try {
        const id=req.params.id;
        const todo=await Todo.findById(id)
        if(!todo){
            res.status(404).json({
                success:false,
                message:"No Data Found with Given Id"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:'entry created successfully'
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
    
}