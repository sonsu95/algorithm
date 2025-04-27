function fizzBuzz(n: number): string[] {
    const result: string[] = []
    for (let i = 1; i <= n; i++) {
        const isDiv3 = i % 3 === 0;
        const isDiv5 = i % 5 === 0;
        if (isDiv3 && isDiv5) result.push('FizzBuzz');
        else if (isDiv3) result.push('Fizz');
        else if (isDiv5) result.push('Buzz');
        else result.push(String(i));
    }
    return result;
};