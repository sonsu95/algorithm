function solution(n){
    const strNum = String(n);
    let sum = 0;
    for (let i = 0; i <= strNum.length - 1; i++) {
        sum += Number(strNum[i]);
    }
    
    return sum;
}