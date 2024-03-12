def cpf(n):
    soma = 0

    if len(n) != 11:
        return False
    
    elif int(n) < 0:
        return False
    
    else:
        for i in range(len(n)):
            
    
    for i in range(9):
        soma = soma + int(n[i]) * (10 - i)

    resto = soma % 11

    if resto < 2:
        v1 = 0

    else:
        v1 = 11 - resto

    if int(n[9]) != v1:
        return False

    soma = 0

    for i in range(10):
        soma = soma +  int(n[i]) * (11 - i)

    resto = soma % 11

    if resto < 2:
        v2 = 0

    else:
        v2 = 11 - resto

    if int(n[10]) != v2:
        return False

    return True

n = input('Digite o CPF: ')

if cpf(n):
    print('CPF Válido')
else:
    print('CPF Inválido')

