function solution(array) {
    const sort = array.sort((a, b) => a > b ? 1 : -1);
    const length = sort.length;
    const idx = length % 2 === 0 ? Math.floor(length / 2) : Math.floor(length / 2) + 1;
    return sort[idx-1];
}