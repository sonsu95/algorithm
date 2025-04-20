function solution(a, b, c) {
    const sum = a + b + c;
    const squareSum = a**2 + b**2 + c**2;
    const cubeSum = a**3 + b**3 + c**3;
    
    // 모든 수가 같은 경우
    if (a === b && b === c) {
        return sum * squareSum * cubeSum;
    }
    // 두 수만 같은 경우
    else if (a === b || b === c || a === c) {
        return sum * squareSum;
    }
    // 모두 다른 경우
    else {
        return sum;
    }
}