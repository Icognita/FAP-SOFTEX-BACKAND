/*5. Sistema de Gastos Familiar
Crie um objeto que possuirá 2 propriedades, ambas do tipo array
• Receitas : [ ]
• Despesas: [ ]
Agora, crie uma função que irá calcular o total de receitas e despesas 
e irá mostrar uma mensagem se a família está com o saldo positivo 
ou negativo, seguido do valor do saldo
*/

let GastoFamilia={
    receita:[],
    despesas:[],
   controleDeDespesa:function(receita,despesas){
    const ReceitaTotal= this.receita.reduce((total,receita)=> total + receita);
    const DespesaTotal= this.despesa.reduce((total,despesa)=> total + despesa);

     const saldo= ReceitaTotal *DespesaTotal

     if(saldo>=0){
        console.log('Saldo positivo',saldo);
     }else{
        console.log("Saldo negativo",saldo);
     }

   }
}