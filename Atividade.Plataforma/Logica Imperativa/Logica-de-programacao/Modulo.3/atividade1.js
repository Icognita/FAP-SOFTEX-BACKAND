/**
 * Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas 
modificações, alterando uma cor e uma idade. Ao terminar, 
imprima novamente todas as informações das três listas.

 */

let nome = [
    "Maria",
    "João",
    "Pedro",
    "Gustavo",
    "Eduardo",
    "Joaquim",
    " Frederico",
    "Maria",
    "Luiza",
    "Patricia", 
];
let idade = [
    10,
    20,
    30,
    50,
    13,
    25,
    38,
    63,
    18,
    25
];
let cor = [
    "Azul",
    "Roxa",
    "Amarelo",
    "Verde",
    "Cinza",
    "Rosa",
    "Preto",
    "Vermelho",
    "Laranja",
    "Branco"
]

console.log("Lista de Nomes:","\n" , nome, "Lista de Idade:","\n",idade ,"\n", "lista de cor:","\n",cor);

nome.splice(3,1,"Mirian")
idade.splice(3,1,25)
cor.splice(3,1,"Branco")

console.log("Seu nome na posição [3]----> ", nome[3],"\n","Sua idade na posição[3]---->",idade[3],"\n", "Sua cor preferida na posição[3]----> ",cor[3]);


console.log( "Lista com Nomes ,Idade e Cor alterada","\n", nome,"\n" ,idade ,"\n" , cor);


/**
 * Saída
 * 
 * Lista de Nomes: 
 [
  'Maria',      'João',
  'Pedro',      'Gustavo',
  'Eduardo',    'Joaquim',
  ' Frederico', 'Maria',
  'Luiza',      'Patricia'
] Lista de Idade: 
 [
  10, 20, 30, 50, 13,
  25, 38, 63, 18, 25
] 
 lista de cor: 
 [
  'Azul',    'Roxa',
  'Amarelo', 'Verde',
  'Cinza',   'Rosa',
  'Preto',   'Vermelho',
  'Laranja', 'Branco'
]
Seu nome na posição [3]---->  Mirian 
 Sua idade na posição[3]----> 25 
 Sua cor preferida na posição[3]---->  Preto

Lista com Nomes ,Idades e Cor alteradas 
 [
  'Maria',      'João',
  'Pedro',      'Mirian',
  'Eduardo',    'Joaquim',
  ' Frederico', 'Maria',
  'Luiza',      'Patricia'
] 
 [
  10, 20, 30, 25, 13,
  25, 38, 63, 18, 25
] 
 [
  'Azul',    'Roxa',
  'Amarelo', 'Branco',
  'Cinza',   'Rosa',
  'Preto',   'Vermelho',
  'Laranja', 'Branco'
]

 */