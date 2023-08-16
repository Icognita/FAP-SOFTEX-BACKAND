// adiciona o elementop no final da fila
//  const fila=[];

//  function enfileira(element){
//     fila.push(element);
// }


// enfileira(10);

//   enfileira(20)
//     enfileira(30)
// console.log(fila)
// class

// remove o primeiro elemento da fila na posiçãp 0
 fila=[10,20,30];

function isEmpty(){

  return fila.length===0;
}

// function desenfileirar(){
//    if(isEmpty()){
//     return null;
//    }
//    return fila.shift();
// }
// desenfileirar()
// console.log( "Tamanho da fila após desenfileirar:", fila.length);

//Essa função visa obter o elemento que está na frente da fila,
// mas sem removê-lo. Essa operação permite verificar qual é o elemento que será processado a seguir.
 //(front)
 function frente(){
  if(isEmpty()){
    return null;// retorna null se a fila estiver vazia
  }
  return fila[0];
 }
 frente()
 // Saída tamanho da fila : 3
 console.log("Tamanho da fila: ", fila.length);