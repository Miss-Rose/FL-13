const str = prompt('Enter string: ', '');
console.log(typeof str);
let res='';
const c = 2;
if(str.length === 0){
    res = 'Invalid value';
}else if(str.includes(' ')){
    res = 'Invalid value';
}else {
    if(str.length%c===0){
        res = ''+str[str.length/c-1] + str[str.length/c];
        res.split(',');
    }else if(str.length%c===1){
        res = ''+ str[Math.floor(str.length/c)];
    }
}
alert(res);