# for

n = int(input('Número: '))

while n != -1:
    n = int(input('Número: '))

    for i in range(1, 11):
        r = n * i
        print(f"{n} x {i} = {r}")

#while

n = int(input('Número: '))
i = 0

while n != -1:
    n = int(input('Número: '))
    
    while i < 10:
        r = n * i
        print(f"{n} x {i} = {r}")
        i = i + 1