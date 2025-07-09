def caminho_1():
    print("\n🌲 Caminho da Árvore Falante 🌲")
    print("Você encontra uma árvore sábia que te conta um segredo antigo sobre a floresta...")
    print("🌳 'Lembre-se: aquele que respeita a floresta, sempre encontrará o caminho de volta.'\n")

def caminho_2():
    print("\n💧 Caminho do Rio Encantado 💧")
    print("Um peixe dourado salta do rio e fala com você:")
    print("🐟 'Pegue esta pedra brilhante. Ela iluminará as trevas adiante.'\n")

def caminho_3():
    print("\n🦋 Caminho das Borboletas Luminosas 🦋")
    print("As borboletas te rodeiam e uma delas pousa em seu ombro...")
    print("🦋 'Você tem um coração puro. Avance com coragem!'\n")

def explorar_floresta():
    while True:
        print("\nEscolha um caminho na Floresta Mágica de Bytenópolis:")
        print("1 - Caminho da Árvore Falante")
        print("2 - Caminho do Rio Encantado")
        print("3 - Caminho das Borboletas Luminosas")
        print("0 - Encerrar jornada")

        escolha = input("Digite sua escolha: ")

        if escolha == '1':
            caminho_1()
        elif escolha == '2':
            caminho_2()
        elif escolha == '3':
            caminho_3()
        elif escolha == '0':
            print("\n🌟 Jornada encerrada. Que a magia de Bytenópolis acompanhe você! 🌟")
            break
        else:
            print("Escolha inválida. Tente novamente.")

# Iniciar o programa
explorar_floresta()
w