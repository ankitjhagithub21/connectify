require('dotenv').config()
const express = require('express')
const cors = require('cors')
const http = require('http')
const cookieParser = require('cookie-parser')
const { Server } = require("socket.io");
const connectDb = require('./db/conn')
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()
const server = http.createServer(app);
const io = new Server(server);

const port = 3000
connectDb()

app.use(express.json())
app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)

io.on('connection', (socket) => {
  console.log(`a user connected ${socket.id}`);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.get('/', (req, res) => {
  res.json({
    message:"Api Working."
  })
})




server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})