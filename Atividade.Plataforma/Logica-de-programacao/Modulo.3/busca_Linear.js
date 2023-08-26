function buscaLinear(array, elementoBusca) {
    for (let i = 0; i < array.length; i++) {
        //verifica se o elemento atual é igual ao elemento de buscado
        if (array[i] === elementoBusca) {
            //retorne o indice onde o elemento foi encontrado
            return 1;
        }
    }
    //caso o elemento nao seja encontrado, retorne -1
    return -1
}



const listaNumeros = [10, 20, 30, 40, 50];
const elementoProcurado = 30;
const indeceEncontrado =buscaLinear(listaNumeros,elementoProcurado);

if(indeceEncontrado!=-1){
    console.log(`O Elemento ${elementoProcurado} foiencontrado no índice ${indeceEncontrado}.`);
}else{
    console.log(`O Elemento ${elementoProcurado}  nao foi encontrado na lista`);
}