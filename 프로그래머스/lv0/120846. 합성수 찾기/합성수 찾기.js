function solution(n) {
    function numberOfDivisors(num) {
        let divisors = 1;
        let factor = 2;

        while (factor * factor <= num) {
            let count = 0;
            while (num % factor === 0) {
                count++;
                num = num / factor;
            }
            divisors *= (count + 1);
            factor++;
        }

        if (num > 1) {
            divisors *= 2;
        }

        return divisors;
    }

    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        numberOfDivisors(i) >= 3 ? cnt++ : null;
    }
    return cnt;
}