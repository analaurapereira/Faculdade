t = 0
b = 0
r = 0

tipo = input("Insira o tipo de vinho (T - tinto, B - branco, R - rosé) ou 'F' -  finalizar: ")

while tipo != 'f' and tipo != 'F':
    tipo = input("Insira o tipo de vinho (T - tinto, B - branco, R - rosé) ou 'F' -  finalizar: ")

    if tipo == 'T' or tipo =='t':
        t = t + 1

    elif tipo == 'B' or tipo == 'b':
        b = b + 1

    elif tipo == 'R' or tipo =='r':
        r = r + 1

    else:
        print("Tipo inválido, tente novamente")

total = t + b + r

pt = (t / total) * 100
pb = (b / total) * 100
pr = (r / total) * 100

print(f"Total de vinhos: {total}")
print(f"Porcentagem de vinhos tintos: {pt:.2f} %")
print(f"Porcentagem de vinhos brancos: {pb:.2f} %")
print(f"Porcentagem de vinhos rosés: {pr:.2f} %")
