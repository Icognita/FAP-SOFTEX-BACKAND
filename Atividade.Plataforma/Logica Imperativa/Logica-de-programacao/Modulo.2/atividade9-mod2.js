/**
 * Desenvolva um código que simule uma eleição com três candidatos.
 - candidato_X => 889
 - candidato_Y => 847
 - candidato_Z => 515
 - branco => 0

 *O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

 *Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 
*/
function eleicao(){
    let candidato_X = 0;
    let candidato_Y = 0;
    let candidato_Z = 0;
    let branco = 0;
    let nulo = 0;

    let eleicao=false;
    
    while(!eleicao){

    try {
           let voto= Number(prompt("Digite o número do candidato \n CandidatoX= 1 \n candidato_Y =2 \n candidato_Z=3 \n branco=0 \n")) 

        if (voto===1) {
            candidato_X++;
        }else if(voto===2){
            candidato_Y++;
        }else if(voto===3){
            candidato_Z++;
        }else if(voto===0){
            branco++;
        }else {
            nulo++;
            throw "voto inválido. Por favor tente novamento. "
        }


        let resposta= prompt("Deseja finalizar a votação? (s/n): \n " )
        if (resposta.toLowerCase() === "s") {
           eleicao = true;
        }
    } catch (e) {
        console.log(e);
     
    }
    
 }
 if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
    console.log("O candidato X venceu a eleição!");
} else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
    console.log("O candidato Y venceu a eleição!");
} else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
    console.log("O candidato Z venceu a eleição!");
} else {
    console.log("A eleição terminou em empate!");
}

console.log("Votos do candidato X:", candidato_X);
console.log("Votos do candidato Y:", candidato_Y);
console.log("Votos do candidato Z:", candidato_Z);
console.log("Votos em branco:", branco);
console.log("Votos nulos:", nulo);
}
eleicao();

            
        

