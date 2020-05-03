function letterCount(str, word) {
   return str.toLowerCase().split("").filter(function(s) {
        return s === String(word);
    }).length;

}
console.log(letterCount("Maggy", "g"));
console.log(letterCount("Barry", "b"));
console.log(letterCount("", "z"));