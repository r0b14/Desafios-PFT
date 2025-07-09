def adicionar_registro():
    nome = input("Digite o nome da pessoa: ")
    idade = input("Digite a idade da pessoa: ")
    vacinado = input("A pessoa foi vacinada? (S/N): ").upper()
    
    with open("registro_vacinacao.txt", "a", encoding="utf-8") as arquivo:
        arquivo.write(f"{nome},{idade},{vacinado}\n")
    print("Registro adicionado com sucesso!")

def mostrar_registros():
    try:
        with open("registro_vacinacao.txt", "r", encoding="utf-8") as arquivo:
            print("\n=== Registros de Vacinação ===")
            print("Nome\t\tIdade\tVacinado")
            print("-" * 30)
            for linha in arquivo:
                nome, idade, vacinado = linha.strip().split(",")
                print(f"{nome}\t\t{idade}\t{vacinado}")
    except FileNotFoundError:
        print("Nenhum registro encontrado.")

def main():
    while True:
        print("\n=== Sistema de Registro de Vacinação ===")
        print("1 - Adicionar novo registro")
        print("2 - Sair e mostrar registros")
        
        opcao = input("\nEscolha uma opção: ")
        
        if opcao == "1":
            adicionar_registro()
        elif opcao == "2":
            mostrar_registros()
            break
        else:
            print("Opção inválida! Tente novamente.")

if __name__ == "__main__":
    main()