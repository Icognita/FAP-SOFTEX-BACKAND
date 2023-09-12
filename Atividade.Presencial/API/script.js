

// const { response, application } = require("express");
// const mostrarTela=document.getElementById("endereço")
// function APIcorreios(){

//     fetch('https://viacep.com.br/ws/56327140/json')
//     .then(response=>(response.json()))
//     .then(cep=>{
//      mostrarTela.innerHTML=`
//      bairro: ${cep.bairro}
//      Endereço${cep.logradouro}
//     local:${cep.localidade}`
//         console.log(cep);
//     })
//     // .catch(err=>console.log(err))

// }APIcorreios()

//https://api.chucknorris.io/jokes/random
// function chucknorris(){
// fetch('https://api.chucknorris.io/jokes/random')
// .then(response=>(response.json()))
// .then(mensagens=>{
//     mostrarTel
// })


// }

const valorBitcoinElement = document.getElementById('valor-bitcoin');
function obterValorBitcoin() {
 
    fetch('https://blockchain.info/ticker')
      .then(response => response.json())
      .then(data => {
          valorBitcoinElement.innerHTML = `R$ ${data.BRL.last}`;
        })
        .catch(error => {
          console.log('Erro ao obter valor da Bitcoin:', error);
        });
      
  }
  window.addEventListener('DOMContentLoaded', obterValorBitcoin());


  //https://api.github.com/users/origamid/followers
  // pegar id nome avata



  //https://github.com/public-apis/public-apis