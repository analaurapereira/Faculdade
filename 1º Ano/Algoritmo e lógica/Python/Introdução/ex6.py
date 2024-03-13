import math

x1 = int(input('Primeiro ponto x: '))
y1 = int(input('Primeiro ponto y: '))
x2 = int(input('Segundo ponto x: '))
y2 = int(input('Segundo ponto y: '))

dis = ((x2 - x1)**2) + ((y2 - y1)**2)
res = math.sqrt(dis)

print(f'A distância é {res}')

