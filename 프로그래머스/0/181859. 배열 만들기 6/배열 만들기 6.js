function solution(arr) {
    const stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stk.length === 0) stk.push(arr[i]);
        else if (stk.length !== 0 && stk[stk.length - 1] === arr[i]) stk.pop();
        else if (stk.length !== 0 && stk[stk.length - 1] !== arr[i]) stk.push(arr[i]);
    }
    
    if (!stk.length) return [-1];
    
    return stk;
}