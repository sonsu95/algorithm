function solution(arr, n) {
    const isArray = Array.isArray(arr);
    if (!isArray) return new Error('is not Array');
    
    const isOdd = arr.length % 2 === 1;
        
    if (isOdd) {
        return arr.map((item, idx) => {
            return (idx % 2 == 0) ? item + n : item;
        });
    } else {
        return arr.map((item, idx) => {
            return (idx % 2 == 1) ? item + n : item;
        })
    }
}