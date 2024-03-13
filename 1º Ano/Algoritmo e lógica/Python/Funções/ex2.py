import random
vet1 = []

def soma(vet1):
    soma = 0
    for i in range(3):
        soma = soma + vet1[i]
    
    return soma


def media(vet1):
    media = soma(vet1)/3
    return media
    
    
for i in range(3):
    x = random.randint(0,10)
    vet1.append(x)

med = media(vet1)

print(f'A média é {med:.2f}')