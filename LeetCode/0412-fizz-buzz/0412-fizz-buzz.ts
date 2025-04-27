function fizzBuzz(n: number): string[] {
    const result: string[] = new Array(n);
    
    for (let i = 1; i <= n; i++) {
        let str = '';
        
        if (i % 3 === 0) str += 'Fizz';
        if (i % 5 === 0) str += 'Buzz';
        
        result[i-1] = str || `${i}`;
    }
    
    return result;
}