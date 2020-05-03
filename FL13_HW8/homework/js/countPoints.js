function countPoints(array) {
    let res = 0;
for(let i = 0; i<array.length; i++){
    let k = array[i].split(':');
     if(k[0]> k[1]){
        res+=3;
    }else if(k[0] === k[1]){
        res+=1;
    }else {
        res+=0;
    }
}
return res;
}
console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));