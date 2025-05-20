#Como um(a) pesquisador(a) de frevo e uma pessoa tecnológica, você embarca em uma jornada para desvendar o enigma e libertar esses passos esquecidos.

print("🌟 Bem-vindo(a) ao Desafio dos Passos Perdidos de Frevo! 🌟")
print("Você vai receber mensagens misteriosas e precisa decifrar os passos escondidos.\n")

# Passo 1: Receber uma mensagem secreta
mensagem = input("Digite a mensagem mágica recebida: ")

# Passo 2: Transformar tudo em minúsculo (para facilitar a busca)
mensagem = mensagem.lower()

# Passo 3: Procurar palavras secretas dentro da mensagem
if "frevo" in mensagem:
    print("Você encontrou a palavra mágica FREVO!")

if "giro" in mensagem:
    print("Passo descoberto: Giro Veloz!")

if "pulo" in mensagem:
    print("Passo descoberto: Pulo do Galo!")

if "sapateado" in mensagem:
    print("Passo descoberto: Sapateado do Rei!")

# Passo 4: Contar quantas letras a mensagem tem
tamanho = len(mensagem)
print(f"\n A mensagem tem {tamanho} letras ao todo.")

# Passo 5: Substituir palavra errada
mensagem_corrigida = mensagem.replace("frevu", "frevo")
print(f"\n Corrigindo erros... Se havia 'frevu', agora é: {mensagem_corrigida}")

# Passo 6: Mostrar os 10 primeiros caracteres como dica
print(f"\n Os primeiros 10 caracteres da mensagem são: {mensagem_corrigida[:10]}")

print("\n✨ Fim da missão! Você está mais perto de libertar todos os passos do frevo!")
