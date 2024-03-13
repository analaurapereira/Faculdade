import math

n = int(input('Número: '))

if n > 0:

    res = math.sqrt(n)

    print(f'A raíz é {res:.2f}')

else:
    print(f'Número inválido')


