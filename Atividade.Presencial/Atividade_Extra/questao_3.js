/*
 Crie uma classe chamada Pessoa que deve receber três parâmetros no 
método construtor, nome, idade e sexo. Crie um método chamado 
apresentar e mostre o nome, idade e sexo da pessoa.
*/

class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    apresentar() {
     return(`Nome: ${this.nome}\n Idade: ${this.idade},\n Sexo: ${this.sexo}`)
    }
}

const pessoa= new Pessoa("Mirian", 30, "Cisgênera");

console.log(pessoa.apresentar());


/**
 * Presencial\Atividade_Extra\questao_3.js"
 Nome: Mirian
 Idade: 30,
 Sexo: Cisgênera
 */


