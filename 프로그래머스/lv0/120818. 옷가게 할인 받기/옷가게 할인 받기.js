const discount = (price, percent) => {
    return Number(price * ((100 - percent) / 100));
}
const solution = (price) => {
    let discountPrice = 0;
    if (price >= 500000) discountPrice = discount(price, 20);
    else if (price >= 300000) discountPrice = discount(price, 10);
    else if (price >= 100000) discountPrice = discount(price, 5);
    else discountPrice = price;
    return Math.floor(discountPrice);
}


/**
 * 숫자에 콤마를 찍어야하는 경우
 */

// const discount = (price, percent) => {
//     return Number(price * ((100 - percent) / 100));
// }
//
// const addThousandSeparator = (num) => {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
//
// const solution = (price) => {
//     const delCommaPrice = Number(price.split(',').join(''));
//     let discountPrice = 0;
//     if (delCommaPrice >= 500000) discountPrice = discount(delCommaPrice, 20);
//     else if (delCommaPrice >= 300000) discountPrice = discount(delCommaPrice, 10);
//     else if (delCommaPrice >= 100000) discountPrice = discount(delCommaPrice, 5);
//
//     return addThousandSeparator(discountPrice);
// }
