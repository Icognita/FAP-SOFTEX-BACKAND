function buscaBinaria(array, elementoBuscado) {
    let inicio=0;
    let fim=array.length;
    while(inicio<=fim){
        //calcula o indice do meio da coleção
        const meio= Math.floor((inicio+fim)/2);
        //verifica se  o elemento do meio é igual ao elemento de buscado
        if(array[meio]===elementoBuscado){
            //retorna o indece onde o elemento foi encotrado
          return meio;  
        }
        if(array[meio]> elementoBuscado){
            fim=meio-1
        }else{
            //caso contrario descarta metade à esquerda
            inicio =meio+1;
        }
    }
    //caso o priemrio nao seja encontrado retorna -1
    return -1
}
const listaNumeros = [10, 20, 30, 40, 50];
const elementoProcurado = 30;
const indeceEncontrado =buscaBinaria(listaNumeros,elementoProcurado);

if(indeceEncontrado!=-1){
    console.log(`O Elemento ${elementoProcurado} foiencontrado no índice ${indeceEncontrado}.`);
}else{
    console.log(`O Elemento ${elementoProcurado}  nao foi encontrado na lista`);
}
          

     

  


