let contador=0;
const contadorElemento=document.getElementById("contador")

function incrementar(){
    contador=contador+1
    contadorElemento.innerHTML=contador
}

let contadorInverso=20;
const contadorInvE=document.getElementById("decremento")

function decremento(){
    contadorInverso=contadorInverso-1
    contadorElemento.innerHTML=contadorInverso
}
