function solution(my_string, queries) {
    let result = my_string;
    
    for (const [s, e] of queries) {
        const part = result.substring(s, e + 1);
        const reversed = part.split('').reverse().join('');
        result = result.substring(0, s) + reversed + result.substring(e + 1);
    }
    
    return result;
}