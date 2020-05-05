// 1
function convert(...args) {
    let newArr = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'string') {
            newArr.push(+args[i]);
        } else if (typeof args[i] === 'number') {
            newArr.push('' + args[i]);
        }
    }
    return newArr;
}
// 2
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
    return arr;
}
//3
function mapArray(a, f) {
    for (let i = 0; i < a.length; i++) {
        a[i] = +a[i];
        a[i] = f(a[i]);
    }
    return a;
}
//4
function filterArray(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//5
function containsValue(arr, el) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            res++;
        }
        res += 0;
    }
    return res > 0;
}
//6
function flipOver(str) {
    let newStr = '';
    let len = str.length;
    do{
        len--;
        newStr += ''+str[len]+'';
    }while(len);
    return newStr;
}
//7
function makeListFromRange(arg) {
    let newArr = [];
    for (let i = arg[0]; i <= arg[1]; i++) {
        newArr.push(i);
    }
    return newArr;
}

//8
const fruits = [
    {name: 'apple', weight: 0.5},
    {name: 'pineapple', weight: 2}
];
function getArrayOfKeys(obj, k) {
    let newArr = [];
    for(let i = 0; i < obj.length; i++){
        newArr.push(obj[i][k]);
    }
    return newArr;
}

//9
const rang1 = 10;
const rang2 = 20;
function substitute(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < rang2 && arr[i] > rang1) {
            arr[i] = '*';
        }
    }
    return arr;
}

//10
const curYear = 2020;
const curMonth = 0;
const curDate = 2;
const sec = 60;
const hour = 24;
const msec = 1000;

const date = new Date(curYear, curMonth, curDate);
const month = ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getPastDay(date, num) {
    let myDate = new Date(+date.valueOf() - num * msec * sec * sec * hour);
    return '' + myDate.getDate()
        + ', (' + myDate.getDate()
        + ' ' + month[myDate.getMonth()]
        + ' ' + myDate.getFullYear() + ')';

}

//11
function formatDate(data) {
    return `"${data.getFullYear()}/${data.getMonth() + 1}
    /${data.getUTCDate()} ${data.getHours()}:${data.getMinutes()}"`;
}
