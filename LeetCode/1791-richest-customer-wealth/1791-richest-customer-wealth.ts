function maximumWealth(accounts: number[][]): number {
    const result = [];

    for (let i = 0; i < accounts.length; i++) {
        let innerSum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            innerSum += accounts[i][j];
        }
        result.push(innerSum);
    }

    return Math.max(...result);
};