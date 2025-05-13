# 1) Definição de variáveis para armazenar o melhor produto
melhor_produto = ""           # Nom'e do produto vencedor
categoria_vencedora = ""      # Categoria do produto vencedor ("Frutas" ou "Vegetais")
melhor_nota = -1              # Nota máxima encontrada

# 2) Número de barracas a serem avaliadas
total_barracas = int(input("Quantas barracas você vai avaliar? "))

# 3) Estrutura de repetição for para percorrer todas as barracas
for idx in range(1, total_barracas + 1):
    print(f"\n--- Barraca {idx} ---")

    # 3.1) Escolher a categoria (com validação)
    categoria = input("Digite a categoria do produto ('Frutas' ou 'Vegetais'): ").strip().lower()
    if categoria not in ("frutas", "vegetais"):
        print("Categoria inválida! Essa barraca será ignorada.")
        continue  # vai para a próxima iteração do for

    # 3.2) Nome do produto
    produto = input("Nome do produto: ").strip()

    # 3.3) Avaliação (nota) do produto
    try:
        nota = float(input("Avalie este produto de 0 a 10: "))
    except ValueError:
        print("Entrada de nota inválida! Essa barraca será ignorada.")
        continue

    if nota < 0 or nota > 10:
        print("Nota fora do intervalo permitido (0–10). Essa barraca será ignorada.")
        continue

    # 4) Comparação para atualizar o vencedor, se for o caso
    if nota > melhor_nota:
        melhor_nota = nota
        melhor_produto = produto
        categoria_vencedora = categoria.capitalize()

# 5) Exibição do resultado final
print("\n===== RESULTADO FINAL =====")
if melhor_nota >= 0:
    print(f"O vencedor é o produto **{melhor_produto}**, da categoria **{categoria_vencedora}**,\n"
          f"com nota **{melhor_nota:.1f}**.")
else:
    print("Não houve avaliações válidas para definir um vencedor.")
