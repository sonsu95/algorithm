function solution(strArr) {
    const lengthMap = new Map();
    
    for (const str of strArr) {
        const length = str.length;
        lengthMap.set(length, (lengthMap.get(length) || 0) + 1);
    }
    
    return Math.max(...lengthMap.values());
}