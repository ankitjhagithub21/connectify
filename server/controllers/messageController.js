const Conversation = require("../models/conversation");
const Message = require("../models/message");
const User = require("../models/user");

const sendMessage = async(req,res) =>{
    try{
        const {message} = req.body;
        const receiverId = req.params.id;
        const user = await User.findById(req.userId)
        if(!user){
            return res.status(401).json({
                success:false,
                message:"You are not authorized."
            })
        }
        const senderId = user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[
                    senderId,
                    receiverId
                ]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
               
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }


        await Promise.all([conversation.save(),newMessage.save()])

        res.status(200).json({
            success:true,
            message:"Message sent."
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
const getMessages = async(req,res) =>{
    try{
       
        const userToChatId = req.params.id;
        const user = await User.findById(req.userId)
        if(!user){
            return res.status(401).json({
                success:false,
                message:"You are not authorized."
            })
        }
        const senderId = user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages")
      
        if(!conversation){
            return res.json({
               success:true,
               messages:[]
            })
        }
        
        res.status(200).json({
            success:true,
            messages:conversation.messages
        })


    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    sendMessage,
    getMessages
}