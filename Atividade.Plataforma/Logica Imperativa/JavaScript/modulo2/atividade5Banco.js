class Banco{
constructor(conta,saldo,tipoConta,agencia) {
    this.conta=conta;
    this.saldo=saldo;
    this.tipoConta=tipoConta;
    this.agencia=agencia;
}
buscasaldo(){
    return this.saldo;
}   
deposito(valor){
    this.saldo+=valor;
}

saque(valor){
    if (valor<=this.saldo){
        this.saldo-=valor;
    }else{
        console.log("Saldo insuficiente");
    }
}
 numeroDaConta(){
    return this.conta
 }

}
const minhaConta= new Banco(102530,50,"conta corrente",0001)
console.log(`Saldo atual : ${minhaConta.buscasaldo()}`);
minhaConta.deposito(50);
console.log(`Saldo atual depois do deposito: ${minhaConta.buscasaldo()}`);
minhaConta.saque(30);
console.log(`Saldo atual depois do saque : ${minhaConta.buscasaldo()}`);
console.log(`Numero da conta: ${minhaConta.numeroDaConta()} \n Tipo de conta: ${minhaConta.tipoConta}\n Agencia${minhaConta.agencia}`);

