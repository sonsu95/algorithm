function solution(num_list) {
    const oddSum = num_list.reduce((acc, cur, idx) => idx % 2 === 1 ? acc + cur : acc, 0);
    const evenSum = num_list.reduce((acc, cur, idx) => idx % 2 === 0 ? acc + cur : acc, 0);
    
    return Math.max(oddSum, evenSum);
}