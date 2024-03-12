def valorPagamento(val, dias):

    if dias <=0:
        return val
    
    else:
        total = val + (val * 0.03) + (val * (0.001 * dias))

        return total

quant = 0
soma = 0

val = float(input('Valor da prestação: '))

while val!= 0:
    dias = int(input('Número de dias atrasados: '))

    if val > 0:
        pagar = valorPagamento(val, dias)
        print(f'O valor é: {pagar:.2f}')

        quant = quant + 1
        soma = soma + pagar


    if val < 0:
        print('Valor inválido, tente novamente \n')

    val = float(input('Valor da prestação: '))

print('\n Relatório do dia: \n')
print(f'Quantidade de prestações pagas: {quant}')
print(f'Valor das prestações pagas: {soma:.2f}')