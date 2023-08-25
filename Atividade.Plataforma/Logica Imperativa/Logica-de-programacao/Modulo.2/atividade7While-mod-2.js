/*
Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas
 pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão
0: Sair

Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.
*/


function calculadora(){
    let resultado;
    while(true) {
         let operacao=parseFloat(prompt("Digite a operaçao desejada: 1-soma | 2-Subtração | 3-Multiplicação | 4-Divisao | 0-Sair "/n));
         
         
         if(operacao===0){
              alert("SAINDO...");
              break
         }else if((operacao<1 || operacao>4 ||!(operacao))){
              console.log("Opçao nao existe tente Novamente");
              continue
         }
              let numero1=parseInt(prompt("Digite o primeiro número "));
              let numero2 =parseInt(prompt("Digite o segundo número "));

          if (operacao ===1){
              resultado = numero1+numero2;
         } else if (operacao ===2){
              resultado = numero1-numero2;
         } else if (operacao ===3){
              resultado = numero1 * numero2;
         }else if (operacao ===4){
              resultado = numero1/numero2;
              
         }    

         console.log('Resultado da Operação:', resultado);


    
    }
}

calculadora();     
