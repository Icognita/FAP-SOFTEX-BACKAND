const express= require('express')
const route = express.Router()


route.get('/',(req,res)=>{
    res.send("Primeira Rota")
})

module.exports=route;



