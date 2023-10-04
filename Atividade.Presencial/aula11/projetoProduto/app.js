require('dotenv').config();
const express = require('express')
const mysql2 = require('mysql2')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const port=3001

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

// concção com o banco
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
    res.send("ROTA PRINCIPAL")
})

app.get("/cadastrar",(req,res)=>{
    res.render('formulario')
})

app.post("/cadastrar",(req,res)=>{

    const {nome, preco} = req.body

    // comando(query)
const comando = `INSERT INTO produto (nome,preco) VALUES ('${nome}','${preco}')`
console.log(comando);
    db.query(comando,(err)=>{
        if (err){
            console.log("Erro ao inserir o banco de dados");
        }else{
            res.send("Produto cadastrado com sucesso")
        }

    })
})

app.listen(port,()=>{
    console.log("Servidor rodando...")
})