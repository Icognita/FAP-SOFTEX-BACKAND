/*
Usando o reduce, mostre a média da turma.
const estudantes=[
    {nome:"José", nota:5.7}   
    {nome:"Maria", nota:4.8}   
    {nome:"Paula", nota:7.5}   
    {nome:"Eustáquio", nota:6.7} ,  
]
*/

const estudantes=[
    {nome:"José", nota:5.7},   
    {nome:"Maria", nota:4.8},   
    {nome:"Paula", nota:7.5},   
    {nome:"Eustáquio", nota:6.7} ,  
]

const mediaDaTurma= estudantes.reduce((media,estudante)=>media+estudante.nota,0) 
let totalMedia= mediaDaTurma/4;
console.log(totalMedia);