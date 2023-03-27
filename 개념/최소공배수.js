import {GCD} from "./유클리드 호제법(최대공약수)";

/**
 * 최소공배수
 */
export const LCM = (a, b) => {
    return (a * b) / GCD(a, b);
}

