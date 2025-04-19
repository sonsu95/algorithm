function solution(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return new Error('arr1 or arr2 is not Array')
    
    const totalLengthNum = arr1.length - arr2.length;
    if (totalLengthNum !== 0) return totalLengthNum > 0 ? 1 : -1;
    else {
        const arr1Sum = arr1.reduce((acc, cur) => acc + cur);
        const arr2Sum = arr2.reduce((acc, cur) => acc + cur);
        return arr1Sum === arr2Sum ? 0 : arr1Sum > arr2Sum ? 1 : -1
    }
}