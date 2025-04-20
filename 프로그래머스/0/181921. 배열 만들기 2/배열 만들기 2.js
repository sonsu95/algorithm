function solution(l, r) {
    const result = Array.from({length: r - l + 1}, (_, i) => l + i)
                        .filter(num => [...num.toString()].every(digit => digit === '0' || digit === '5' ));
    return result.length ? result : [-1];
}