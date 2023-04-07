function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    const result = my_string.split("").filter(x => !vowels.includes(x));
    return result.join("");
}