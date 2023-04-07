function solution(sides) {
    const sort = sides.sort((a,b) => a-b);
    return sort[2] < sort[0] + sort[1] ? 1 : 2;
}