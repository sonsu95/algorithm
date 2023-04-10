function solution(my_string, num1, num2) {
    const arr = my_string.split("");
    const [a, b] = [arr[num1], arr[num2]];
    arr.splice(num1, 1, b);
    arr.splice(num2, 1, a);
    return arr.join("");
}