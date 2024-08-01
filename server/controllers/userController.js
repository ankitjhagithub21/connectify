const User = require("../models/user")
const getAllUsers = async(req,res) =>{
    try{
        
       const users = await User.find({_id:{$ne:req.userId}}).select("-password -email")
       if(!users){
        return res.status(404).json({
            success:false,
            message:"User not found."
        })
       }
       res.status(200).json({
        success:true,
        users
    })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports ={
    getAllUsers
}