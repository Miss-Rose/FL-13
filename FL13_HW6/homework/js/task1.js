// Your code goes here
const a = prompt("Input check number: ", "");
const b = prompt("Input percentage:", "");
let number = undefined;
let percentage = undefined;
let tip = 0;
let sum = 0;
if (isFinite(+a) === false || isFinite(+b) === false || a==="" || b==="" || +a + +b < 0
|| +b < 0  || + b>100) {
    alert("Invalid input data");
}
else  {
    number = +a;
    percentage = +b;
    tip = number*percentage/100;
    alert(`
    Check number: ${number}
    Tip: ${percentage}%
    Tip amount: ${tip}
    Total sum to pay: ${Number.isInteger(tip+number)? (tip+number) : (tip+number).toFixed(2)}
    `);
}
