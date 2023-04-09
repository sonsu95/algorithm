function solution(num_list, n) {
    let newArr = [];
    for (let i = 0; i < num_list.length; i += n) {
        let innerArr = [];
        for (let j = i; j < i + n; j++) {
            innerArr.push(num_list[j]);
        }
        newArr.push(innerArr);
    }
    return newArr;
}