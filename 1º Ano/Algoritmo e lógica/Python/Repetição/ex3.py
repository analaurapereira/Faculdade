soma = 0
cont = 0
for n in range(10):
    num = int(input("Escreva um número: "))
    if num%2 == 0:
        soma = soma + num
        cont = cont + 1

if cont == 0:
    print("Nenhum número par foi escrito")

else:
    media = soma/cont
    print(f'A média é {media}')