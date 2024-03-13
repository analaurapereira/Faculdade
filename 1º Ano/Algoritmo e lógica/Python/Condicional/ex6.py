l = float(input('Litros vendidos: '))
comb = input('Tipo de combustível(g/a): ')

if l <=0:
    print('Quantidade inválida, tente novamente')

else: 
    if (comb == 'a') or (comb == 'A'):
        if l <= 20:
            pag = (l*2.10) - (l*0.03)

        else: 
            pag = (l*2.10) - (l*0.05)

    else:
        if l <= 20:
            pag = (l*3.30) - (l*0.04)

        else: 
            pag = (l*3.30) - (l*0.06)

print(f'O valor a pagar é {pag:.2f}')
