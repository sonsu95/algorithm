function calculate(arr) {
    return arr.map(v=> {
        if (v >= 50 && v % 2 === 0) return v/2;
        if (v < 50 && v % 2 === 1) return 2*v + 1;
        return v;
    });
}

function solution(arr) {
    let iteration = 0;
    let currentArr = [...arr];
    
    while (true) {
        const nextArr = calculate(currentArr);
        
        let isEqual = true;
        for (let i = 0; i < currentArr.length; i++) {
            if (currentArr[i] !== nextArr[i]) {
                isEqual = false;
                break;
            }
        }
        
        if (isEqual) return iteration;
        
        currentArr = nextArr;
        iteration++;
    }
}