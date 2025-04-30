const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const nums = s.split('').map(char => roman[char]);
  
  return nums.reduce((total, cur, idx) => 
    cur < nums[idx + 1] ? total - cur : total + cur, 0);
};