vet = ["Dasher", 'Dancer', 'Prancer', 'Vixen', 'Comet',  'Cupid', 'Donner', 'Blitzen', 'Rudolph' ]
soma = 0
i = 0

a, b, c, d, e, f, g, h, i = map(int, input().split(' '))

soma = a + b + c + d + e + f + g + h +  i

quant = soma % 9

rena = quant-1
print(vet[rena])

