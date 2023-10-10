


// Classe Subject (Assunto)
class EmpresaRevista {
    private assinantes: Assinante[] = [];
    private ultimaEdicao: string = "";
    
    // Método para adicionar assinantes
    adicionarAssinante(assinante: Assinante) {
        this.assinantes.push(assinante);
    }

    // Método para remover assinantes
    removerAssinante(assinante: Assinante) {
        const index = this.assinantes.indexOf(assinante);
        if (index !== -1) {
            this.assinantes.splice(index, 1);
        }
    }
    
    // Método para notificar assinantes sobre uma nova edição
    notificarAssinantes() {
        for (const assinante of this.assinantes) {
            assinante.receberEdicao(this.ultimaEdicao);
        }
    }
    
    // Método para lançar uma nova edição
    // comandos para compilar este arquivo
    /**
     * npm install -g typescript
     * npm install -g typescript
     */
    lancarEdicao(edicao: string) {
        this.ultimaEdicao = edicao;
        this.notificarAssinantes();
    }
}

// Classe Observer (Observador)
interface Assinante {
    receberEdicao(edicao: string): void;
}

// Implementação de Assinantes
class AssinanteRevista implements Assinante {
    constructor(private nome: string) {
        this.nome = nome
    }

    receberEdicao(edicao: string){

        console.log(`Assinante ${this.nome} recebeu a nova edição:${edicao}`)

    }
    } 



const empresaRevista = new EmpresaRevista();
const assinante1 = new AssinanteRevista("João");
const assinante2 = new AssinanteRevista("Maria");

