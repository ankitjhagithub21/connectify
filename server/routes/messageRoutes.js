const express = require('express')
const { sendMessage } = require('../controllers/messageController')
const messageRouter = express.Router()


messageRouter.post("/send/:id",sendMessage)

module.exports = messageRouter