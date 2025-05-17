function solution(rank, attendance) {
    const eligible = rank.map((r, idx) => [idx, r])
                        .filter(([idx, _]) => attendance[idx]);
    
    eligible.sort(([_, r1], [__, r2]) => r1 - r2);
    
    const topThree = eligible.slice(0, 3);
    
    const [a, b, c] = topThree.map(([idx, _]) => idx);
    
    return 10000 * a + 100 * b + c;
}