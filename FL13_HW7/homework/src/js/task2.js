let answer;
let flag, playAgain;
let randNumber;
let max = 5;
const tree = 3;
const two = 2;
const five = 5;
const X = 100;
const L = 50;
const T = 25;
let userNumber;
let attempt;
let totalPrize=0;
let prize1=100, prize2=50, prize3=25;

answer = confirm('Do you want to play a game?');
do{
    attempt=tree;
    if(answer){
       randNumber = Math.floor(Math.random() * max);
        do{
            switch(attempt){
                case tree:
                    userNumber = prompt('Choose a roulette pocket number from 0 to '
                        +max+'\nAttempts left:'+attempt+'\nTotal prize:'+totalPrize
                        +'$\nPossible prize on current attempts:'+prize1+'$');
                    if(userNumber===String(randNumber)){
                        totalPrize+=prize1;
                        flag=false;
                    } else{
                        attempt--;
                        flag=true;
                    }
                    if(userNumber===null || userNumber.length===0){
                        attempt=0;
                    }
                    break;

                case two:
                    userNumber = prompt('Choose a roulette pocket number from 0 to '
                        +max+'\nAttempts left:'+attempt+'\nTotal prize:'+
                        totalPrize+'$\nPossible prize on current attempts:'+prize2+'$');
                    if(userNumber===String(randNumber)){
                        totalPrize+=prize2;
                        flag=false;
                    } else{
                        attempt--;
                        flag=true;
                    }
                    if(userNumber===null || userNumber.length===0){
                        attempt=0;
                    }
                    break;

                case 1:
                    userNumber = prompt('Choose a roulette pocket number from 0 to '
                        +max+'\nAttempts left:'+attempt+'\nTotal prize:'+totalPrize
                        +'$\nPossible prize on current attempts:'+prize3+'$');
                    if(userNumber===String(randNumber)){
                        totalPrize+=prize3;
                        flag=false;
                    } else{
                        attempt--;
                        flag=true;
                    }
                    if(userNumber===null || userNumber.length===0){
                        attempt=0;
                    }
                    break;

                default:{
                    alert('Thank you for your participation. Your prize is:0$');
                    flag=false;
                }
            }
        }while(flag);

        if(totalPrize>0 && attempt>0){
            alert('Congratulation, you won! Your prize is:'+totalPrize+'$');
            answer = confirm('Do you want to continue?');
            if(answer){
                playAgain=true;
                max*=two;
                prize1*=two;
                prize2*=two;
                prize3*=two;
            }else{
                alert('Thank you for your participation. Your prize is:'+totalPrize+'$');
                playAgain=false;
            }
        } else{
            answer = confirm('Do you want to play again?');
            totalPrize=0;
            if(answer){
                playAgain=true;
                max=five;
                prize1=X;
                prize2=L;
                prize3=T;
            }else{
                playAgain=false;
            }
        }
    }else{
        alert('You did not become a billionaire, but can.');
    }
}while(playAgain);
