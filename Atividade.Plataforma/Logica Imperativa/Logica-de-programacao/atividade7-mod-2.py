def calculadora():
    while True:
        print("Operações disponíveis:")
        print("1: Soma")
        print("2: Subtração")
        print("3: Multiplicação")
        print("4: Divisão")
        print("0: Sair")

        try:
            escolha = int(input("Digite o número da operação desejada: "))
        except ValueError:
            print("Essa opção não existe. Por favor, insira um número válido.")
            continue

        if escolha == 0:
            print("Saindo da calculadora...")
            break
        elif escolha in (1, 2, 3, 4):
            num1 = float(input("Digite o primeiro número: "))
            num2 = float(input("Digite o segundo número: "))

            if escolha == 1:
                resultado = num1 + num2
            elif escolha == 2:
                resultado = num1 - num2
            elif escolha == 3:
                resultado = num1 * num2
            elif escolha == 4:
                if num2 == 0:
                    print("Erro: Não é possível dividir por zero.")
                    continue
                resultado = num1 / num2

            print("Resultado: ", resultado)
        else:
            print("Essa opção não existe. Por favor, escolha uma das opções disponíveis.")

if __name__ == "__main__":
    calculadora()