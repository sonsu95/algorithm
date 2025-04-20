function solution(my_string) {
    let result = [];
    
    for (let i = 0; i < my_string.length; i++) {
        const str = my_string.slice(my_string.length - i - 1);
        result.push(str);
    }
    
    return result.sort();
    
}