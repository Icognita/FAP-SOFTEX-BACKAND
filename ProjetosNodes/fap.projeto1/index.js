const express =require("express")
const PORT= 3001
const app= express()
app.use(express.json())


 app.get("/usuarios",(req,res)=>{
    res.send("Rota de usuario")
 })



app.listen(PORT,()=>{
    console.log("Servidor rodando");

})