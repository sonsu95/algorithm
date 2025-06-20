function runningSum(nums: number[]): number[] {
     let result = 0;
     return nums.map(num => result += num);
};