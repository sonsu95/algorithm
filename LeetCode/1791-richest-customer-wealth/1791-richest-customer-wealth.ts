function maximumWealth(accounts: number[][]): number {
    const resultArr: number[] = [];

    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        resultArr.push(sum);
    }

    return Math.max(...resultArr);
};