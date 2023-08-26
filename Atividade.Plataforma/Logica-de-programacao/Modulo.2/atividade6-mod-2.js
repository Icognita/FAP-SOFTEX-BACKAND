

function calculadora(numero1, numero2, operacao){

     if (operacao ==1){
          return numero1+numero2;
     } else if (operacao ==2){
          return numero1-numero2;
     } else if (operacao ==3){
          return numero1 * numero2;
     }else if (operacao ==4){
          return numero1/numero2;
     } else{
          return 0;
     }
 }
 let numero1=parseInt(prompt("Digite o primeiro número "));
 let numero2 =parseInt(prompt("Digite o segundo número "));
 let operacao=parseInt(prompt("Digite a operaçao desejada: 1-soma | 2-Subtração | 3-Multiplicação | 4-Divisao  "));
 
 let resultado= calculadora(numero1, numero2, operacao);     
 console.log("o resultado da operação é:  ",resultado);