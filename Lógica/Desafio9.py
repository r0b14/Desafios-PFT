usuario = input("Digite seu nome: ")

print("Escolha o seu sanduíche:")
print("1. Carne = R$4.00")
print("2. Frango = R$3.00")
print("3. Vegetariano = R$10.00")
sanduiche = int(input("Opção: "))

print("Escolha o seu complemento:")
print("1. Queijo = R$1.00")
print("2. Presunto = R$1.00")
print("3. Milho = R$2.00")
complemento = int(input("Opção: "))

print("Escolha o seu refrigerante:")
print("1. Coca-Cola = R$5.00")
print("2. Guaraná = R$5.00")
print("3. Fanta = R$5.00")
refrigerante = int(input("Opção: "))

valor = 0

if sanduiche == 1:
    tipo_sanduiche = "Carne"
    valor += 4
elif sanduiche == 2:
    tipo_sanduiche = "Frango"
    valor += 3
elif sanduiche == 3:
    tipo_sanduiche = "Vegetariano"
    valor += 10
else:
    print("Opção de sanduíche inválida")
    tipo_sanduiche = "Desconhecido"

if complemento == 1:
    tipo_complemento = "Queijo"
    valor += 1
elif complemento == 2:
    tipo_complemento = "Presunto"
    valor += 1
elif complemento == 3:
    tipo_complemento = "Milho"
    valor += 2
else:
    print("Opção de complemento inválida")
    tipo_complemento = "Desconhecido"

if refrigerante == 1:
    tipo_refrigerante = "Coca-Cola"
    valor += 5
elif refrigerante == 2:
    tipo_refrigerante = "Guaraná"
    valor += 5
elif refrigerante == 3:
    tipo_refrigerante = "Fanta"
    valor += 5
else:
    print("Opção de refrigerante inválida")
    tipo_refrigerante = "Desconhecido"

print(f"\nOlá {usuario}, seu pedido ficou no valor de R${valor:.2f}")
print(f"O seu pedido contém {tipo_sanduiche}, {tipo_complemento} e {tipo_refrigerante}.")
print("Obrigado por comprar conosco ;)")