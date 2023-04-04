const GCD = (a, b) => {
   return b === 0 ? a : GCD(b, a % b)
}

function solution(numer1, denom1, numer2, denom2) {
    let bottom = denom1 * denom2;
    let top = denom1 * numer2 + denom2 * numer1;
    let gcd = GCD(bottom, top);
    return [top / gcd, bottom / gcd];
}