function solution(str_list) {
    const startLIndex = str_list.indexOf('l');
    const startRIndex = str_list.indexOf('r');
    
    if (startLIndex === -1 && startRIndex === -1) return [];
    if (startLIndex !== -1 && startRIndex === -1) return str_list.slice(0, startLIndex);
    if (startLIndex === -1 && startRIndex !== -1) return str_list.slice(startRIndex + 1);
    
    return startLIndex < startRIndex ? str_list.slice(0, startLIndex) : str_list.slice(startRIndex + 1);
}