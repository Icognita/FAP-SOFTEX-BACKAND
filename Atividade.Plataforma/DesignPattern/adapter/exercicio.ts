
/**
 * Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.

Siga o exemplo apresentado no Hipertexto 4 e crie as classes Adaptador Pato e Adaptador PatoDemo para demonstrar o uso da classe Adaptador Pato.
 */
// Defina a interface Galinha
interface Galinha {
    cacarejar(): void;
  }
  
  // Crie a classe GalinhaComum que implementa a interface Galinha
  class GalinhaComum implements Galinha {
    cacarejar(): void {
      console.log("Cocoricó!");
    }
  }
  
  // Crie a interface Pato
  interface Pato {
    grasnar(): void;
  }
  
  // Crie a classe PatoSelvagem que implementa a interface Pato
  class PatoSelvagem implements Pato {
    grasnar(): void {
      console.log("Quack! Quack!");
    }
  }
  
  // Crie o adaptador PatoGalinhaAdapter para permitir que um Pato seja usado como Galinha
  class PatoGalinhaAdapter implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      // Utiliza o método grasnar do Pato como se fosse cacarejar de uma Galinha
      this.pato.grasnar();
    }
  }
  
  // Crie a classe AdaptadorPatoDemo para demonstrar o uso do adaptador
  class AdaptadorPatoDemo {
    static main(): void {
      const galinhaComum: Galinha = new GalinhaComum();
      const patoSelvagem: Pato = new PatoSelvagem();
  
      // Use o adaptador para fazer o Pato se comportar como uma Galinha
      const patoAdapter: Galinha = new PatoGalinhaAdapter(patoSelvagem);
  
      console.log("Comportamento da Galinha Comum:");
      galinhaComum.cacarejar();
  
      console.log("\nComportamento do Pato Selvagem:");
      patoSelvagem.grasnar();
  
      console.log("\nComportamento do Pato Adaptado como Galinha:");
      patoAdapter.cacarejar();
    }
  }
  
  // Execute o exemplo
  AdaptadorPatoDemo.main();