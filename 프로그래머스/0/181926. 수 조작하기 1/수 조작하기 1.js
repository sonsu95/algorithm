function solution(n, control) {
    const operations = {
        'w': 1,
        'a': -10,
        's': -1,
        'd': 10
    };
    
    return [...control].reduce((result, char) => result + operations[char], n);
}