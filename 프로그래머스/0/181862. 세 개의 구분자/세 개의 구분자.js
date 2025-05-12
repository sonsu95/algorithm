function solution(myStr) {
    const resultArr = myStr.split(/[abc]/).filter(str => str);
    return resultArr.length ? resultArr : ['EMPTY'];
}