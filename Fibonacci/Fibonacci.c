#include <stdio.h>

// start from 0
unsigned int Fibonacci (unsigned int number){

    if ( number == 0 || number == 1){
        return number;
    }

    return Fibonacci(number - 1) + Fibonacci(number - 2);
}

int main(){

    int num;

    printf("Your input : ");
    scanf("%d", &num);
    printf("\nProgram output : %d \n\n----------------End----------------\n", Fibonacci(num));
}
