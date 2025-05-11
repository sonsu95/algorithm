function solution(my_string, m, c) {
    const lines = Math.ceil(my_string.length / m);
    
    return Array.from({length: lines}).map((item, idx) => idx === 0 ? my_string.slice(0, m) : my_string.slice(idx * m, (idx + 1) * m)).map((innerItem, i) => innerItem[c - 1]).join('');
}