vet = []
soma = 0
cont = 0

quant = int(input('Quantidade de alunos: '))

for i in range(quant):
    x = int(input('Nota: '))
    soma = soma + x
    vet.append(x)

media = soma / quant

for i in vet:
    if i > media:
        cont = cont + 1

print(f'A média da sala é {media:.2f}. A quantidade de alinos acima da média é {cont}')