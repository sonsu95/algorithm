function solution(arr, queries) {
    const result = [...arr];
    queries.forEach((query, idx) => {
        for (let i = query[0]; i <= query[1]; i++) {
            result[i] += 1;
        }
    })
    return result;
}