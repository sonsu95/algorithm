function solution(my_string, s, e) {
    const reverseStr = my_string.slice(s,e+1).split('').reverse().join('');
    const firstStr = my_string.slice(0,s);
    const lastStr = my_string.slice(e+1);
    
    return firstStr + reverseStr + lastStr;
}