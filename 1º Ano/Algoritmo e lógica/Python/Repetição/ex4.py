soma = 0
cont = 0

n = int(input("Escreva um número: "))
while n !=0:
    n = int(input("Escreva um número: "))
    if n%2 == 0:
        soma = soma + n
        cont = cont + 1

if cont == 0:
    print("Nenhum número par foi escrito")

else:
    media = soma/cont
    print(f'A média é {media:.2f}')