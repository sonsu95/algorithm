function solution(arr, queries) {
    const result = [...arr];
    
    queries.forEach(([i, j]) => {
        [result[i], result[j]] = [result[j], result[i]];
    });
    
    return result;
}