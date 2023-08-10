class  Aluno{
    constructor(matricula,nome,notaProva_1,notaProva_2,notaTrabalho){
        this.matricula=matricula;
        this.nome=nome;
        this.notaProva_1=notaProva_1;
        this.notaProva_2=notaProva_2;
        this.notaTrabalho=notaTrabalho;
    }
    media(){
    const media_Prova= (this.notaProva_1+this.notaProva_2)/2;
    const mediaFinal=(media_Prova*2.5+this.notaTrabalho*2)/5;
    return mediaFinal;
    }

    notaFinal(){  
        let media= this.media();
        if(media<7){
          return Math.max(7-media);
        }else{
            return 0;


        }
        

    }
}
const aluno1=new Aluno(2530, "Mirian",10,10,10)
console.log(`Media de ${aluno1.nome}:${aluno1.media().toFixed(2)}`)
console.log(`Nota necessaria para ser aprovado por  final: ${aluno1.notaFinal().toFixed(2)}`);

/*
SAÍDA
Presencial\Atividade_Extra\questao_1.js"
Media da Mirian:25.13
Nota necessaria para a prova final: 0.00

[Done] exited with code=0 in 1.972 seconds
*/

