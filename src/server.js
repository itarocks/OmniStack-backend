const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
//Entra o conceito de middleware
//Comandos do terminal 

const app = express();


mongoose.connect('mongodb+srv://omnistack:AdminSemSenha@cluster0-oqpaq.mongodb.net/omnistack?retryWrites=true',
{
    useNewUrlParser: true
}
); 


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/files', express.static(path.resolve(__dirname,"..","tmp")));

app.use(require('./routes'));

app.listen(process.env.PORT || 3333);