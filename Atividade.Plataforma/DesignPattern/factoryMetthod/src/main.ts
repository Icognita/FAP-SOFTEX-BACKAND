import ComputadorFactory from './computadorFactory'

const  factory= new ComputadorFactory();

const pc = factory.createComputador("PC", 8, 256, 2);
console.log(pc.toString()); // Output: Type: PC, RAM: 8GB, HDD: 256GB, CPU: 2GHz

const server = factory.createComputador("Server", 16, 1000, 3);
console.log(server.toString()); // Output: Type: Server, RAM: 16GB, HDD: 1000GB, CPU: 3GHz