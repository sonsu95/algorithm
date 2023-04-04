const arr = [1, 9, 4, -1, 0, 3];

// 오름차순 정렬
const ascendingSort = (arr) => {
    return arr.sort((a, b) => a > b ? 1 : -1)
}

// 내림차순 정렬
const descendingSort = () => {
    return arr.sort((a, b) => a < b ? 1 : -1)
}

