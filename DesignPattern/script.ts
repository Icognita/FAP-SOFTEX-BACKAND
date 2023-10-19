
  import { Correr } from "./correr";
  import {Pessoa} from "./pessoa";
  import { Futebol } from "./futebol";
  import { Musculacao } from "./musculacao";
  
    
    const Carlos = new Pessoa('Carlos', new Correr());
    Carlos.exercitar();
  
    const Mirian = new Pessoa('Mirian', new Musculacao());
    Mirian.exercitar();
   
    const Pedro = new Pessoa('Pedro', new Futebol());
    Pedro.exercitar();      
           
          

  


  
  