require('dotenv').config();
const express=require("express")
const mysql2= require("mysql2")
const app=express()
app.use(express.json())


const routes= require('./routes')
app.use('/',routes)

const PORT=3000
//conexao  com o MySQL

const db= mysql2.createConnection({
    host:process.env.db_HOST,
    user:process.env.db_USER,
    password:process.env.db_PASSWORD,
    database:process.env.db_DATABASE
})


db.connect((error)=>{
    if (error){
        console.log("Erro ao conectar com o banco de dados", error)
    } else{
        console.log("Banco de dados conectado com sucesso")
    }
})


app.get("/",(req,res)=>{
    res.send("Bem Vindo!")
})


app.listen(PORT,()=>{
    console.log("servidor rodando");

}) 