function romanToInt(s: string): number {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = map.get(s[i]);
        const nextVal = i + 1 < s.length ? map.get(s[i + 1]) : 0;

        if (currentVal < nextVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }
    
    return result;
};