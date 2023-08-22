const numero1=document.querySelector('#h1')
const numero2= document.querySelector("#h2")
const soma = document.querySelector("#resultado")

function somar(){
    let total= Number(numero1.value) + Number(numero2.value)
    soma.innerHTML=total
}
    

