function solution(numLog) {
    return numLog.slice(1).map((v, i) => {
        const diff = v - numLog[i];
        return { 1: 'w', '-10': 'a', '-1': 's', 10: 'd' }[diff];
    }).join('');
}