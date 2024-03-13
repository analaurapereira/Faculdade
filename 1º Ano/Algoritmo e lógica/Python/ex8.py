def soma(n):
    soma = 0.0

    if n <1:
        print('Número inválido')

    else:
        for i in range(1, (n+1)):
            soma = soma + (i/(i*i))

    return soma

n = int(input('Número: '))

s = soma(n)

print(s)