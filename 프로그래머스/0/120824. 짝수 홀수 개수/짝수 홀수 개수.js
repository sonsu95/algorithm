function solution(num_list) {
    const evenCnt = num_list.filter(num => num % 2 === 0).length;
    return [evenCnt, num_list.length - evenCnt];
}