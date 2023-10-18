//Depois vou fazer no padrão mvc
// e no banco mysql  proximo final de semana
//


const port=3333;
const express= require('express');
// const { couldStartTrivia } = require('typescript');
const { v4: uuidv4 } = require('uuid');

const app=express()
app.use(express.json())

//
const contas=[];

app.get('/',(req,res)=>{
    res.send("pagina inicial")
})
app.post('/contas',(req,res)=>{
    const{cpf,nome}=req.body;

    const contaExistente=contas.find(conta=>conta.cpf===cpf);
    if(contaExistente){
        return res.status(400).json({error:'CPF JÁ EXISTE'});
    }

    const novaConta={
        id:uuidv4(),
        cpf,
        nome,
        saldo,
        extrato:[],
    };
    contas.push(novaConta);

    return res.status(201).json(novaConta)
})
 //buscar o extrato
 app.get('/contas/:id/ extrato',(req,res)=>{
    const {id}=req.params;

    const conta = contas.find(conta=>conta.id===id);
    if(!conta){
        return res.status(404).json({error:'Conta não encontrada'})
    }

    return res.json(conta.extrato);
 });

 //rota para depositar
 app.post('/contas/:id/deposito', (req,res)=>{
    const {id}=req.params;
    const {valor}=req.body;

    const conta =contas.find(conta=>conta.id===id);
    if(!conta){
        return res.status(404).json({error:'a conta não existe'})
    }
    conta.saldo +=valor;
    conta.extrato.push({
        tipo:'Deposito',
        valor,
        data:new Date(),
    });
  return res.json(conta);

 })

 //rota para saque

 app.post('/contas/:id/saque',(req,res)=>{
    const {id}=req.params;
    const {valor}=req.body;

    const conta =contas.find(conta=>conta.id===id);
    if(!conta){
        return res.status(404).json({error:'a conta não existe'})
    }
    if(conta.saldo<valor){
        return res.status(400).json({error:'Saldo insuficiente'});
    }
    conta.saldo-=valor;
    conta.extrato.push({
        tipo:'Saque',
        valor,
        data:new Date(),
    });
    return res.json(conta)

 });

 //atualizar

 app.get('/contas/:id', (req, res) => {
    const { id } = req.params;
  
    const conta = contas.find(conta => conta.id === id);
    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }
  
    return res.json(conta);
  });


 //deletar

 app.delete('/contas/:id',(req,res)=>{
 const {id} =req.params;

 const contaIndex=contas.findIndex(contas=>conta.id===id);
 if(contasIndex===-1){
    return res.stautus(404).json({error:'Conta não encontrada'});
}
contas.splice(contaIdex,1);
return res.json({message:'Conta excluidada'}) 

 })






app.listen(port,()=>{
    console.log("Servidor rodando na porta 3333 ");
})