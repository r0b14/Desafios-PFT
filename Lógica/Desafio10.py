# Programa: Festival de Tapiocas Mágicas (Com while e sem lista)

print("Bem-vindo(a) ao Festival de Tapiocas Mágicas!")
print("Você pode escolher até 5 ingredientes para sua tapioca.")
print("Digite 'sair' para terminar antes.\n")

# Pergunta ao usuário quantos ingredientes ele deseja adicionar
quantidade = int(input("Quantos ingredientes você quer adicionar (até 5)? "))

# Garante que a quantidade não ultrapasse 5
enquanto_valido = False
while not enquanto_valido:
    if quantidade > 0 and quantidade <= 5:
        enquanto_valido = True
    else:
        print("Quantidade inválida. Digite um valor entre 1 e 5.")
        quantidade = int(input("Quantos ingredientes você quer adicionar (até 5)? "))

# Variáveis para armazenar ingredientes
ingrediente1 = ""
ingrediente2 = ""
ingrediente3 = ""
ingrediente4 = ""
ingrediente5 = ""

contador = 1

while contador <= quantidade:
    ingrediente = input("Digite o ingrediente " + str(contador) + ": ")

    if ingrediente == "sair":
        break

    if contador == 1:
        ingrediente1 = ingrediente
    elif contador == 2:
        ingrediente2 = ingrediente
    elif contador == 3:
        ingrediente3 = ingrediente
    elif contador == 4:
        ingrediente4 = ingrediente
    elif contador == 5:
        ingrediente5 = ingrediente

    contador = contador + 1

print("\nIngredientes escolhidos para sua tapioca:")

if ingrediente1 != "":
    print("-", ingrediente1)
if ingrediente2 != "":
    print("-", ingrediente2)
if ingrediente3 != "":
    print("-", ingrediente3)
if ingrediente4 != "":
    print("-", ingrediente4)
if ingrediente5 != "":
    print("-", ingrediente5)

print("\nObrigado por participar!")
