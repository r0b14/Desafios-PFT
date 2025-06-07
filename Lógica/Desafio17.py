import random

def gerar_cartela_bingo():
    numeros = random.sample(range(100), 25)  # Gera 25 números únicos de 0 a 99
    cartela = []

    for i in range(5):
        linha = numeros[i*5:(i+1)*5]  # Cria cada linha com 5 números
        cartela.append(linha)

    return cartela

def exibir_cartela(cartela):
    print("=== CARTELA DE BINGO ===")
    for linha in cartela:
        for numero in linha:
            print(f"{numero:02}", end="  ")
        print()

# Programa principal
cartela = gerar_cartela_bingo()
exibir_cartela(cartela)
