function solution(id_pw, db) {
    let result = "";
    db.forEach((data, idx) => {
        if (data[0] === id_pw[0]) {
            if (data[1] === id_pw[1]) {
                return result = "login";
            } else return result = "wrong pw"
        }
    })
    return result ? result : "fail";
}