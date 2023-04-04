function solution(strlist) {
  const newArr = [];
    strlist.forEach(str => {
        newArr.push(str.length)
    })
    return newArr;
}