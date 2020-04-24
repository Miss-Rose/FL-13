const a = prompt('Input check number: ', '');
const b = prompt('Input percentage:', '');
let number;
let percentage;
let tip = 0;
let sum = 0;
const k = 100;
const c = 2;
if (isFinite(+a)===false || isFinite(+b)===false || a==='' || b==='' || +a + +b < 0 || +b < 0 || +a < 0 || +b > k) {
    alert('Invalid input data');
} else {
    number = +a;
    percentage = +b;
    tip = number * percentage / k;
    alert(`
    Check number: ${number}
    Tip: ${percentage}%
    Tip amount: ${tip}
    Total sum to pay: ${Number.isInteger(tip + number) ? tip + number : (tip + number).toFixed(c)}
    `);
}
