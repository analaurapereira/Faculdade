def num(n1, n2):
    if n2 < n1:
        return n2
    
    elif n1 < n2:
        return n1
    
    else:
        return 'iguais'

n1 = int(input('Número 1: '))
n2 = int(input('Número 2: '))

igual = num(n1, n2)

if igual != 'iguais':
    print(f'O menor número é {igual}')

else:
    print('Os números são iguais')