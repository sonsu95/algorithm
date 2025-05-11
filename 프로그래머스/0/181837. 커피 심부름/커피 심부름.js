function solution(order) {
    return order.map(menu => menu.includes('cafelatte') ? 5_000 : 4_500).reduce((acc,cur) => acc + cur);
}