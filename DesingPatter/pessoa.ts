import {ExercicioFavorito} from './exerciciosFavoritos'


export class Pessoa {
    nome: string;
    execicioFavorito: ExercicioFavorito;
    
    constructor(nome: string, execicioFavorito: ExercicioFavorito) {
      this.nome = nome;
      this.execicioFavorito = execicioFavorito;
    }
    
    exercitar(): void {
      console.log(`${this.nome} decidiu:`);
      this.execicioFavorito.comecar();
    }
  }