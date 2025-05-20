# Bem-vindos ao Miniprojeto da Aula 12! Este projeto é uma oportunidade emocionante para aplicar na prática os conceitos de estrutura de repetição em Python. Na rua Bom Jesus, no Recife Antigo, acontece anualmente a edição especial da "Feira de Artesanato Místico". Na edição de 2023, um artefato lendário desapareceu misteriosamente.

# Apresentação ao usuário
print("Bem-vindo(a) à Feira de Artesanato Místico!")
print("Você é um(a) detetive em busca de um artefato desaparecido.")
print("Explore as barracas da feira e tente encontrar o objeto perdido!\n")

total_barracas = 5
barraca_certa = 3

# investigar cada barraca
for barraca in range(1, total_barracas + 1):
    print(f"Você está na barraca {barraca}.")
    
    resposta = input("Deseja investigar esta barraca? (s/n): ").strip()

    if resposta.lower() == "s":
        print("Você começa a vasculhar os objetos...\n")

        if barraca == barraca_certa:
            print("Parabéns! Você encontrou o artefato místico desaparecido!")
            break  # Encerra o laço porque o objeto foi encontrado
        else:
            print("Hmm... nada aqui. Vamos continuar procurando.\n")
    else:
        print("Você decidiu não investigar essa barraca.\n")

# Fim das buscas
if barraca != barraca_certa:
    print("Você investigou todas as barracas, mas não encontrou o artefato.")
    print("Tente novamente outra hora.")
