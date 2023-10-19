import {ExercicioFavorito} from './exerciciosFavoritos'

export class Musculacao implements ExercicioFavorito {
    comecar(): void {
      console.log("Fazer musculação...");
    }
  }