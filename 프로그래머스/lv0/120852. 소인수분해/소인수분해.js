function solution(n) {
   const result = [];
   let div = 2;
   while (n >= 2) {
       if (n % div === 0) {
           result.push(div);
           n /= div;
       } else {
           div++
       }
   }
   return [...new Set(result)];
}