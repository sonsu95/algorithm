function solution(money) {
    const americano = 5500;
    return [Math.floor(money / americano), money % americano]
}