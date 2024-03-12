print('10:00')
for m in range (9, -1, -1):
    for s in range (59, -1, -1):
        print('%02d:%02d' % (m, s))
