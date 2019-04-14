const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
//Entra o conceito de middleware
//Comandos do terminal 

const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server);

io.on("connection", socket =>
{

    socket.on('connectRoom', box =>{
        socket.join(box);
    })

});

mongoose.connect('mongodb+srv://omnistack:AdminSemSenha@cluster0-oqpaq.mongodb.net/omnistack?retryWrites=true',
{
    useNewUrlParser: true
}
); 

app.use((req, res,next) => {
    req.io = io;
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/files', express.static(path.resolve(__dirname,"..","tmp")));

app.use(require('./routes'));

server.listen(3333);