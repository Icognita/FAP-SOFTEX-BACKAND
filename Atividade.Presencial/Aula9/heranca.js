class Pessoa{
    constructor(nome, salario){
        this.nome=nome;
        this.salario=salario;

    }

}
 Pessoa.name="Mirian"
 Pessoa.salario=3000
class Aluno extends Pessoa{
    constructor(nome, salario,nota){
        super(nome,salario,nota)
        this.nota=nota;
    }
}

Aluno.nome=("Alfredo");
Aluno.salario=(5000);
Aluno.nota=10
 console.log(Aluno);

