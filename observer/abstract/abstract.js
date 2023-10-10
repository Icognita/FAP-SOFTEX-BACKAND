//Interface Abstract Factory
class FabricaGUI {
    criarBotao() {}
}
  
//Fábrica Concreta para Windows que implementa a interface
class Fabrica_UI_Windows extends FabricaGUI {
    criarBotao() {
        return new BotaoWindows();
    }
}

//Fábrica Concreta para Linux que implementa a interface
class Fabrica_UI_Linux extends FabricaGUI {
    criarBotao() {
        return new BotaoLinux();
    }
}

//Interface para os produtos (Botões) Seja Windows ou Linux
class Botao {
    renderizar() {}
}

//Implementações concretas dos botões para Windows e Linux
class BotaoWindows extends Botao {
    renderizar() {
        console.log('Renderizando botão no estilo Windows');
    }
}

//Implementações concretas dos botões para Windows e Linux
class BotaoLinux extends Botao {
    renderizar() {
        console.log('Renderizando botão no estilo Linux');
    }
}

//Função para executar a aplicação com base no SO
function executarApp(sistemaOperacional) {
    //Variável criada para armazenar a fábrica concreta
    let fabrica;

    //Usa a fábrica para criar um botão específico para a plataforma
    if (sistemaOperacional === 'windows') {
        fabrica = new Fabrica_UI_Windows();
    } else if (sistemaOperacional === 'linux') {
        fabrica = new Fabrica_UI_Linux();
    } else {
        throw new Error('Plataforma não suportada');
    }

    //Usa a fábrica para criar um botão específico para a plataforma
    const botao = fabrica.criarBotao();

    //Chama o método renderizar do botão, simulando a renderização do botão na interface do usuário
    botao.renderizar();
}

//Testando no ambiente Windows
executarApp('windows');

//Testando no ambiente Linux
executarApp('linux');
