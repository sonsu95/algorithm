function solution(num_list) {
    const product = num_list.reduce((acc, cur) => acc * cur);
    const sum = num_list.reduce((acc, cur) => acc + cur);
    const squareOfSum = sum * sum;
    return  product < squareOfSum ? 1 : 0;
}