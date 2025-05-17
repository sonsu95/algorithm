function solution(array, height) {
    return array.filter(friendHeight =>  friendHeight > height).length;
}