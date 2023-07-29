/*2. Crie um método no objeto anterior, 
que mostre o seu nome completo*/

let dados= {
   firstName:"Pedro",
   lastName:"Joaquim",
mostraDados:function(fristName, lastName){
        console.log("meu nome é " +"/n"+ this.fristName + "/n" + this.lastName);
    }
};
dados.mostraDados("Marian", "Virginia")
