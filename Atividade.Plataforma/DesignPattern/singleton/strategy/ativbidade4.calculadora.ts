// Interface Strategy
interface OperationStrategy {
    execute(num1: number, num2: number): number;
}

// Classes concretas que implementam a Strategy para Soma, Subtração e Multiplicação
class AdditionStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
        return num1 + num2;
    }
}

class SubtractionStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
}

class MultiplicationStrategy implements OperationStrategy {
    execute(num1: number, num2: number): number {
        return num1 * num2;
    }
}

// Contexto que utiliza a Strategy
class Calculator {
    private strategy: OperationStrategy;

    setStrategy(strategy: OperationStrategy): void {
        this.strategy = strategy;
    }

    calculate(num1: number, num2: number): number {
        if (!this.strategy) {
            throw new Error('Strategy not set');
        }

        return this.strategy.execute(num1, num2);
    }
}

// Exemplo de uso
const calculator = new Calculator();

// Definindo a Strategy com base na operação informada pelo usuário
const operation = process.argv[2]; // Operação como argumento da linha de comando (ex: "add", "subtract", "multiply")
let strategy: OperationStrategy;

switch (operation) {
    case 'add':
        strategy = new AdditionStrategy();
        break;
    case 'subtract':
        strategy = new SubtractionStrategy();
        break;
    case 'multiply':
        strategy = new MultiplicationStrategy();
        break;
    default:
        throw new Error('Invalid operation');
}

calculator.setStrategy(strategy);

// Recebendo os dois números como entrada do usuário (pode ser melhorado para lidar com diferentes formas de entrada)
const num1 = parseInt(process.argv[3], 10); // Primeiro número como argumento da linha de comando
const num2 = parseInt(process.argv[4], 10); // Segundo número como argumento da linha de comando

// Calculando e imprimindo o resultado
const result = calculator.calculate(num1, num2);
console.log(`Resultado da operação ${operation}: ${result}`);