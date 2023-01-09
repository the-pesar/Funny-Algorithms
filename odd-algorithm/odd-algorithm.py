import sys

def is_even(number) -> bool:
    """ this function take an number input and check it's even or not"""
    if (number % 2 == 0):
        return True
    return False    


# get input and check is positive number or not 
n = input("Enter numbr: ")
try:
    n = int(n)
except ValueError:
    sys.exit("Invalid input :(")

if (n < 0):
    print("Number must be positive :(")
    sys.exit(1)

print(n,end="-> ")

while (True):
    if (n == 1):
        print("end")
        sys.exit(0)

    # check n is even number 
    if (is_even(n)):
        n //= 2
        print(n,end="-> ")
        continue
    # else we just multiplies it by 3 and add 1 to it
    n *= 3
    n += 1     
    print(n,end="-> ")

