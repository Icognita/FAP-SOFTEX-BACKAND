/**
 *  Crie uma classe chamada calculadora. Receba dois números como 
parâmetros no construtor. Crie quatro métodos para calcular as quatro 
operações matemáticas: Adição, subtração, divisão e multiplicação. 
Quando criado o objeto é mandado para o construtor 2 números e quando 
chamarmos os métodos mostra o resultado.
 */

class Calculadora{
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    } 
     soma(){
        return this.num1+this.num2;
    }
    subtracao(){
        return this.num1-this.num2;
    }
    multiplicacao(){
        return this.num1*this.num2;
    }
    divisao(){
        return this.num1/this.num2;

    }


}
const calculadora=new Calculadora(20,2)
console.log(
    "Resultado das operaçoes:",
 "\n",   
 "Soma 20+2= ",calculadora.soma(),
 "\n" ,
 "Subtracao 20-2= ",calculadora.subtracao(),
 "\n", 
 "Multiplicacao 20*2= ",calculadora.multiplicacao(),
 "\n",
 "Divisao: 20/2= ",calculadora.divisao()
);
/**
 * SAÍDA

Resultado das operaçoes: 
 Soma 20+2=  22 
 Subtracao 20-2=  18 
 Multiplicacao 20*2=  40 
 Divisao: 20/2=  10

[Done] exited with code=0 in 1.749 seconds
 */