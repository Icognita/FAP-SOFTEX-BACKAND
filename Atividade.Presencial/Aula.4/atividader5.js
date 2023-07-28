// cria uma lista vazia
let  carros=[];
//adiciona 5 elementos na lista atraves do metodo push
carros.push("gol","centra","corrola","onix","santaFé");
//mostra na tela a lista com os elementos
console.log(carros);
// aqui criei uma condição que elimina os 3 itens
let i=0
while (i<3){
    carros.pop()
    i++
}

 //mostra na tela os elementos sem 
 console.log(carros);


