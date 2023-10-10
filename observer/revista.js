// Classe Subject (Assunto)
var EmpresaRevista = /** @class */ (function () {
    function EmpresaRevista() {
        this.assinantes = [];
        this.ultimaEdicao = "";
    }
    // Método para adicionar assinantes
    EmpresaRevista.prototype.adicionarAssinante = function (assinante) {
        this.assinantes.push(assinante);
    };
    // Método para remover assinantes
    EmpresaRevista.prototype.removerAssinante = function (assinante) {
        var index = this.assinantes.indexOf(assinante);
        if (index !== -1) {
            this.assinantes.splice(index, 1);
        }
    };
    // Método para notificar assinantes sobre uma nova edição
    EmpresaRevista.prototype.notificarAssinantes = function () {
        for (var _i = 0, _a = this.assinantes; _i < _a.length; _i++) {
            var assinante = _a[_i];
            assinante.receberEdicao(this.ultimaEdicao);
        }
    };
    // Método para lançar uma nova edição
    // comandos para compilar este arquivo
    /**
     * npm install -g typescript
     * npm install -g typescript
     */
    EmpresaRevista.prototype.lancarEdicao = function (edicao) {
        this.ultimaEdicao = edicao;
        this.notificarAssinantes();
    };
    return EmpresaRevista;
}());
// Implementação de Assinantes
var AssinanteRevista = /** @class */ (function () {
    function AssinanteRevista(nome) {
        this.nome = nome;
    }
    AssinanteRevista.prototype.receberEdicao = function (edicao) {
        console.log("Assinante ".concat(this.nome, " recebeu a nova edi\u00E7\u00E3o:").concat(edicao));
    };
    return AssinanteRevista;
}());
var empresaRevista = new EmpresaRevista();
var assinante1 = new AssinanteRevista("João");
var assinante2 = new AssinanteRevista("Maria");
