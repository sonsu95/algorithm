function solution(rsp) {
    const newArr = [];

    rsp.split("").forEach(item => {
        if (item === "2") newArr.push("0");
        else if (item === "0") newArr.push("5");
        else newArr.push("2");
    })
    return newArr.join("");
}