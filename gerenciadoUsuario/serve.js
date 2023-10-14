//importa o express
const expres =require('express')
//importando a rota
const  routes= require('./routes')
//importando o banco
const db= require("./db")

const app= expres();
//sicronizando o banco
db.sync();





app.listen(3001,()=>{
    console.log("Servidor rodando, na porta 3001");
})