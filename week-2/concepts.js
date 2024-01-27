const sum = (a,b) =>{
    return a+b;
}

const ans = sum(4,6)
console.log(ans)

const initialArray = [2,3,4,5,6];
const newArray = []

for (let i = 0; i < initialArray.length; i++){
    newArray.push(initialArray[i]*2);
}

console.log(newArray)

//using map function

function transform(i){
    return i*2;
}

const newarr =  initialArray.map(transform)
console.log(newarr)

//filer function inbuilt in javasript
function filteringLogic(n){
    if(n%2==0){
        return true
    }
    else{
        return false
    }
}

namesArray = ["Anmol", "Heeral", "Rishabh"]

const anslogic = initialArray.filter(function(n){
    if(n%2==0){
        return true
    }
    else{
        return false
    }
});

console.log(anslogic)

const namesLogic = namesArray.filter(function(n){
    if(n.startsWith("A")){
        return true
    }
    else{
        return false
    }
});

console.log(namesLogic)