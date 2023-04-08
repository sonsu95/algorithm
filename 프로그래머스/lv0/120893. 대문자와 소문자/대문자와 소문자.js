function solution(my_string) {
    let result = [];
    my_string.split("").forEach((str, idx) => {
        str === str.toUpperCase() ? result.push(str.toLowerCase()) : result.push(str.toUpperCase())
    })
    return result.join("")
}