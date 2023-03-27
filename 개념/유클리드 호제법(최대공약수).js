/**
 * 두 양의 정수, 혹은 두 다항식의 최대공약수를 구하는 방법
 * 유클리드 호제법은 두 정수의 최대공약수(Greatest Common Divisor, GCD)를 찾는 알고리즘
 */

export const GCD = (a, b) => {
   return b === 0 ? a : GCD(b, a % b)
}

