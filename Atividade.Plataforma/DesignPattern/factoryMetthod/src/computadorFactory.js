"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pc_1 = __importDefault(require("./pc"));
const serve_1 = __importDefault(require("./serve"));
class ComputadorFactory {
    createComputador(type, ram, hdd, cpu) {
        if (type === "PC") {
            return new pc_1.default(ram, hdd, cpu);
        }
        else if (type === "Server") {
            return new serve_1.default(ram, hdd, cpu);
        }
        else {
            throw new Error("Computador invalido");
        }
    }
}
exports.default = ComputadorFactory;
