
function simularInvestimento(){

    const nome= document.querySelector("#nome").value;
    const mensalidade=Number(document.querySelector("#mensalidade").value)
    const tempContribuicao=Number(document.querySelector("#tempContribuicao").value)

 
    const taxaDejuros=0.00517;
    const tempoMeses=tempContribuicao *12;
    const taxaMeses=Math.pow(1+ taxaDejuros,tempoMeses)-1;
    const resultadoInvestimento=mensalidade*(taxaMeses/taxaDejuros);
    const resul = document.querySelector('#resultado1');


resul.innerHTML = `Olá ${nome}, juntando R$${mensalidade.toFixed(2)}
     todo mês, você terá R$${resultadoInvestimento.toFixed(2)} em ${tempContribuicao} anos.`;
}






   
    





