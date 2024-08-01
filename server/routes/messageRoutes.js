const express = require('express')
const { sendMessage, getMessages } = require('../controllers/messageController')
const isAuthenticated = require('../middlewares/isAuthenticated')
const messageRouter = express.Router()


messageRouter.post("/send/:id",isAuthenticated,sendMessage)
messageRouter.get("/:id",isAuthenticated,getMessages)

module.exports = messageRouter