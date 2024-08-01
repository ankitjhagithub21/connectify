const express = require('express')
const { getAllUsers } = require('../controllers/userController')
const isAuthenticated = require('../middlewares/isAuthenticated')

const userRouter = express.Router()

userRouter.get("/",isAuthenticated,getAllUsers)

module.exports = userRouter
