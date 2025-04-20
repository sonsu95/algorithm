function solution(num_list) {
    const evens = num_list.filter(num => num % 2 === 0).join('');
    const odds = num_list.filter(num => num % 2 === 1).join('');
    
    return Number(evens) + Number(odds);
}