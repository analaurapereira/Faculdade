n1 = int(input('Lado 1: '))
n2 = int(input('\nLado 2: '))
n3 = int(input('\nLado 3: '))

if (n1 <= 0) or (n2 <= 0) or (n3 <= 0):
    print('Números inválidos, tente novamente')

else: 
    if (n1 + n2 > n3) and (n1  + n3 > n2) and (n2 + n3 > n1):
        if (n1 == n2) and (n2 == n3):
            print('É um triângulo equilátero')

        elif (n1 != n2) and (n2 != n3) and (n1 != n3):
            print('É um triângulo escaleno')

        else: 
            print('É um triângulo isóceles')
    
    else: 
        print('Não é um triângulo')