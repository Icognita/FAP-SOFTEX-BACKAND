const readline = require('readline');

class Namorada {
  chegou() {
    console.log('Namorada: Ele chegou! Apagar as luzes e fazer silêncio.');
  }
}

class Porteiro {
  constructor() {
    this.observadores = [];
  }

  registrarObservador(observador) {
    this.observadores.push(observador);
  }

  notificarObservadores() {
    this.observadores.forEach((observador) => {
      observador.chegou();
    });
  }
}

const namorada = new Namorada();
const porteiro = new Porteiro();

porteiro.registrarObservador(namorada);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('A namorada chegou? (s/n) ', (resposta) => {
  if (resposta === 's') {
    porteiro.notificarObservadores();
  } else {
    console.log('Porteiro: Avisar quando ela chegar.');
  }
  rl.close();
});