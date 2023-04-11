function solution(numbers) {
    const numStrList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    numStrList.forEach((item, idx) => {
        numbers = numbers.replaceAll(item, idx);
    })
    return Number(numbers);
}