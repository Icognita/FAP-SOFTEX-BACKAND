function exibePrimeiroMensagem(mensagem,callback){
    console.log(mensagem);
    callback()
}
function exibeSegundaMensagem(){
    console.log("segunda função");
}

exibePrimeiroMensagem('primeira função', exibeSegundaMensagem)