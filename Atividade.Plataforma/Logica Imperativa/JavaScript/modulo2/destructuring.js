
 const calculadora=(operador,[num1,num2]=[15,5])=>"Resultado final"+eval(`${num1} ${operador} ${num2}`);
calculadora('-')


// const getVencedoresTorneio = () => [
//     { id: 1, nome: 'Tiago' },
//     { id: 2, nome: 'Pedro' },
//     { id: 3, nome: 'Maria' }
//   ]

//   const notifica = (...nomes) => console.log(
//     `vencedores do torneio:\n%s`,
//     nomes.map((v, k) => `${++k}º lugar - $`).join('\n')
//   )

//   const [ usuarioA, usuarioB ] = getVencedoresTorneio()

//   notifica(usuarioA.nome, usuarioB.nome)
//   // vencedores do torneio:
//   // 1º lugar - Tiago
//   // 2º lugar - Pedro

/**Exemplo 1
É comum a necessidade de recuperar um item armazenado em um Array e atribuí-lo a
 uma variável. Nestes casos podemos fazer como no exemplo abaixo: */

//   const totais=[10,20,30]
//   const[ valorA, valorB, valorC]=totais


//   console.log(valorA);
//   console.log(valorB);
//   console.log(valorC);
  /** Exemplo 2
É possível extrair items de um Array e armazenar o resto:*/

//    const[ valoA, valoB, ...valoC]=[10,20,30,40,50,60]
//    console.log(valoA);
//    console.log(valoB);
//    console.log(valoC);
/**
 * Exemplo 3
Podemos pré-definir valores quando não exista determinado elemento em um Array, para que quando seja 
feita a extração deste resultado para uma variável ele receba um valor padrão:
 */
   const [itemA = 5, itemB = 10] = [40]

  console.log(itemA) // 20
  console.log(itemB) // 10
// Exemplo 4
  //Podemos extrair valores de objetos literais utilizando o nome
  // de suas propriedades, como no exemplo abaixo:

//   const usuario={nome:"Pedro",idade:18}
//   const {nome, idade}=usuario
//   console.log(nome, "\n", idade);

  
/**Exemplo 5
 * Podemos também utilizar os valores pré definidos em objetos assim como é feito nos Arrays: */
//   const usuario = { idade: 18, temFilhos: true }

//   const { nome = 'Jonas', idade, temFilhos } = usuario

//   console.log(nome) // Jonas
//   console.log(idade) // 18
//   console.log(temFilhos) // true

 /* 6. Extraindo valores de objetos
Podemos capturar os resultados que não tenham sido extraídos como variáveis:
*/
const usuario = { nome: 'Pedro', idade: 18, temFilhos: true }

  const { nome, ...outrosDados } = usuario

  console.log(nome) // Pedro
  console.log(outrosDados) // { idade: 18, temFilhos: true }