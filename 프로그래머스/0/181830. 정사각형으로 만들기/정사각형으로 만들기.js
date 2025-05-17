function solution(arr) {
    const result = [...arr];
    if (arr.length > arr[0].length) {
        const plusFillCnt = arr.length - arr[0].length;
        result.map(col => {
            for (let i = 0; i < plusFillCnt; i++) {
                col.push(0)
            }
        })
    };
    if (arr.length < arr[0].length) {
        const addZeroArr = Array.from({length: arr[0].length}).fill(0);
        const plusFillCnt = arr[0].length - arr.length;
        console.log(plusFillCnt)
        for (let i = 0; i < plusFillCnt; i++) {
            result.push(addZeroArr);
        }
    };
    
    return result;
}