const len = 4;
const time = 20;
const uLogin = prompt('Ask login', '');
if (uLogin === null || uLogin.length === 0) {
    alert('Canceled');
} else if (uLogin.length < len) {
    alert('I don\'t know any users having name length less than 4 symbols');
}else if (uLogin === 'User'){
    const uPass = prompt('Ask password', '');
    if(uPass === null || uPass.length === 0){
        alert('Canceled');
    }else if(uPass === 'UserPass'){
        let hours = new Date().getHours();
        if(hours<time){
            alert('Good day, dear User!');
        }else {
            alert('Good evening, dear User!');
        }
    }else{
        alert('Wrong password');
    }
}else if (uLogin === 'Admin'){
    const aPass = prompt('Ask password', '');
    if(aPass === null || aPass.length === 0){
        alert('Canceled');
    }else if(aPass === 'RootPass'){
        let hours = new Date().getHours();
        if(hours<time){
            alert('Good day, dear Admin!');
        }else {
            alert('Good evening, dear Admin!');
        }
    }else{
        alert('Wrong password');
    }
}else {
    alert('I don’t know you');
}




