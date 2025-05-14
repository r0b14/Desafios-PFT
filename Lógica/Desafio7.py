# Desafio aula 7 - votação

nome = str(input("Digite o seu nome: "))
idade = int(input("Digite a sua idade: "))

if idade >= 16 and idade <= 17:
  print(f"{nome} a sua opção de votar é facultativa")
elif idade >= 18:
    print(f"{nome} a sua opção de votar é obrigatória")
else:
  print(f"{nome} a sua opção de votar é obrigatória")