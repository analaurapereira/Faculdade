n = int(input('Escolha um número: '))
cont = 0

while True:
    chute = int(input('Faça um chute: '))
    
    cont = cont + 1

    if chute < n:
        print('Chute mais alto')

    elif chute > n:
        print('Chute mais baixo')

    else:
        print(f'Você acertou o número {n} em {cont} tentativas.')
        break