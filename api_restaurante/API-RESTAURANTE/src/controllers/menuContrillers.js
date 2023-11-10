const { menu } = require('../data/menu');

function listarMenu(req, res) {
  res.status(200).json(menu);
}

function novoPedido(req, res) {
  const { id, nome, preco } = req.body;
  
  if (!id) {
    res.status(404).json({ error: 'Verifique o número de ID e tente novamente.' });
    return;
  }

  if (isNaN(id) || !Number.isInteger(id)) {
    res.status(404).json({ error: 'ID precisa ser um número inteiro.' });
    return;
  }

  if (verificarID(id)) {
    res.status(404).json({ error: 'ID já existe.' });
    return;
  }

  if (!nome) {
    res.status(404).json({ error: 'Verifique o nome do produto e tente novamente.' });
    return;
  }
  

  if (verificarNome(nome)) {
    res.status(404).json({ error: 'Nome já existe.' });
    return;
  }
  
  if (!preco) {
    res.status(404).json({ error: 'Verifique o preço do produto e tente novamente.' });
    return;
  }

  if (isNaN(preco) || typeof preco !== 'number') {
    res.status(404).json({ error: 'Preço precisa ser um número.' });
    return;
  }

  if (preco <= 0 ) {
    res.status(404).json({ error: 'Preço precisa ser um valor válido.' });
    return;
  }

  const comida = {
    id,
    nome,
    preco
  };
    
  menu.push(comida);
  res.status(201).json({ message: 'Produto inserido com sucesso' });
};

function verificarID(menuIdExists) {
  const verificandoID = menu.find(item => item.id == menuIdExists);
  return verificandoID;
}
function verificarNome(menuNomeExists) {
  const verificandoID = menu.find(item => item.nome == menuNomeExists);
  return verificandoID;
}

module.exports = { listarMenu, novoPedido };