function solution(age) {
    const newArr = [];
    for (let i = 0; i < String(age).length; i++) {
        const computeNum = Number(String(age)[i]) + 97
        const getSmallChar = String.fromCharCode(computeNum);
        newArr.push(getSmallChar)
    }
    return newArr.join("")
}