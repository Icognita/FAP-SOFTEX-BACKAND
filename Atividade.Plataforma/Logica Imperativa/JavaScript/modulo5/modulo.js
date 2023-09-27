//  para baixar :
// npm i -g npm 
//npm i --save lodash
//  import _ from 'lodash';



// function fatorial(n){
    //     if(n===0|| n===1){
        //         return 1;
        //     }else{
            //         return n*fatorial(n-1)
            //     }
            // }
            // let resultado =fatorial(5);
            // console.log(resultado);
            // solicita o numero ao usurário
            
            // let numero=parseInt(prompt("Digite um numero para calcular o fatorial ->  "))
            // //verifica se o numero é válido
            
            // if(!isNaN(numero)){
                //     const resultado=fatorial(numero)
                //     console.log(`O fatorial de ${numero} é ${resultado}.tofixed(3)`);
                // }else{
                    //     console.log("Digite um número válido");
                    // }
                    
                    // modulos lodash
                    import chain from 'lodash/chain';
                    

let listaDeEstudantes = [
    {nome: 'Beatriz', sobrenome: 'Machado', genero: 'feminino', idade: 20},
    {nome: 'Matheus', sobrenome: 'Gomes', genero: 'masculino', idade: 19},
    {nome: 'Laura', sobrenome: 'Matos', genero: 'feminino', idade: 24},
    {nome: 'Fred', sobrenome: 'Moura', genero: 'masculino', idade: 23},
    {nome: 'Sabrina', sobrenome: 'Nelles', genero: 'feminino', idade: 21}
    ];

    let  listaOrdenada=chain(listaDeEstudantes)
    .filter({genero:'feminino'})
    .sortBy('idade')
    .join(',')
    .value()
    console.log("Lista ordenada receberá=> ",listaOrdenada);



