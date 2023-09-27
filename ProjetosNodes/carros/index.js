const express = require('express');

const app = express();
const PORT=3000;

//conexao com o banco

// const mongoose=require('mongoose')

// mongoose.connect("mongodb+srv://mirian_menezes:mirian_menezes@cluster0.ktqwr.mongodb.net/cursojs?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Conectado ao banco de dados!');
//     })
//     .catch(() => {
//         console.log('Falha na conexão!');
//     })

app.use(express.json());

let carros = [
  {
    Id: 1,
    Modelo: "Palio",
    Valor: "35000",
    Ano: 2010
  },
  {
    Id: 2,
    Modelo: "Fiat",
    Valor: "30000",
    Ano: 2005
  },
  {
    Id: 3,
    Modelo: "Gol",
    Valor: "48000",
    Ano: 2020
  }
];

// Rota para listar todos os carros
app.get('/carros', (req, res) => {
  res.json(carros);
});

// Rota para cadastrar um novo carro
app.post('/cadastrar', (req, res) => {
  const novoCarro = req.body;
  carros.push(novoCarro);
  res.json({ message: 'Carro cadastrado com sucesso!' });
  
});

// Rota para excluir um carro
app.delete('/excluir/:id', (req, res) => {
  const id = req.body;
  carros.forEach((carros,index)=>{
    carros.id==id ? carros.splice(index,1):"";
    res.status(202).json({ message: 'Comentário deletado' });
  })
   
  

  res.json({ message: 'Carro excluído com sucesso!' });
  });



app.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000');
});

