require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const connectDb = require('./db/conn')
const messageRouter = require('./routes/messageRoutes')

const app = express()
const port = 3000




app.use(express.json())
app.use(cors({
  origin:process.env.ORIGIN,
  credentials:true
}))
app.use(cookieParser())


//routes
app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
app.use("/api/messages",messageRouter)

app.get("/",(req,res)=>{
  res.json({
    "message":"Api working"
  })
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
  connectDb()
})