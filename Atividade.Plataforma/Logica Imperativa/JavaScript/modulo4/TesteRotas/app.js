const express=require("express")

const bd= require("mysql")

const app=express()
app.use(express.json())
const routes= require('./routes')
app.use('/',routes)

const PORT=3000

app.get("/",(req,res)=>{
    res.send("Bem Vindo!")
})


app.listen(PORT,()=>{
    console.log("servidor rodando");

}) 