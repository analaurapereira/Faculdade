n = int(input())

def fibonot(n):
    cont = 0
    aux = 1
    while cont < n:
        aux = aux+ 1
        if not fibonacci(aux):
            cont = cont + 1
    return aux

def fibonacci(aux):
    a, b = 0, 1
    while b < aux:
        a, b = b, a + b
    return b == aux

r = fibonot(n)
print(r)