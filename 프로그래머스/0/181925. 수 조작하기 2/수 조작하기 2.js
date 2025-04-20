function solution(numLog) {
    let result = '';
    
    const operations = {
        'w': 1,
        'a': -10,
        's': -1,
        'd': 10
    };
    
    for (let i = 0; i < numLog.length; i++) {
        const cal = numLog[i] - numLog[i-1];
        if (operations.w === cal) result += 'w';
        if (operations.a === cal) result += 'a';
        if (operations.s === cal) result += 's';
        if (operations.d === cal) result += 'd';
    }
    
    return result;
}