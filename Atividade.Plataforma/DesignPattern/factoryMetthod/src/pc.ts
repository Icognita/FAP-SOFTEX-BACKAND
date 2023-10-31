import Computador from './interfaces';
 class PC implements Computador{
    constructor(private ram: number, private hdd: number, private cpu: number) {}

  getRAM(): number {
    return this.ram;
  }

  getHDD(): number {
    return this.hdd;
  }

  getCPU(): number {
    return this.cpu;
  }

  getType(): string {
    return "PC";
  }

  toString(): string {
    return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
  }

 }
 export default PC;