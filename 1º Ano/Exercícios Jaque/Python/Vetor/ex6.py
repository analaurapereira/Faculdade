import random
vet1 = []


for i in range(50):
    x = random.rangeint(0,10)
    if x%2 == 0:
        vet1.append(1)

    else:
        vet1.append(0)