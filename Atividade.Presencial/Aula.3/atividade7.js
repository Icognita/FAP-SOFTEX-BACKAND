
function inverteValor(valor){

    return console.log(parseInt(valor
        .toString()//inverte para String
        .split('')//espalha
        .reverse()//inverte
        .join(''))); //junta
    
    }inverteValor(255);
