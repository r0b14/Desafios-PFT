# Chovendo ou não

biblioteca = input("A biblioteca está aberta? ")
tarefas = input("Você terminou todas as tarefas de casa? ")
chovendo = input("Está chovendo? ")

if (biblioteca == "sim" and tarefas == "sim" and chovendo == "não"):
  print("Vá à biblioteca")

else:
  print("Vá para casa")