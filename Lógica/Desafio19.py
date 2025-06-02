import random

def simular_distribuicao(heroi):
    """Simula a distribuição de vacinas por um herói em três tentativas."""
    tentativas = []
    for _ in range(3):
        # Simula o número de vacinas distribuídas (entre 50 e 200)
        vacinas = random.randint(50, 200)
        tentativas.append(vacinas)
    return tentativas

def determinar_vencedor(herois):
    """Determina o herói mais bem-sucedido baseado na média de vacinas distribuídas."""
    melhor_heroi = None
    melhor_media = 0
    
    for heroi, tentativas in herois.items():
        media = sum(tentativas) / len(tentativas)
        if media > melhor_media:
            melhor_media = media
            melhor_heroi = heroi
    
    return melhor_heroi, melhor_media

def organizar_competicao():
    """Organiza a competição entre heróis da Marvel e DC."""
    herois = {
        "Homem de Ferro (Marvel)": [],
        "Capitão América (Marvel)": [],
        "Mulher Maravilha (DC)": [],
        "Superman (DC)": []
    }
    
    print("\n🏆 COMPETIÇÃO DE DISTRIBUIÇÃO DE VACINAS 🏆")
    print("\nHeróis participantes:")
    for heroi in herois:
        print(f"- {heroi}")
    
    print("\nIniciando a competição...")
    
    # Simula as tentativas para cada herói
    for heroi in herois:
        tentativas = simular_distribuicao(heroi)
        herois[heroi] = tentativas
        print(f"\n{heroi}:")
        for i, vacinas in enumerate(tentativas, 1):
            print(f"Tentativa {i}: {vacinas} vacinas distribuídas")
    
    # Determina o vencedor
    vencedor, media = determinar_vencedor(herois)
    
    print("\n" + "="*50)
    print(f"🏆 VENCEDOR: {vencedor} 🏆")
    print(f"Média de vacinas distribuídas: {media:.1f}")
    print("="*50)

# Iniciar o programa
if __name__ == "__main__":
    organizar_competicao()
