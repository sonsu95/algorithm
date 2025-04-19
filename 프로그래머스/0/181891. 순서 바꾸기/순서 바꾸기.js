function solution(num_list, n) {
    const [a,b] = [num_list.slice(0, n), num_list.slice(n)];
    return [...b, ...a];
}