
class Produto {
  constructor(id, nome, preco, quantidade) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

class Estoque {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  
  buscarProduto(id) {
    return this.produtos.find(produto => produto.id === id);
  }

  atualizarProduto(id, nome, preco, quantidade) {
    const produto = this.buscarProduto(id);

    if (produto) {
      produto.nome = nome || produto.nome;
      produto.preco = preco || produto.preco;
      produto.quantidade = quantidade || produto.quantidade;
      console.log('Produto atualizado com sucesso.');
    } else {
      console.log('Produto não encontrado.');
    }
  }

  removerProduto(id) {
    const produtoIndex = this.produtos.findIndex(produto => produto.id === id);

    if (produtoIndex !== -1) {
      this.produtos.splice(produtoIndex, 1);// REMOVE UM PRODUTO APARTIR DO INDECE
      console.log('Produto removido com sucesso.');
    } else {
      console.log('Produto não encontrado.');
    }
  }

  listarProdutos() {
    console.log('Lista de Produtos:');
    this.produtos.forEach(produto => {
      console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}, Quantidade: ${produto.quantidade}`);
    });
  }
}
// CRUD: setando
const estoque = new Estoque();

estoque.adicionarProduto(new Produto(1, 'Notebook', 3000, 10));
estoque.adicionarProduto(new Produto(2, 'Mouse', 50, 50));
estoque.adicionarProduto(new Produto(3, 'Teclado', 100, 30));

estoque.listarProdutos();

estoque.atualizarProduto(2, undefined, 60, 40);

estoque.listarProdutos();

estoque.removerProduto(1);

estoque.listarProdutos();


