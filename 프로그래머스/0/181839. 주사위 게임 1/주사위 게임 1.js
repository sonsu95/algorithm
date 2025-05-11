function solution(a, b) {
    const isAllOdd = a % 2 === 1 && b % 2 === 1;
    const isOnlyOdd = a % 2 === 1 || b % 2 === 1;
    
    return isAllOdd ? a*a + b*b : isOnlyOdd ? 2*(a+b) : Math.abs(a-b)
}