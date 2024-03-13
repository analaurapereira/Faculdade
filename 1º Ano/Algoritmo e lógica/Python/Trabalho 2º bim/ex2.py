def moda(vet):

    if len(vet) == 0:
        print('Não há moda no vetor')

    else:

        n = len(vet)

        for i in range(n):
            for j in range(0, (n - i - 1)):
                if vet[j] > vet[j + 1]:
                    vet[j], vet[j + 1] = vet[j + 1], vet[j]

        cont = 1
        aux = 0
        modas = []

        for i in range(1, len(vet)):
            if vet[i] == vet[i - 1]:
                cont = cont + 1

            else:
                cont = 1

            if cont > aux:
                modas = [vet[i]]
                aux = cont

            elif cont == aux:
                modas.append(vet[i])

        if aux == 1:
            print('Não há moda no vetor')

        else:
            if len(modas) > 1:
                print('Não há moda no vetor')

            else:
                print(f'A moda é {modas[0]}')


vet = []
n = int(input('Tamanho do vetor: '))

for i in range(n):
    valor = int(input(f'Número: '))
    vet.append(valor)

moda(vet)