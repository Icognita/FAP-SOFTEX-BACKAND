const express= require('express');


const books=require('../data/books');



const router=express.Router();



//rota para listar

router.get('/books',(req,res)=>{
    res.send(books)
})
//criar livros
router.post('/books',(req,res)=>{
    const{titulo,autor,isbn}=req.body;
const novoLivro={
    titulo,
    autor,
    isbn
}
books.push(novoLivro);
return res.status(201).json(novoLivro)
})

module.exports=router;