function solution(arr) {
    return arr.every((row, i) => row.every((val, j) => val === arr[j][i])) ? 1 : 0;
}