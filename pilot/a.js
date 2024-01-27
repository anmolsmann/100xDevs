//console.log("Hello there!")

/*const a=1;
let b=2;
b=4;
console.log(5);
*/

//for (let i = 0; i <= 1000; i++){
//    console.log(i)
//}

/*function findSum(a,b){
    return a+b;
}

const value = findSum(9,6);
console.log(value)
*/

//callback functions
/*function sum(num1, num2, fntocall){
    let result = num1 + num2;
    fntocall(result);
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

const ans = sum(1,2,displayResult);
console.log(ans);

function calculateArithmetic(a, b, finalArithmetic){
    const value = finalArithmetic(a,b);
    return value;
}

function sum(a,b){
    return a+b;
}

const ans = calculateArithmetic(5,6,sum);
console.log(ans);

function findIndexof(str, target){
    console.log("The orginal string is:",str);
    console.log("Index of the string is:",str.indexOf(target));
}
findIndexof("Hello World", "World");

const value = "Anmol Mann";
let ans = value.slice(0,4);
console.log(ans);

const arrayone = [1,2,3];
const secondarr = [4,5,6];
console.log(arrayone.concat(secondarr));


class Animal{
    constructor(name, legcount, speaks){
        this.name = name;
        this.legcount = legcount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("This is an animal");
    }
    speak(){
        console.log("Hi there " + this.speaks)
    }
}

let dog = new Animal("dog",4,"bark");
dog.speak();
Animal.myType();        

const CurrentDate = new Date();
console.log(CurrentDate.getMonth()+1);
console.log(CurrentDate.getFullYear());

console.log("Current Date is: ", CurrentDate)

const users = '{"Name": "Anmol", "Age":"20", "Gender":"Male"}'

const user = JSON.parse(users)
console.log(user)
console.log(user["Name"])

const user1 = JSON.stringify(users)
console.log(user1)
console.log(Math.random())


function findSum(n){
    let ans=0;
    for (let i = 0; i < n; i++) {
        ans +=i;
    }
    console.log(ans);
}

function findSumTill100(){
    return findSum(100);
}

setTimeout(findSumTill100, 1000);
console.log("Hello world");



const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){   
    console.log(data);
});

console.log("Hey there")

//promises get rid of callbacks

const fs = require("fs");

function anmolReadsFile(){
    console.log("Inside Anmol's Function")
    return new Promise(function(resolve){
        console.log("Inside Promise")
        fs.readFile("a.txt", "utf-8", function(err, data){
            console.log("Before resolve")
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data);
}

anmolReadsFile().then(onDone);

*/

//async await

function anmolReadsFile(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hey there!")
        }, 1000)
    });
    return p;
}

async function main(){
    let value = await anmolReadsFile();
    console.log(value)
}

main()

//to run tests on the assignment questions : npx jest ./tests/----