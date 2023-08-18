
/*
Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array.

*/

//A melhor forma de busca que encontrei foi a lienar, pois ele vai  analisando cada elemento 
// da coleção até encontrar o  valor desejado. Já a binária teria que ordenar,  pois ele ela exige que e alista esteja ordenada.



function buscaLinear(array, elementoBusca) {
    for (let i = 0; i < array.length; i++) {
        //verifica se o elemento atual é igual ao elemento de buscado
        if (array[i] === elementoBusca) {
            //retorne o indice onde o elemento foi encontrado
            return i;
        }
    }
    //caso o elemento nao seja encontrado, retorne -1
    return -1
}

const listaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;
const indeceEncontrado =buscaLinear(listaNumeros,elementoProcurado);

if(indeceEncontrado!== -1){
    console.log(`O Elemento ${elementoProcurado} foi encontrado no índice ${indeceEncontrado}.`);
}else{
    console.log(`O Elemento ${elementoProcurado}  nao foi encontrado na lista`);
}  

     
