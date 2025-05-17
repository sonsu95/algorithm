function solution(picture, k) {
    return picture.map(row => 
        row.split('')
           .map((pixel) => pixel.repeat(k))
           .join('')
    ).flatMap(stretchedRow => 
        Array(k).fill(stretchedRow)
    );
}