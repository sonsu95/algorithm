function solution(arr) {
    const size = Math.max(arr.length, arr[0].length);
    
    return Array(size).fill().map((_, i) => 
        Array(size).fill().map((_, j) => 
            (i < arr.length && j < arr[0].length) ? arr[i][j] : 0
        )
    );
}