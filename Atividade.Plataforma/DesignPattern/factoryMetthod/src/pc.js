"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PC {
    constructor(ram, hdd, cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }
    getRAM() {
        return this.ram;
    }
    getHDD() {
        return this.hdd;
    }
    getCPU() {
        return this.cpu;
    }
    getType() {
        return "PC";
    }
    toString() {
        return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
    }
}
exports.default = PC;
