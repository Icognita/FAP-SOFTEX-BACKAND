class Develope{
    constructor(nome, type){
        this.nome=nome;
        this.type="Develope"

    } 
        
    
}
class Teste{
    constructor(nome, type) {
        this.nome=nome;
        this.type="Teste"
        
    }
}

class Factory{
    create(nome,type){
        switch(type){
            case 1:
                return new Develope(nome)
                break
            case 2 :
                return new Teste(nome)
                break        
        }
    }
}
factory=new Factory
console.log(factory.create("Mirian",1));
console.log(factory.create("Mirian",2));

