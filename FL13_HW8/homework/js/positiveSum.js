function positiveSum(array) {
   return array.filter(function(number) {
        return number > 0;
    }).reduce(function(sum, current) {
       return sum + current;
   }, 0);
}
console.log(positiveSum([2, 4, 6, 8]));
console.log(positiveSum([0, -3, 5, 7]));