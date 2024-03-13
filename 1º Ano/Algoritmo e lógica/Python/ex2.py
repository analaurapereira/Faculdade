soma = 0
cont = 0

n = int(input('Digite um número (0 para sair): '))

while n != 0:
    n = int(input('Digite um número (0 para sair): '))

    if n % 2 == 0:
        soma = soma + n
        cont = cont + 1
    

if cont > 0:
    med = soma / (cont-1)
    print(f'A média dos números pares é: {med:.2f}')
else:
    print('Nenhum número par foi inserido.')
