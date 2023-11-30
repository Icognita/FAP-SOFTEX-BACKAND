
class SistemaSeguranca {
  private static instancia: SistemaSeguranca;
  private senhaBaseSecreta: string = "senha123";

  private constructor() {}

  public static obterInstancia(): SistemaSeguranca {
    if (!SistemaSeguranca.instancia) {
      SistemaSeguranca.instancia = new SistemaSeguranca();
    }
    return SistemaSeguranca.instancia;
  }

  public acessarBaseSecreta(senha: string): void {
    if (senha === this.senhaBaseSecreta) {
      console.log("Acesso concedido à Base Secreta");
    } else {
      console.log("Acesso negado à Base Secreta");
    }
  }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.obterInstancia();
sistemaSeguranca.acessarBaseSecreta("senha123"); // Acesso concedido à Base Secreta

const outroSistemaSeguranca = SistemaSeguranca.obterInstancia();
outroSistemaSeguranca.acessarBaseSecreta("senha456"); // Acesso negado à Base Secreta