const app = require('./src/server');

// Configuração e roteamento do servidor

const port = 3000;

app.listen(port, () => {
  console.log(`API do restaurante rodando na porta ${port}`);
});