function solution(my_str, n) {
    let newArr = [];
    let strs = "";
    for (let i = 0; i < my_str.length; i++) {
        if (strs.length === n) {
            newArr.push(strs)
            strs = my_str[i];
        } else {
            strs += my_str[i];
        }
    }
    newArr.push(strs)
    return newArr;
}