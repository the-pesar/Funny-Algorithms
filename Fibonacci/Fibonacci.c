unsigned int Fibonacci (unsigned int number){

    if ( number == 0 || number == 1){
        return number;
    }

    return Fibonacci(number - 1) + Fibonacci(number - 2);
}

unsigned long long int Fibonacci(unsigned int length)
{
    unsigned int a = 0, b = 1;
    unsigned long long int sum = 0;
    for (int i = 2; i <= length; i++)
    {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}