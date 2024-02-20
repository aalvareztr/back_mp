import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';
import AppRoutes from './src/routes/routes.js'
import 'dotenv/config'

const app = express()
const server = http.createServer(app)


export const io = new SocketServer(server, {
    cors:{
        origin:"http://localhost:5173"
    }
})

app.use(cors(
    {
      origin: '*'
    }
))
app.use(express.json())

app.use(AppRoutes)


io.on('connection', socket => {
    console.log(`client conect ${socket.id}`)
})

server.listen(4000)

console.log(`server running on port ${4000}`)
