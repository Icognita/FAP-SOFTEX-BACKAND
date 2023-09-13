const array1=[1,50,10];
for(const erray2 of array1){
    console.log(erray2);
}

/**
 * for in
 * percorre sobre o objeto acessando a propriedade
 */
let livros={
    nome:'narnia',
    cod:4580,
    categoria:'açao aventura'
};
for (const propriedade in livros) {
    console.log(`${propriedade}:${livros[propriedade]}`);
    }


