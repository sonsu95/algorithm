function solution(bin1, bin2) {
    function binaryToDecimal(binary) {
        let decimal = 0;
        let power = 0;
        for (let i = binary.length - 1; i >= 0; i--) {
            if (binary[i] === '1') {
                decimal += Math.pow(2, power);
            }
            power++;
        }
        return decimal;
    }

    function decimalToBinary(decimal) {
        let binary = '';
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }
        return binary || '0'; // return '0' for decimal value of 0
    }

    return decimalToBinary(binaryToDecimal(bin1) + binaryToDecimal(bin2));
}