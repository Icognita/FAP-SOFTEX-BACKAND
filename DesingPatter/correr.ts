
import {ExercicioFavorito} from './exerciciosFavoritos'

export class Correr implements ExercicioFavorito {
    comecar(): void {
      console.log("Correr uma maratona...");
    }
  }