#include <iostream>

using namespace std;

unsigned int factorial(unsigned int n)
{
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

// Driver code
int main(){
     cout << "Factorial : ( n! = 1 * 2 * 3 * ... * n ) \n\n"
         << "For example : ( 5! = 1 * 2 * 3 * 4 * 5 = 120 ) \n"
         << "-------------------------------------------------\n";
    int num;
    cout << "Enter the number (n) : ";
    cin  >> num;

    cout << "Factorial of "
         << num << " is \n{" << factorial(num) << "}" << endl;
    return 0;
}



