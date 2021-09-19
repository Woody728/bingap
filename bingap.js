//Finds the size of the longest string of 0s between two 1s in the binary representation of an integer.


function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let gapArray=[];
    let m = 0;
    let i=0;
    //The -1 is because the indexing starts from 0.
    while(i<=(N.toString(2).length)-1){
        //Rememeber to use === rather than = and also note that we use "0" rather than 0 because it is part of a string rather than a number.
        //toString(2) converts the number to a string in base 2.
        if((N.toString(2))[i]==="0"){
            m++;
            i++;
        } 
        else {
            gapArray.push(m);
            m=0;
            i++;
        }
    }
    console.log(gapArray);
    console.log(Math.max(...gapArray));
}

//tests

let a = 555;
console.log(a.toString(2));
console.log(a.toString(2).length);
solution(a);

a = 1024;
console.log(a.toString(2));
console.log(a.toString(2).length);
solution(a);

a = 15;
console.log(a.toString(2));
console.log(a.toString(2).length);
solution(a);

a = 32;
console.log(a.toString(2));
console.log(a.toString(2).length);
solution(a);

a = 728;
console.log(a.toString(2));
console.log(a.toString(2).length);
solution(a);

a = 273;
console.log(a.toString(2));
console.log(a.toString(2).length);
solution(a);

//I made this to check whether resetting a variable changes it in the array after it has been pushed. It doesn't, which is good.

function test(A){
    let newarray = [1];
    newarray.push(A);
    A=0;
    newarray.push(A);
    return newarray;
}

//Let's see if we can convert to an array in base 2 with a for loop and without using toString.

function binConvert(N){
    let binArray = [];
    let p=N;
    //Remember that we use ** to raise to a power in javascript
    //Also notice the unproblematic use of the rather complex middle parameter of the 'for' loop
    for(m=0; (2**m)<=N; m++){
        if(Number.isInteger(p/2)){
          binArray.push(0);
          p=p/2;
        } else {
          binArray.push(1);
          p=p/2 - 0.5;
        }
    }
    console.log(binArray);
}

binConvert(555);
binConvert(1024);
binConvert(15);
binConvert(32);
binConvert(728);
binConvert(273);