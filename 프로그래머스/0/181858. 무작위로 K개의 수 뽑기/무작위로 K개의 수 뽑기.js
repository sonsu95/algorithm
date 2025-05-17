function solution(arr, k) {
    const uniqueArr = [...new Set(arr)];
    return Array.from({length: k}).map((_, i) =>  i < uniqueArr.length ? uniqueArr[i] : -1)
}