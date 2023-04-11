function solution(order) {
    return String(order).split("").filter(x => Number(x) % 3 === 0 && Number(x) !== 0).length;
}