import sys


def factorial(n):
    """
        using recursive function
        this function take an number and return factorial value of it         
    """
    if n == 1:
        return 1
    
    return factorial(n-1) * n


def main():
    n = input("Enter a Number: ")
    try:
        n = int(n)
    except ValueError:
        sys.exit("Input Must be Integer")

    print(f"Factorial Value if {n} is: {factorial(n)}")



if __name__ == '__main__':
    main()
