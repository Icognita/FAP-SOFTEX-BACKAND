/**
 * Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:

- deve imprimir no console: Sanduíche de Carne, Bacon, Queijo MussarelaRalado custa $7,49. -o sanduíche de frango assado custa $4,50.-o ingrediente adicional pepperoni custa $0,99. - o ingrediente adicional queijo mussarela ralado custa $2,00. - crie as classes necessárias. FrangoAssado, Pepperoni e QueijoMussarela Ralado.

 * 
 */


// Interface que define o contrato para o componente concreto e suas decoradoras
interface Sanduiche {
    custo(): number;
}

// Componente concreto
class SanduicheFrangoAssado implements Sanduiche {
    custo(): number {
        return 4.50;
    }
}

// Decorador abstrato
abstract class IngredienteAdicionalDecorator implements Sanduiche {
    protected sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    custo(): number {
        return this.sanduiche.custo();
    }
}

// Decorador concreto
class Pepperoni extends IngredienteAdicionalDecorator {
    custo(): number {
        return super.custo() + 0.99;
    }
}

// Decorador concreto
class QueijoMussarelaRalado extends IngredienteAdicionalDecorator {
    custo(): number {
        return super.custo() + 2.00;
    }
}

// Uso
let sanduiche: Sanduiche = new SanduicheFrangoAssado();
sanduiche = new Pepperoni(sanduiche);
sanduiche = new QueijoMussarelaRalado(sanduiche);

console.log(`Sanduíche de Frango Assado com Pepperoni e Queijo Mussarela Ralado custa $,${sanduiche}.custo().toFixed(2)}`);