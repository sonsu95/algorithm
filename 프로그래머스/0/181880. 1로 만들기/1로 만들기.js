function solution(num_list) {
    let cnt = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        while (num_list[i] > 1) {
            if (num_list[i] % 2 ===  0) num_list[i] /= 2;
            else num_list[i] = (num_list[i] - 1) / 2;
            cnt += 1;
        }
    }
    
    return cnt;
}