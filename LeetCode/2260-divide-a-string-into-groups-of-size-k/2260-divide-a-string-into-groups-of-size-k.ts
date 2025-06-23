function divideString(s: string, k: number, fill: string): string[] {
    const result = [];
    const iterationCnt = Math.ceil(s.length / k);
    
    for (let i = 0; i < iterationCnt; i++) {
        let sliceStr = s.slice(k * i, k * (i + 1)) 

        if (sliceStr.length < k) {
            const repeatCnt = k - sliceStr.length;
            sliceStr += fill.repeat(repeatCnt);
        }

        result.push(sliceStr);
    }

    return result;
};