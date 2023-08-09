let predio_1andar = [2, 4, 3, 1];
let predio_2andar = [3, 2, 2, 3];
let predio_3andar = [1, 1, 2, 2];
let predio_4andar = [4, 2, 3, 4];

function exibirMoradores() {

    for (apartamento = 0; apartamento < predio_1andar.length; apartamento++) {

        console.log(`Andar 1,Apartamento${apartamento+1}:${predio_1andar[apartamento]} moradores`);
    }
    for (apartamento = 0; apartamento < predio_2andar.length; apartamento++) {

        console.log(`Andar 2,Apartamento${apartamento+1}:${predio_2andar[apartamento]} moradores`);

    }
    for (apartamento = 0; apartamento < predio_3andar.length; apartamento++) {

        console.log(`Andar 3,Apartamento${apartamento+1}:${predio_3andar[apartamento]} moradores`);

    }
    for (apartamento = 0; apartamento < predio_4andar.length; apartamento++) {

        console.log(`Andar 4,Apartamento${apartamento+1}:${predio_4andar[apartamento]} moradores`);
    }


}


exibirMoradores()

console.log("Exibe moradores");

let predio=[
    [2, 4, 3, 1],
    [3, 2, 2, 3],
    [1, 1, 2, 2],
    [4, 2, 3, 4],
];

function exibirMoradores2() {

    for(let andar=0; andar<predio.length;andar++){
        for(let apartamento=0;apartamento <predio[andar].length;apartamento++)
        console.log(`Andar |${andar+1}, Apartamento ${apartamento+1}:${predio[andar][apartamento]}moradores`);
    }

}
exibirMoradores2()