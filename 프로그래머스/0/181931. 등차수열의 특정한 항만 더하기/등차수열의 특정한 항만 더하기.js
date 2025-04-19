function solution(a, d, included) {
    return included.reduce((sum, include, i) => 
        include ? sum + (a + i * d) : sum, 0);
}