const expres= require('express');
// importa a rota
const route =expres.Router()

// criando  a primeiram rota

route.get('/',(req,res)=>{
    res.send("Primeira Rota")
});

 // exportando a rota

 module.exports=route;

 // vai lá no serve e importa 
 
