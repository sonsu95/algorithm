function solution(num, k) {
    return String(num).split("").includes(String(k)) ? String(num).split("").indexOf(String(k)) + 1 : -1;
}