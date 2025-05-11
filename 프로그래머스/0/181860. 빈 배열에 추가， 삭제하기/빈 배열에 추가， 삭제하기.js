function solution(arr, flag) {
    const result = [];
    
    flag.forEach((bool, idx) => {
        if (bool) {
            for (let i = 0; i < arr[idx] * 2; i++) {
                result.push(arr[idx]);    
            }
        } else {
            for (let i = 0; i < arr[idx]; i++) {
                result.pop();    
            }
        }
    })
    
    return result;
}