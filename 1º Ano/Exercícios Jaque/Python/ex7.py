def tabuada(n):
    if n >= 1 and n <=9:
        for i in range(0, 11):
            print(f'{n} X {i} = {n*i}')
    else: 
        print('Número inválido\n ')


def imc(peso, alt):
    res = peso /(alt*alt)
    return res

def fat(n):
    f = 1

    for i in range(1, (n+1)):
        f = f *(i)
    
    return f


esc = int(input("Escolha uma opção:\n 1 - Tabuada;\n 2 - Calcular IMC;\n 3 - Calcular o fatorial de um número;\n -1 - Encerrar \n"))

while esc != -1:

    if esc == 1:
        n = int(input("Número entre 1 e 9: "))
        tabuada(n)
    
    elif esc == 2:
        peso = float(input('Peso: '))
        alt = float(input('Altura: '))

        res = imc(peso, alt)
        print(f"O IMC é {res}")

    elif esc == 3:
        n = int(input("Número entre 1 e 9: "))
        f = fat(n)
        print(f'O fatorial é {f}')

    else:
        print("Número inválido\n") 
    
    
    esc = int(input("Escolha uma opção: 1 - Tabuada de 1 a 9;\n 2 - Calcular IMC;\n 3 - Calcular o fatorial de um número;\n -1 - Encerrar \n"))