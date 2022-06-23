//Q1----Print factorial of a number using recursion.
/*function fact(num){
    if (num>0){
        return num*fact(num-1)
    }else{
        return 1
    }
}
console.log(fact(20));*/


//Q2-----Given a number n, print numbers from n to 1 using recursion.
/*function recurs(x,y){
    if(x<=y){
        console.log(x)
        return recurs(x+1,y)
    }
}
recurs(1,10)*/




//Q3----Given a number n, print numbers from 1 to n using recursion.
/*function recurs(x,y){
    if(x<=y){
        console.log(y)
        return recurs(x,y-1)
    }
}
recurs(1,10)*/



//Q4---Print ‘n’ numbers of Fibonacci series using recursion.















//Q6---------Write a Javascript program to count the number of digits a given number has using recursion.
/*function digit(n,i){
    if(n!=0){
        let x=n%10
        i=i+i
        let y=Math.floor(n/10)
        return digit(y,i)
    }
    console.log(i)
}
console.log(digit(48460,50))*/

function nice(){
console.log("Hello");
}


function advo(num1, num2, callback){
    console.log(num1+num2);
    callback()
}
    let a=10;
    let b=10;

console.log(a, b,  nice)