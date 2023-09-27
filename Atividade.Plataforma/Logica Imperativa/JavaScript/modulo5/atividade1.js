class Carro{
    constructor(modelo,cor) {
        this.modelo=modelo;
        this.cor=cor;
        this.velocidade=0;
    }
    acelerar(quantidade){
        this.velocidade+=quantidade;
        console.log(`this.velocidade ${this.velocidade} km/h`);
    }
   frear(){
    this.velocidade=0;
    console.log("Freando");

   }    
}