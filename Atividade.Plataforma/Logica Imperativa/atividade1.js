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
    "Patricia", "\n"
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

console.log("Lista de Nomes ","\n" , nome, "Lista de Idade","\n",idade ,"\n", "lista de cor ","\n",cor);

nome[3]="Mirian";
idade[3]= 25
cor[3]="Amarelo";

console.log("Seu nome é  ", nome[3],"\n","Sua idade é   ",idade[5],"\n", "Sua cor preferida é  ",cor[6]);


console.log( "Lista com Nomes ,Idade e Cor alterada","\n", nome,"\n" ,idade ,"\n" , cor);


/**
 * saida do terminal
 * [Running] node "c:\Users\miria\Desktop\FAP.Softex.BackAnd\FAP-SOFTEX-BACKAND-1\Atividade.Plataforma\Logica Imperativa\atividade1.js"
Lista de Nomes  
 [
  'Maria',      'João',
  'Pedro',      'Gustavo',
  'Eduardo',    'Joaquim',
  ' Frederico', 'Maria',
  'Luiza',      'Patricia',
  '\n'
] Lista de Idade 
 [
  10, 20, 30, 50, 13,
  25, 38, 63, 18, 25
] 
 lista de cor  
 [
  'Azul',    'Roxa',
  'Amarelo', 'Verde',
  'Cinza',   'Rosa',
  'Preto',   'Vermelho',
  'Laranja', 'Branco'
]
Seu nome é   Mirian 
 Sua idade é    25 
 Sua cor preferida é   Preto
Lista com Nomes ,Idade e Cor alterada 
 [
  'Maria',      'João',
  'Pedro',      'Mirian',
  'Eduardo',    'Joaquim',
  ' Frederico', 'Maria',
  'Luiza',      'Patricia',
  '\n'
] 
 [
  10, 20, 30, 25, 13,
  25, 38, 63, 18, 25
] 
 [
  'Azul',    'Roxa',
  'Amarelo', 'Amarelo',
  'Cinza',   'Rosa',
  'Preto',   'Vermelho',
  'Laranja', 'Branco'
]

 */