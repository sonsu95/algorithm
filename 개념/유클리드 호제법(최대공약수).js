/**
 * 두 양의 정수, 혹은 두 다항식의 최대공약수를 구하는 방법
 * 유클리드 호제법은 두 정수의 최대공약수(Greatest Common Divisor, GCD)를 찾는 알고리즘
 */

const GCD = (a, b) => {
   return b === 0 ? a : GCD(b, a % b)
}

const GCD2 = (a, b) => {
   while (b !== 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
   }
   return a;
}

console.time('재귀');
GCD(10000, 3892)
console.timeEnd('재귀');

console.time('반복문');
GCD(10000, 3892)
console.timeEnd('반복문');

// 재귀: 0.104ms
// 반복문: 0.007ms
