"use strict";
//const x:number =1
//console.log(x)
//number, string , boolean, null, undefined, any
/* function greet(firstName:string){
    console.log("hello " + firstName)
}

greet("anmol") */
/* function sum(a:number, b:number){
    return a+b
}

const value = sum(4,5)
console.log(value)
 */
/*
function isLegal(age: number){
    if(age>=18){
        return true
    }
    else{
        return false
    }
}

const value = isLegal(19)
console.log(value) */
//function that takes another function as an argument and returns nothing
function runAfterOneSec(fn) {
    setTimeout(fn, 1000);
}
runAfterOneSec(function () {
    console.log("Hello!");
});
