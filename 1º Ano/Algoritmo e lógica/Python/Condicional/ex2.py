n1 = int(input('Número 1: '))
n2 = int(input('\nNúmero 2: '))

if n2 == n1:
    n2 = int(input('Número inválido. Digite outro número: '))

maior = n1
menor = n2

if n1 < n2:
    maior = n2
    menor = n1

print(f'O maior é { maior } e o menor é { menor }')
