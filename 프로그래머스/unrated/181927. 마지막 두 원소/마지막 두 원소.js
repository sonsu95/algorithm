function solution(num_list) {
    const result = [...num_list];
    const last = num_list[num_list.length - 1];
    const last2 = num_list[num_list.length - 2];
    if (last > last2) result.push(last-last2)
    else result.push(last * 2);
    return result;
}