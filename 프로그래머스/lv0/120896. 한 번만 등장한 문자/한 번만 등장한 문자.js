function solution(str) {
    let uniqueChars = [];
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) === i && str.lastIndexOf(char) === i) {
            uniqueChars.push(char);
        }
    }
    return uniqueChars.sort().join("");
}