function solution(arr, query) {
    let result = [...arr];
    
    query.forEach((val, idx) => {
        if (idx % 2 === 0) {
            result = result.slice(0, val + 1);
        } else {
            result = result.slice(val);
        }
    });
    
    return result;
}