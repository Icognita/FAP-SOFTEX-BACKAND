class Mercadoria{
    constructor(id_Produto, nome_Produto, quantidade_produto,preco_produto){
     this.id_Produto=id_Produto;
     this.nome_Produto=nome_Produto;
     this.quantidade_produto=quantidade_produto;
     this.preco_produto=preco_produto;
    }
    get id_Produto(){
        this.id_Produto;
    }
    get nome_Produto(){
        this.nome_Produto;
    }
    get quantidade_produto(){
        this.quantidade_produto;
    }
    get preco_produto(){
        this.preco_produto;
    }

  set quantidade_produto(novaQuatidade){
    this.quantidade_produto=novaQuatidade;
  }

  set preco_produto(novoPreco){
    this.preco_produto=novoPreco;
  }

}