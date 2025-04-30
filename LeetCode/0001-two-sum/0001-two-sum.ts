function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const neededNum = target - currentNum;
        
        if (map.has(neededNum)) {
            return [map.get(neededNum), i];
        }
        
        map.set(currentNum, i);
    }
}