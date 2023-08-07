/**
 * 5. Usando os métodos, POP, SHIFT, UNSHIFT, PUSH. Faça o que se pede:
Const numbers = [1, 2, 3, 4, 5,8,9,10,14]
• Adicione o numero -1 ao inicio do array
• Remova o ultimo elemento do array
• Remova os numeros 5,8,9
• Adicione os números [50,60,70] ao final do array
• Remova o primeiro elemento do array
 */

const numbers = [1, 2, 3, 4, 5,8,9,10,14]

//• Adicione o numero -1 ao inicio do array
numbers.unshift(-1)
console.log(numbers);
//• Remova o ultimo elemento do array
numbers.pop()
console.log(numbers);
//• Remova os numeros 5,8,9
    
console.log(numbers);
//• Adicione os números [50,60,70] ao final do array
numbers.push(50,60,70)
console.log(numbers);

//• Remova o primeiro elemento do array
numbers.shift()
console.log(numbers);


