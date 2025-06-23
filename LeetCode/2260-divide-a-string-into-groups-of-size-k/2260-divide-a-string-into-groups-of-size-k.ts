function divideString(s: string, k: number, fill: string): string[] {
    const result: string[] = [];

    for (let i = 0; i < s.length; i += k) {
        let group = s.substring(i, i + k);

        if (group.length < k) {
            group += fill.repeat(k - group.length);
        }

        result.push(group);
    }

    return result;
};