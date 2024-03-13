import random
vet1 = []
vet2 = []
vet3 = []

for i in range(50):
    x = random.rangeint(0,10)
    vet1.append(x)

for i in range(50):
    x = random.rangeint(0,10)
    vet2.append(x)

for i in range(50):
    vet3[i] = vet1[i]+vet2[i]



print(vet3)