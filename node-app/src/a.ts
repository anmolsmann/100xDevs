//const x:number =1
//console.log(x)

import { disposeEmitNodes } from "typescript";
import { string } from "zod";

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
/* function runAfterOneSec(fn: ()=> void){
    setTimeout(fn, 1000)
}

runAfterOneSec(function(){
    console.log("Hello!")
}) */

/* interface user{
    firstName: string,
    lastName: string,
    age: number,
    email?: string
}

function isLegal(user: user){
    if(user.age>18){
        return true
    }
    else{
        return false
    }
}

const value = isLegal({
    firstName: "Anmol",
    lastName: "Singh",
    age: 21
})

console.log(value) */

//interfaces can be implented as classes, the popular difference between types and interfaces

/* type employee = {
    name: string,
    startDate: Date
}

//types let you do unions, intersections etc

type manager = {
    name: string,
    department: string
}

type techlead = employee & manager
const t: techlead = {
    name: "Anmol",
    startDate: new Date(),
    department: "Tech"
} */

//arrays in typescript

/* type numArr = number[];
function maxvalue(arr: numArr){
    let max=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

const value = maxvalue([1,2,3])
console.log(value) */

//named constants - enums
enum direction{
    up,
    down, 
    right,
    left
}

function doSomething(keypressed: direction){
    if(keypressed == direction.up){
        console.log("up")
    }
}

doSomething(direction.up);
console.log(direction.up)
console.log(direction.left)

//generics in typescript
//problem#1 : user can send two sorts of inputs
type input = number | string

function firstElement(arr: input[]){
    return arr[0]
}

const value =firstElement(['Anmol', 'Singh'])

//solving this problem using generics
function identity<T>(arg: T):T{
    return arg
}

let output1 = identity<string>("myString")
let output2 = identity<number>(100)
