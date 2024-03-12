def fat(n):
    f = 1

    for i in range(1, (n+1)):
        f = f *(i)
    
    return f
n = int(input('Número: '))

f = fat(n)
print(f'O fatorial é {f}')