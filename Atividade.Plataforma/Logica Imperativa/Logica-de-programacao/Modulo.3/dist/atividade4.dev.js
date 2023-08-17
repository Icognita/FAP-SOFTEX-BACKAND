"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela em javaS cript
*/
var Pessoa = function Pessoa(nome, idade, filho) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.idade = idade;
  this.filho = filho;
  this.proximo = null;
};

var ListaEncadeada =
/*#__PURE__*/
function () {
  function ListaEncadeada() {
    _classCallCheck(this, ListaEncadeada);

    this.primeiro = null;
    this.ultimo = null;
  }

  _createClass(ListaEncadeada, [{
    key: "adicionarPessoa",
    value: function adicionarPessoa(nome, idade, filho) {
      var novaPessoa = new Pessoa(nome, idade, filho);

      if (this.primeiro === null) {
        this.primeiro = novaPessoa;
        this.ultimo = novaPessoa;
      } else {
        this.ultimo.proximo = novaPessoa;
        this.ultimo = novaPessoa;
      }
    }
  }, {
    key: "obterPessoa",
    value: function obterPessoa(index) {
      var contador = 0;
      var pessoaAtual = this.primeiro;

      while (contador < index && pessoaAtual !== null) {
        pessoaAtual = pessoaAtual.proximo;
        contador++;
      }

      return pessoaAtual;
    }
  }]);

  return ListaEncadeada;
}(); // Exemplo de uso da lista encadeada


var lista = new ListaEncadeada();
lista.adicionarPessoa("João", 30, null);
lista.adicionarPessoa("Maria", 28, null);
lista.adicionarPessoa("Pedro", 10, lista.obterPessoa(0));
console.log(lista.obterPessoa(1)); // { nome: 'Maria', idade: 28, filho: null, proximo: null }

console.log(lista.obterPessoa(2)); // { nome: 'Pedro', idade: 10, filho: null, proximo: null }