function runningSum(nums: number[]): number[] {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) result.push(nums[0]);
        else result.push(nums[i] + result[i-1]);
    }
    
    return result;
};