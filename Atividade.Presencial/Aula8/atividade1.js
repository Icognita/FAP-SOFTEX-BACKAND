/*
 Desenvolver um programa que efetue a leitura de dez elementos de uma array A. 
Construir uma array B do mesmo tipo, observando a seguinte lei de formação: se o valor 
do índice for par, o valor deverá ser multiplicado por 5. Sendo ímpar, deverá ser somado 
com 5. Ao final mostrar o conteúdo do array B.
*/
vetorA=[];
vetorB=[];
function lista(){


    for(let i=0;i<10;i++){
    
      let elementos=parseInt(prompt(`Digite ${i+1}º`))
    
        vetorA.push(elementos);
    }


    for(let i=0;i<10;i++){

        if(i %2 ===0){
            vetorB.push(vetorA[i]*5)
        }else{
            vetorB.push(vetorA+5)
        }
    }

console.log("o conteudo  de B:");
console.log(vetorB.join(""))


}

