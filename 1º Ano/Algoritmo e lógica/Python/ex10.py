def media(veti):
    soma = 0
    for i in veti:
        soma = soma + i

    m = soma/3
    return m

def idadeCima(veti):
    cont = 0 
    m = media(veti)

    for i in veti:
        if i > m:
            cont = cont + 1

    return cont

def nomeBaixo (veti, vetn):
    nomes = []
    m = media(veti)

    for i in range(len(veti)):
        if veti[i] < m:
            nomes.append(vetn[i])

    return nomes

def velho(veti, vetn):
    v = veti[0]
    nome = vetn[0]

    for i in range(len(veti)):
        if veti[i]> v:
            v = i
            nome = vetn[i]

    return nome


def novo(veti, vetn):
    n = veti[0]
    nome = vetn[0]

    for i in veti:
        if i < n:
            n = i
            nome = i in vetn

    return nome

def fatorial(veti):
     print(f'''
            -----------------------------------------
                Número                 Fatorial
            -----------------------------------------
              ''')
     
     for n in veti:
        f = 1

        for i in range(1, (n+1)):
            f = f *(i)

        print(f'''
            -----------------------------------------
              {n}                          {f}
            -----------------------------------------
              ''')

veti =  []
vetn =[]

for i in range(3):
    nome = input('Nome: ')
    idade= int(input('Idade: '))

    vetn.append(nome)

    while idade < 0:
        print('Idade inválida, tente novamente')
        idade = int(input('Idade: '))

    veti.append(idade)

print(f'A média de idades é {media(veti)}')
print(f'As idades acima da média são {idadeCima(veti)}')
print(f'Nomes das pessoas com idade abaixo da média são {nomeBaixo(veti, vetn)}')
print(f'A pessoa mais velha é {velho(veti, vetn)}. O mais novo é {novo(veti, vetn)}')
fatorial(veti)