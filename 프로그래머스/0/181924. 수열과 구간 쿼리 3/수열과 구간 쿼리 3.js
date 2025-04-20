function solution(arr, queries) {
    const result = [...arr]; 
    
    for (let i = 0; i < queries.length; i++) {
        const [index1, index2] = queries[i];
        [result[index1], result[index2]] = [result[index2], result[index1]];
    }
    
    return result;
}