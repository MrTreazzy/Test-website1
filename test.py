min = int(input("Число: "))
n = 0
maxOper = 200

while (n != maxOper)and(n < maxOper):
    n = 0
    a = min
    print("Число: ", min)
    
    while (a != 1):
        if (a % 2 == 1):
            a = a * 3 + 1
            n = n + 1
            print(int(a))
        if (a % 2 == 0):
            a = a / 2
            n = n + 1
            print(int(a))
            
    print("Число операций:", n)
    print("----------------------------")
    min = min + 1
