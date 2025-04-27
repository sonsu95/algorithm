function solution(num_list, n) {
    return num_list.join('').slice(0, n).split('').map(item => Number(item));
}