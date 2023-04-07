function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}