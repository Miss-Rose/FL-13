/***********1***********/
let maxElement = (...array) => Math.max(...array);
console.log('task 1')
console.log(maxElement(1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2));

/***********2***********/
let copyArray = (array) => [...array];
const array = [1,2, 3];
const copiedArray = copyArray(array);
console.log('task 2');
console.log(array, copiedArray);
console.log(array === copiedArray);

/***********3***********/
let addUniqueId = (obj) => {
    const uniqueIdentifier = Symbol(obj.name);
    const newObj = {...obj};
    newObj.id = uniqueIdentifier;
    return newObj;
};
console.log('task 3');
let k = addUniqueId({name: 123});
console.log(addUniqueId({name: 123}));
console.log(k);
console.log({name: 123} === addUniqueId({name: 123}));

/***********4***********/
function regroupObject(obj) {
let {name: name, details: details} = obj;
return {
    university: details.university,
    user: {
        age: details.age,
        firstName: name,
        id: details.id
    }
}
}
const oldObj = {
    name: 'Someone',
    details: {
        id: 1,
        age: 11,
        university: 'UNI'
    }
};
console.log('task 4');
console.log(regroupObject(oldObj));

/***********5***********/
const a = new Array(1,1,23,3,4,5,6,5,4,23,2,1,1,1,1,1);
let findUniqueElements = (array) => [...new Set(array)];
console.log('task 5');
console.log(findUniqueElements(a));

/***********6***********/
let hideNumber = (phoneNumber) => phoneNumber.slice(-4).padStart(10, "*");
console.log('task 6');
console.log(hideNumber('0123456789'));

/***********7***********/
console.log('task 7');
let hasParam = () => {
    throw new Error('Missing property');
};
let add = (a = hasParam(), b = hasParam()) => a + b;
console.log(add(1,3));

/***********8***********/
function myRepos(url) {
    fetch(url)
        .then((res) => res.json())
        .then((users) => {
            users.sort((a, b) => a.name.localeCompare(b.name));
            users.forEach((user) => console.log(user.name));
        });
}
console.log('task 8');
console.log(myRepos('https://api.github.com/users/Miss-Rose/repos'));

/***********9***********/
async function myRepos1(url) {
    let res = await fetch(url);
    const users = await res.json();
    users.sort((a, b) => a.name.localeCompare(b.name));
    users.forEach((user) => console.log(user.name));
}
console.log('task 9');
console.log(myRepos('https://api.github.com/users/Miss-Rose/repos'));