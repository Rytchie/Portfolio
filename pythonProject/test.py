# Collartz Printing

def collartz(n):
    while n > 1:
        print(n)
        n = int(input("Enter a number that you want to see the division:"))

        if (n % 2) == 0:
            n = n / n
            print(n)
        elif (n % 2) == 1:
            n = (n * 3) + 1
            print(n)

collartz(6)