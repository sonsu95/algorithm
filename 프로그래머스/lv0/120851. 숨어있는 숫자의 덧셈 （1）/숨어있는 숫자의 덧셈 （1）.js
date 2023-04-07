function solution(my_string) {
    return my_string.split("").filter(x => !isNaN(Number(x))).map(Number).reduce((a, b) => a + b);
}