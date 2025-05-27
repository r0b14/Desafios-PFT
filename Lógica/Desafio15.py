# Dicionário com os códigos mágicos
codigos_magicos = {
    "A": "Milho",
    "B": "Amendoim",
    "C": "Canjica",
    "D": "Pé-de-moleque",
    "E": "Bolo de fubá"
}

# Lista para guardar os elementos escolhidos
elementos_escolhidos = []

# Loop para capturar até 5 códigos ou até o usuário digitar 0
while len(elementos_escolhidos) < 5:
    codigo = input(f"Digite o código {len(elementos_escolhidos)+1} (ou '0' para encerrar): ").upper()
    
    if codigo == "0":
        break

    if codigo in codigos_magicos:
        elementos_escolhidos.append(codigos_magicos[codigo])
    else:
        print("Código inválido. Tente novamente.")

# Exibe o resultado
print("\nElementos escolhidos:\n")
for item in elementos_escolhidos:
    print(item)

if elementos_escolhidos:
    print("\nParabéns! Você decifrou o Código Mágico e criou a receita emprestada de São João.")
