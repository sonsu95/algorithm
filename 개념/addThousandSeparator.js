export function addThousandSeparator(num) {
    // 정규식을 사용하여 숫자의 콤마를 추가합니다.
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
