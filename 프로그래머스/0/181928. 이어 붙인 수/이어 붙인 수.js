function solution(num_list) {
    return num_list.reduce((acc, cur, idx, arr) => +arr.filter(num => num % 2 === 0).join('') + +arr.filter(num => num % 2 === 1).join(''), 0)
}