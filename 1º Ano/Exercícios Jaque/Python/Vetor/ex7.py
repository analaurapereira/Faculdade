import random
vet = []

for i in range(20):
    x = random.randint(0,100)
    vet.append(x)

maior = vet[0]
menor = vet[0]


for i in range(20):
    if vet[i] > maior:
        maior = vet[i]

    if vet[i] < menor:
        menor = vet[i]

print(f'O maior é {maior} e o menor é {menor}')