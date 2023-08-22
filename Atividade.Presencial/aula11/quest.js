const funcionario= document.querySelector("#h1");
const retorno=document.querySelector("#resultado")


const nomes=["Bia","Maria","Joaquim","Alfredo","Pedro","Joao","Patricia","sofia","Jane","Edu"];

function nameFuncionario() {
const busca= funcionario.value 
 
if(nomes.includes(busca)){
    retorno.innerHTML=busca
}else{
    retorno.textContent="valor invalido"
}
}
    

    
