"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computadorFactory_1 = __importDefault(require("./computadorFactory"));
const factory = new computadorFactory_1.default();
const pc = factory.createComputador("PC", 8, 256, 2);
console.log(pc.toString()); // Output: Type: PC, RAM: 8GB, HDD: 256GB, CPU: 2GHz
const server = factory.createComputador("Server", 16, 1000, 3);
console.log(server.toString()); // Output: Type: Server, RAM: 16GB, HDD: 1000GB, CPU: 3GHz
