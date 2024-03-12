soma = 0
cont = 0

while cont < 10:
    n = int(input('Número: '))
    
    if n % 2 == 0:
        soma = soma + n
        cont = cont + 1


med = soma / 10
print(f'A média dos 10 números pares é: {med}')
