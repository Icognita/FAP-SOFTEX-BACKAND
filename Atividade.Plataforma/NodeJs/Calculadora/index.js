 
 console.log("Primeiro programa");
 let nota1=parseFloat(prompt("Digite sua primeira nota: "))
 let nota2=parseFloat(prompt("Digite sua segunda nota: "))
 let nota3=parseFloat(prompt("Digite sua terceira nota: "))
 let media=(nota1+nota2+nota3)/3;

 let resultado=(media>=7)?"Aprovado!":"Reprovado"
 console.log(resultado);



 console.log("Segundo programa");
 
 let primeiraNota=parseFloat(prompt("Digite sua primeira: "))
 let segundaNota=parseFloat(prompt("Digite sua segunda nota: "))
 let mediaParaPassar=(primeiraNota+segundaNota)/2;
 let notaMinima=(7-(mediaParaPassar*2)).toFixed(2);


 if(mediaParaPassar>=7){
    console.log("Voce foi aprovado sua media é: ",mediaParaPassar);
 }else{
    console.log("Ops você precisa de ",notaMinima," para poder passar por media");

 }

