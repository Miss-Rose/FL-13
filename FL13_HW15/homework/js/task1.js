const paymentCard = {cash: '100$'};
const creditCard = {creditLimit: '50$', cash: '200$'};

let assign = function (target, ...modifiers) {
    modifiers.forEach((modifier) => {
        for (let key in modifier){
            if(Object.prototype.hasOwnProperty.call(modifier, key)){
                target[key] = modifier[key];
            }
        }
    });
    return target;
};