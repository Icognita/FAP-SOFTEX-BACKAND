// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS 


try {
  let numero1 = parseInt(prompt("Digite o primeiro valor"));
  let numero2 = parseInt(prompt("Digite o segundo valor"));

  const resultado = numero1 + numero2;

  if (resultado % 2 === 0) {
      console.log(resultado + " número é par");
  }
} catch (error) {
  console.error('Ocorreu um erro:', error.message);
} finally {
  console.log('Bloco "finally" sempre será executado.');
}