/**
 * Desenvolva um programa que recebe do usuário nome completo e ano de nascimento
 *  que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do
 *  usuário e a idade que completou, ou completará, no ano atual (2022).
 **
 Caso o usuário não digite um número ou apareça um inválido no campo do ano, o 
 * sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
 */


 function CalcularIdade(){
    let nomeCompleto=prompt("Digite seu nome completo")
    let anoNacimeto;

    while(true){
    
         anoNacimeto= parseInt(prompt("Digite seu ano de nascimento( entre 1922 e 2023)"));
       if(!isNaN(anoNacimeto)&& anoNacimeto>=1922 && anoNacimeto<=2023){
         break;

       }else if(!(anoNacimeto)){
         throw new Error('Ano diferente do esperado')
       
       }
      
      let anoAtual=2023;
      let idade=anoAtual-anoNacimeto;

      try {
         console.log("Olá : " +nomeCompleto);
         console.log("Idade em "+ +anoAtual + ":" + idade);
         CalcularIdade();
    
         
      } catch (error) {
         console.log(Error.mensagen," Ano invalido");
         
      }
   }
    }
    CalcularIdade()
 