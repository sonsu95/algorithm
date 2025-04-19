function solution(arr) {
    return arr.flatMap(item => Array(item).fill(item));
}