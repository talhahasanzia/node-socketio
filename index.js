
const express = require('express')
const app = express()
const socketio = require('socket.io')


app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`Hello from server!`)
})


server = app.listen(3000, "127.0.0.1", ()=> console.log(`Server running`));

const io = socketio(server)

io.on("connection", (socket)=>{
    console.log(`New user connected`);
    socket.emit("new message", `{"username":"Server","message":"Hello from socket io"}`)

    socket.on("new message", (data)=>{
        console.log(`New message received ${data}`);
    })
})





