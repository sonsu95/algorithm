function scoreOfString(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (i === 0) continue;

        result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }

    return result;
};