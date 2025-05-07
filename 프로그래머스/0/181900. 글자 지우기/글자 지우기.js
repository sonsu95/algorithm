function solution(my_string, indices) {
    const indicesSet = new Set(indices);
    
    return my_string.split('').filter((_, idx) => !indicesSet.has(idx)).join('');
}