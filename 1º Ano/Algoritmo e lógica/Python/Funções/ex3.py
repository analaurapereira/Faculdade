import random
vet = []

def maior(vet):
    maior = vet[0]

    for item in vet:
        if item > maior:
            maior = item
    
    return maior


def menor(vet):
    menor = vet[0]

    for item in vet:
        if item < menor:
            menor = item
    
    return menor


for i in range(3):
    x = random.randint(0,10)
    vet.append(x)

print(vet)
m = maior(vet)
print(f'O maior é {m}')

men = menor(vet)
print(f'O menor é {men}')