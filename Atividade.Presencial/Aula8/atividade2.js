/**
 *  Desenvolver um programa que efetue a leitura de cinco elementos de uma array A. No 
final, apresente o total da soma de todos os elementos que sejam ímpares
 */

const { prompt } = require("readline-sync");





function questio2( vetorA){
    let somaImpares=0;
    
    for (let i = 0; i < vetorA.length; i++) {
        if (vetorA[i] % 2 !== 0) { 
            somaImpares += vetorA[i]; 
        }
    }
    
    return somaImpares
    
    
    var vetorA=[];
     

     for (i=1;i<5;i++){
         vetorA.push(parseInt(prompt("Digite um número")))
    
}

 }
       questio2();
        