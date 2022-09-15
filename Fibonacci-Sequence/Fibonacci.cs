int Fibonacci(int i) => i <= 1 ? i : Fibonacci(i - 1) + Fibonacci(i - 2);
Console.WriteLine(Fibonacci(11));
