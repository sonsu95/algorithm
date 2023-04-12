function solution(i, j, k) {
    const arr = [];
    for (let l = i; l <= j; l++) {
        if (String(l).includes(String(k))) {
            arr.push(l);
        }
    }
    return arr.join("").split("").map(Number).filter(x => x === k).length;
}
