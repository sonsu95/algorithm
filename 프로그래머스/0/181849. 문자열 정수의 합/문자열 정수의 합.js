function solution(num_str) {
    return typeof num_str === 'string' 
        ? num_str.split('').reduce((acc, cur) => Number(acc) + Number(cur), 0) 
        : num_str;
}