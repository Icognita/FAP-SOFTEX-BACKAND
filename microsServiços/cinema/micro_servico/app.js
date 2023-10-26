const express=require("express");
const {routes}=require('./routes/filmesRoutes')


const app=express();
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use('/',()=>routes)





app.listen(3001,()=>{
    console.log("servidor rodando na porta 3001");
})


// app.get("/filmes", async)

// app.get("/filmes/:id",(req,res)=>{

//     const idFilmes=parseInt(req.params.id)
//     const filme=filmes.find((a)=> a.id === idFilmes)

//     if(!filme){

//         res.status(404).json({error:'filme não encontrado'})
//     } else{
//         res.json(filme)
//     }


    
// })

// app.post("/filmes",(req,res)=>{
//     const filmes={id,titulo,categoria}=req.body
//     let novoFilme={
//         id,
//         titulo,
//         categoria
//     }
//     filmes.push(novoFilme);
//     return res.status(200).json(novoFilme)

// })
