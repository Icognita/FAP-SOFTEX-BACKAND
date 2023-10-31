const express =require('express')
const routes = express.Router();
const menu= require('../db/pratos_db' )


//
routes.get('menu',  (req, res) => {
    res.json(menu)
})

routes.post('menu',(req,res)=>{
    const  menus=req.body

    const comida={
        id,
    }

})


module.exports=routes