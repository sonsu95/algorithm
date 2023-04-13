function solution(my_string) {
    let result = 0;

    for (let i = 0; i < my_string.length; i++) {
        let consecutiveNum = '';
        while (Number.isInteger(Number(my_string[i]))) {
            consecutiveNum += my_string[i];
            i++;
        }
        result += Number(consecutiveNum);
    }
    return result;
}