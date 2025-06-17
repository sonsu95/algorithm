function maximumWealth(accounts: number[][]): number {
    let result = 0;

    for (let i = 0; i < accounts.length; i++) {
        let innerSum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            innerSum += accounts[i][j];
        }
        result = result < innerSum ? innerSum : result;
    }

    return result;
};