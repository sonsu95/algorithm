function solution(my_string) {
    const counter = new Array(52).fill(0);
    
    for (const char of my_string) {
        const code = char.charCodeAt(0);
        
        // 대문자 A-Z (ASCII 65-90)
        if (code >= 65 && code <= 90) {
            counter[code - 65] += 1;
        }
        // 소문자 a-z (ASCII 97-122)
        else if (code >= 97 && code <= 122) {
            counter[code - 97 + 26] += 1;
        }
    }
    
    return counter;
}