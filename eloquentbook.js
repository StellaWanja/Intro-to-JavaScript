//Nested Functions
//output ingredients needed to make a batch of hummus
const hummus = function(factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
};

//Closure
// what happens to local bindings when the function call that created them is no longer active?
//define function(wrapValue), that creates a local binding. It then returns a function that accesses and returns this local binding
//closure - being able to reference a specific instancs of a local binding in an enclosing scopr
//closure- function that references bindings from local scopes around it   
function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
//

function multiplier(factor){
    return number => number*factor;
}

let twice = multiplier(2);
console.log(twice(5));

//Recursion
//recursive function - function that calls itself
//
function power(base,exponent){
    if(exponent == 0){
        return 1;
    } else {
        return base*power(base, exponent-1);
    }
}
console.log(2,3);

//
function findSolution(target){
    function find(current,history){
        if(current == target){
            return history;
        }else if(current > target){
            return null;
        } else {
            return find(current+5, `(${history} +5)`) || find(current*3, `(${history} *3)`);
        }
    }
    return find(1,"1");
}
console.log(findSolution(24));

//
function zeroPad(number,width){
    let string = String(number);
    while(string.length < width){
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs){
    console.log(`${zeroPad(cows,3)}Cows`);
    console.log(`${zeroPad(chickens,3)}Cows`);
    console.log(`${zeroPad(pigs,3)}Cows`);
}

printFarmInventory(7,16,3);

//write a function that takes two arguments and return their min
function findMin(a,b){
    return Math.min(a,b);
}

console.log(findMin(10,5));

//define a recursive function isEven corresponding to:
//1. zero is even
//2. one is odd
//3. for any other number n; its evennes is same as n-2
//should return boolean
