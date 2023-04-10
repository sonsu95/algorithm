function solution(s) {
    let result = [];
    const arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] === "Z" ? result.pop() : result.push(Number(arr[i]));
    }
    return result.length !== 0 ? result.reduce((a, b) => a + b) : 0;
}