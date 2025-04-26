function solution(my_string, index_list) {
    return index_list.map(index_item => my_string[index_item]).join('');
}