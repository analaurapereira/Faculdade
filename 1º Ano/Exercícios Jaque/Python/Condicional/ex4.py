alt = float(input('Altura(m): '))
sexo = input('Sexo(m/f): ')

if (sexo == 'm') or (sexo == 'M'):
    peso = (72.7 * alt) - 58

    print(f'Seu peso ideal é {peso:.2f}')

else: 
    peso = (62.1 * alt) - 44.7

    print(f'Seu peso ideal é {peso:.2f}')