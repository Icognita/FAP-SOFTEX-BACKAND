abstract class Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public cor: string,
      public numeroRodas: number
    ) {}
  
    abstract clone(): Veiculo;
    abstract represent(): string;
  }
  
  // Subclasse Carro
  class Carro extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      public numeroPortas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Carro {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent(): string {
      return `Carro: Modelo=${this.modelo}, Marca=${this.marca}, Cor=${this.cor}, Rodas=${this.numeroRodas}, Portas=${this.numeroPortas}`;
    }
  }
  
  // Subclasse Moto
  class Moto extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      public cilindradas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Moto {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
  
    represent(): string {
      return `Moto: Modelo=${this.modelo}, Marca=${this.marca}, Cor=${this.cor}, Rodas=${this.numeroRodas}, Cilindradas=${this.cilindradas}`;
    }
  }
  
  // Classe Aplicacao
  class Aplicacao {
    criarVeiculos(): Veiculo[] {
      const veiculos: Veiculo[] = [
        new Carro('Carro1', 'Marca1', 'Azul', 4, 4),
        new Carro('Carro2', 'Marca2', 'Vermelho', 4, 2),
        new Carro('Carro3', 'Marca3', 'Verde', 4, 4),
        new Moto('Moto1', 'Marca4', 'Preto', 2, 500),
        new Moto('Moto2', 'Marca5', 'Branco', 2, 750),
        new Moto('Moto3', 'Marca6', 'Prata', 2, 600),
      ];
  
      return veiculos;
    }
  
    cloneVeiculos(veiculos: Veiculo[]): Veiculo[] {
      const veiculosClone: Veiculo[] = veiculos.map((veiculo) => veiculo.clone());
      return veiculosClone;
    }
  
    imprimirVeiculos(veiculos: Veiculo[]): void {
      veiculos.forEach((veiculo) => console.log(veiculo.represent()));
    }
  }
  
  // Execução
  const app = new Aplicacao();
  const veiculos = app.criarVeiculos();
  const veiculosClone = app.cloneVeiculos(veiculos);
  
  console.log('Veículos Originais:');
  app.imprimirVeiculos(veiculos);
  
  console.log('\nVeículos Clonados:');
  app.imprimirVeiculos(veiculosClone);