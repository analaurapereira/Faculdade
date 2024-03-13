import random
vet = []
n = 5

def media(vet, n):
    soma = 0
    cont = 0

    for i in range(n):
        if i%2 != 0:
            soma = soma + vet[i]
            cont = cont + 1

    if cont == 0:
        return 0
    
    else:
        return(soma/cont)

for i in range(n):
    x = random.randint(0,10)
    vet.append(x)

print(vet)
m = media(vet, n)
print(f'A média é {m}')