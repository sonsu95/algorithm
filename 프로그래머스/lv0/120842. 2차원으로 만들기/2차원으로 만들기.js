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


function solution2(num_list, n) {
    // splice는 원본 배열을 건드려버리니 map함수로 순회를 할때마다 원본 배열을 토막쳐버리기에 index를 0으로 두고 시작한다.
    return Array(num_list.length / n).fill([]).map(x => num_list.splice(0, n))
}
