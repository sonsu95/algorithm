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