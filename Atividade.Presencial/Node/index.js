const express=require("express")
const app=express()
const PORT=3001;


app.get("/",(req,res)=>{
    res.send("Bem vindo")
})

app.get("/cadastrar",(req,res)=>{
    res.send("Cadastro")
})

app.get("/cadastrar/:id",(req,res)=>{
    const id=req.params.id
    res.send(`Bem vindo ao ${id}`)
})

// como capiturar 

app.listen(PORT,()=>{
    console.log("Servidor rodando");
})