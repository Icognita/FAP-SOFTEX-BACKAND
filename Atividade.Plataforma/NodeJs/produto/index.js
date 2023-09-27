const express =require("express")
const PORT= 3001
const app= express()
app.use(express.json())

(async ()=>{
    const database=require('./db');
    const Produto=require('./produtos')
    try{

        const resultado= await database.async();
    }catch(error){
        console.log(error);
    }
})