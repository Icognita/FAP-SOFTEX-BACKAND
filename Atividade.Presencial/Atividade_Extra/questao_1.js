class  Aluno{
    constructor(matricula,nome,notaProva_1,notaProva_2,notaTrabalho){
        this.matricula=matricula;
        this.nome=nome;
        this.notaProva_1=notaProva_1;
        this.notaProva_2=notaProva_2;
        this.notaTrabalho=notaTrabalho;
    }
    media(){
    const media_Prova_Trabalho= ((this.notaProva_1+this.notaProva_2)*2.5+this.notaTrabalho)/2
    return media_Prova_Trabalho;
    }

    notaFinal(){  
        let media= this.media();
        if(media<6){
          return Math.max(0,6-media);
        }else{
            return 0;


        }
        

    }
}
const aluno1=new Aluno(2530, "Mirian",9.5,7.0,9.0)
console.log(`Media  ${aluno1.nome}:${aluno1.media().toFixed(2)}`)
console.log(`Nota necessaria para a prova final: ${aluno1.notaFinal().toFixed(2)}`);



