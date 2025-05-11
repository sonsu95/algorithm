function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    
    const counts = {};
    for (const num of dice) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    const uniqueNums = Object.keys(counts).map(Number);
    
    if (uniqueNums.length === 1) {
        const p = uniqueNums[0];
        return 1111 * p;
    }
    
    if (uniqueNums.length === 2 && (counts[uniqueNums[0]] === 3 || counts[uniqueNums[1]] === 3)) {
        let p, q;
        if (counts[uniqueNums[0]] === 3) {
            p = uniqueNums[0];
            q = uniqueNums[1];
        } else {
            p = uniqueNums[1];
            q = uniqueNums[0];
        }
        return Math.pow(10 * p + q, 2);
    }
    
    if (uniqueNums.length === 2 && counts[uniqueNums[0]] === 2) {
        const p = uniqueNums[0];
        const q = uniqueNums[1];
        return (p + q) * Math.abs(p - q);
    }
    
    if (uniqueNums.length === 3) {
        let p, q, r;
        for (const num of uniqueNums) {
            if (counts[num] === 2) {
                p = num;
            } else if (!q) {
                q = num;
            } else {
                r = num;
            }
        }
        return q * r;
    }
    
    return Math.min(a, b, c, d);
}