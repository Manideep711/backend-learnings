
const Todo=require('../models/Todo')
exports.deleteTodo=async (req,res)=>{
    try {
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success:true,
            message:'Deleted Successfully'
        })
    } catch (error) {
        console.error(error)
        console.log(error)
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        })
    }
    
}