soma = 0
for n in range(1, 500, 2):
    if n%3 == 0:
        soma = soma + n

print(f'A soma é {soma}')