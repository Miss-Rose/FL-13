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
console.log(convert('1', 2, 3, '4'));

// 2
function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
    return arr;
}
executeforEach([1, 2, 3], function (el) {
    console.log(el * 2)
});

//3
function mapArray(a, f) {
    for (let i = 0; i < a.length; i++) {
        a[i] = +a[i];
        a[i] = f(a[i]);
    }
    return a;
}
console.log(mapArray([2, '5', 8], function (el) {
    return el + 3
}));


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
console.log(filterArray([2, 5, 8], function (el) {
    return el % 2 === 0
}));

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
console.log(containsValue([2, 5, 8], 2)); // returns true
console.log(containsValue([12, 4, 6], 5));// returns false

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
console.log(flipOver('hey world')); // 'dlrow yeh'

//7
function makeListFromRange(arg) {
    let newArr = [];
    for (let i = arg[0]; i <= arg[1]; i++) {
        newArr.push(i);
    }
    return newArr;
}
console.log(makeListFromRange([2, 7])); // [2, 3, 4, 5, 6, 7]

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
console.log(getArrayOfKeys(fruits, 'name'));// returns [‘apple’, ‘pineapple’]

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
console.log(substitute([58, 14, 48, 12, 31, 19, 10]));

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

console.log(getPastDay(date, 1)); // 1, (1 Jan 2020)
console.log(getPastDay(date, 2)); // 31, (31 Dec 2019)
console.log(getPastDay(date, 365)); // 2, (2 Jan 2019)

//11
function formatDate(data) {
    return `"${data.getFullYear()}/${data.getMonth() + 1}
    /${data.getUTCDate()} ${data.getHours()}:${data.getMinutes()}"`;
}
console.log(formatDate(new Date('6/15/2019 09:15:00')));
console.log(formatDate(new Date())); // gets current local time
