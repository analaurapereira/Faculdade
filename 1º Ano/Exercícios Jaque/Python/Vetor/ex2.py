vet = [1, 2, 3]
soma = 0
cont = 0

for i in vet:
    if i%2 ==0:
        soma = soma + i
        cont = cont + 1

if cont > 0:
    media = soma/cont
    print(f'A média é {media:.2f}')

else:
    print('Não foram inseridos números pares')