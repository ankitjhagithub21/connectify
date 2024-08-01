const sendMessage = async(req,res) =>{
    try{

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    sendMessage
}