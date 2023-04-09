function solution(numbers, direction) {
    let resultArr = [];
    if (direction === 'right') {
        const newArr = numbers.slice(0, numbers.length - 1);
        newArr.unshift(numbers[numbers.length - 1]);
        resultArr = newArr;
    } else if (direction === 'left') {
        const newArr = numbers.slice(1, numbers.length);
        newArr.push(numbers[0]);
        resultArr = newArr;
    } else throw new Error(' 예상치못한 문제 ');
    return resultArr;
}