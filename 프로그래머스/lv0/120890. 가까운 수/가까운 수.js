function solution(array, n) {
    const newArr = array.map(x => Math.abs(x - n));
    let min = Math.min(...newArr);

    const resultArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === min) resultArr.push(array[i]);
    }
    return Math.min(...resultArr);
}