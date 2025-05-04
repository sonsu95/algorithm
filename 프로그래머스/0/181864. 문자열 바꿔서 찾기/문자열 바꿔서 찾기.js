function solution(myString, pat) {
    return myString.split('').map(str => str === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}