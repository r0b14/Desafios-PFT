# Tuplas com ingredientes e instruções
ingredientes_opcoes = {
    1: ("Milho", "Farinha de milho"),
    2: ("Tomate", "Cebola", "Pimentão", "Coentro"),
    3: ("Água", "Sal", "Azeite")
}

instrucoes_receita = [
    "Misture o milho com farinha de milho.",
    "Pique o tomate, cebola, pimentão e coentro e acrescente à mistura.",
    "Adicione água, sal e azeite.",
    "Coloque em uma cuscuzeira em fogo médio até a casa estiver com cheiro de cuscuz."
]

# Apresentação inicial
print("Bem-vindos ao Miniprojeto da Aula 16!")
print("Escolha uma tupla de ingredientes para decifrar a receita ancestral de cuscuz.\n")

# Menu de ingredientes
while True:
    print("\nIngredientes disponíveis:")
    for chave, tupla in ingredientes_opcoes.items():
        print(f"{chave}. {', '.join(tupla)}")
    escolha = input("\nEscolha uma tupla de ingredientes (ou digite '0' para encerrar): ")

    if escolha == '0':
        print("\nEncerrando o programa. Até a próxima descoberta ancestral!")
        break

    try:
        escolha_int = int(escolha)
        if escolha_int in ingredientes_opcoes:
            print("\nIngredientes escolhidos:", ", ".join(ingredientes_opcoes[escolha_int]))
            print("\nInstruções para a receita escolhida:")
            for passo in instrucoes_receita:
                print("-", passo)
        else:
            print("Opção inválida. Tente novamente.")
    except ValueError:
        print("Entrada inválida. Por favor, digite um número.")
