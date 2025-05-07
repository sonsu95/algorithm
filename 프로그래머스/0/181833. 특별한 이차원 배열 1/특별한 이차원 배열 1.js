function solution(n) {
    return Array.from({length: n}).map((_, i) => 
        Array.from({length: n}).map((_, j) => i === j ? 1 : 0)
    );
}