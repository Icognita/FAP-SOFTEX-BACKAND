const express= require('express');
//Banco de dados ficticios para deletar
const { contas } = require('./data/database');
const { v4: uuidv4 } = require('uuid');
const port=3333;
const app=express();
app.use(express.json())

//Depois vou fazer no padrão mvc
// e no banco mysql  proximo final de semana

// const contas=[];

//listar
 app.get('/contas',(req,res)=>{
    res.send(contas)
})

//busca
app.get('/contas/:id', (req, res) => {
    const { id } = req.params;
  
    const conta = contas.find(conta => conta.id === id);
    if (!conta) {
      return res.status(404).json({ error: 'Conta não encontrada' });
    }
  
    return res.json(conta);
});
// criar uma conta
app.post('/contas',(req,res)=>{
    const{cpf,nome}=req.body;

    const contaExistente=contas.find(conta=>conta.cpf===cpf);

    if (!nome) {
        return res.status(404).json({error:'PREENCHA O CAMPO NOME'});
    } else if (!cpf){
        return res.status(404).json({error:'PREENCHA O CAMPO CPF'});
    } else if (cpf.length !== 11){
        return res.status(404).json({error:'INSIRA UM CPF VÁLIDO'});
    } else if(contaExistente){
        return res.status(400).json({error:'CPF JÁ EXISTE'});
    }

    const novaConta={
        id:uuidv4(),
        cpf,
        nome,
        saldo:0,
        extrato:[],
    };
    contas.push(novaConta);

    return res.status(201).json(novaConta)
})

// atualizar/alterar
app.put('/contas/:id', (req, res) => {
    const { id } = req.params;
    const { cpf, nome } = req.body;

    const conta = contas.find(conta => conta.id === id);
    if (!conta) {
        return res.status(404).json({ error: 'Conta não encontrada' });
    }

    conta.cpf = cpf || conta.cpf;
    conta.nome = nome || conta.nome;

    return res.status(201).json(conta);
});

 // deletar
app.delete('/contas/:id', (req, res) => {
const { id } = req.params;

const contaIndex = contas.findIndex(conta => conta.id===id);
if(contaIndex===-1){
    return res.status(404).json({ error: 'Conta não encontrada' });
}
contas.splice(contaIndex,1);
return res.status(200).json({ message: 'Conta excluidada com suceesso' }) 

})

// buscar o extrato
app.get('/contas/:id/extrato', ( req, res ) => {
    const {id}=req.params;

    const conta = contas.find(conta=>conta.id===id);
    if(!conta){
        return res.status(404).json({error:'Conta não encontrada'})
    }

    return res.status(201).json(conta.extrato);
});

// depositar
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

//  saque
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

app.listen(port,()=>{
    console.log("Servidor rodando na porta 3333 ");
})