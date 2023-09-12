const { Router } = require("express")
const express=require("express")
const router=Router();


router.get('/api/',(req,res)=>{
    res.json({mensagem:'GET Funcionado'})
})

module.exports=router;