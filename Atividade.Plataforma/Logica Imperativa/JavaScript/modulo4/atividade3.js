const pessoas=[{
    nome:"Miria",
    idade:38,
    profissao:"Programadora",
    cidade:"Petrolina",
},{
    
    nome:"Carolina",
    idade:25,
    profissao:"Dentista",
    cidade:"Recife",

},
{
    
    nome:"Marcus",
    idade:40,
    profissao:"Representante",
    cidade:"Sao Paulo",

},{
    
    nome:"Biatriz",
    idade:10,
    profissao:"Estudante",
    cidade:"Petrolina"

}]

for (const propriedades of pessoas) {
    console.log(propriedades);
    
}
for(let i = 0;i<pessoas.length;i++){
    console.log(`pessoa ${i+1}`);

     for (const key in pessoas[i]) {
        // if (pessoas[i].hasOwnProperty.call(key)) {

        // }
        console.log(`${key}:${pessoas[i][key]}`);
    }
    }
