/**
 * 등차수열의 합
 */
export const sumOfArithmeticSequence = (n) => {
    return typeof n === "number" ? (n * (n+1) / 2) : null;
}
