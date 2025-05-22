# Bem-vindos ao programa de reconstrução da lista da Quadrilha Sertão Encantado Tech

print("=== Quadrilha Sertão Encantado Tech ===")
print("Vamos montar a lista de dançarinos!")
print("---------------------------------------")

# Lista que vai armazenar os dançarinos
dancarinos = []

while True:
    nome = input("Digite o nome do dançarino: ")
    habilidades = input("Digite as habilidades (separe por vírgula): ")
    preferencias = input("Digite as preferências (ex: Forró, Xote, Baião): ")

    # Criando um dicionário com os dados do dançarino
    dancarino = {
        "nome": nome.strip().title(),
        "habilidades": [h.strip().capitalize() for h in habilidades.split(',')],
        "preferencias": preferencias.strip().capitalize()
    }

    # Adicionando o dançarino à lista
    dancarinos.append(dancarino)

    # Pergunta se deseja continuar
    continuar = input("Deseja adicionar outro dançarino? (s/n): ")
    if continuar.lower() != 's':
        break

# Mostrando a lista final
print("\n=== Lista de Dançarinos ===")
for d in dancarinos:
    print(f"\nNome: {d['nome']}")
    print("    Habilidades:", ", ".join(d["habilidades"]))
    print("    Preferências:", d["preferencias"])
