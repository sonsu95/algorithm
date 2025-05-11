function solution(arr) {
    const idxs = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            idxs.push(i);
        }
    }
    if (idxs.length === 0) {
        return [-1];
    }
    
    return arr.slice(idxs[0], idxs[idxs.length - 1] + 1);
}