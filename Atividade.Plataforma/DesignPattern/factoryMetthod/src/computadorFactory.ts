import Computador from "./interfaces";
import PC from "./pc";
import Server from "./serve";

class ComputadorFactory{
    createComputador(type: string, ram: number, hdd: number, cpu: number): Computador {
        if (type === "PC") {
          return new PC(ram, hdd, cpu);
        } else if (type === "Server") {
          return new Server(ram, hdd, cpu);
        } else {
          throw new Error("Computador invalido");
      }
}
}

export default ComputadorFactory;


