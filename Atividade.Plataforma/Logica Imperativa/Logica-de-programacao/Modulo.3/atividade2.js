/**
 * Nesta atividade, você deve criar um código em JavaScript 
  com uma matriz bidimensional para armazenar informações sobre animais e as suas características.
 Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.
 */


 let tipoAnimal=[
    ["Vaca","mimosa", "Mamífero",5],
    ["Cachorro","chola", "Canino", 3],
    ["Leão","simbá", "Felino", 9],
    ["Gato","bichano" ,"Felino", 2],
  ];
function matrizAnmal(){
    for(let animal=0; animal<tipoAnimal.length; animal++){
        for(let dadosAnimais=0; dadosAnimais<tipoAnimal[animal].length;dadosAnimais++){
            console.log(`${animal} ${tipoAnimal[animal]},${dadosAnimais}\n `);
            break
            }
            }
        }
        matrizAnmal()



// tamanho

        /*
        
        SAÍDA
Imperativa\Logica-de-programacao\Modulo.3\atividade3.js"
0 Vaca,Mamífero,5,0
 
1 Cachorro,Canino,3,0
 
2 Leão,Felino,9,0
 
3 Gato,Felino,2,0
        
        */



