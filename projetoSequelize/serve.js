const express=require('express')
const PORT= 3000
const routes = require('./routes')
const app = express()
const bodyParser = require("body-parser");
const database = require("./db");
const User=require('./userModel')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)


//conexao com o banco
database.sync();


app.listen(PORT,()=>{
    console.log("Servidor rodando");

})