export  interface Computador {
    getRAM(): number;
    getHDD(): number;
    getCPU(): number;
    getType(): string;
    toString(): string;
  } 