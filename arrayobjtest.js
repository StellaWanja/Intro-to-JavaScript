//1. Write a JavaScript function to check whether an `input` is an array or not.
const inputArray = (input) => {
    return Array.isArray(input);
}

//console.log(inputArray('w3')); //false
//console.log(inputArray([1,2,3,4])); //true

//2. Write a JavaScript function to clone an array
const cloneArray = (arr) => {
    let cArr = [...arr];
    return cArr;
}

//console.log([1,2,3,4]);
//console.log([1,2,3,[4,5]]);

//3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
const firstEl = (arr,n=1) => {
    if(n > 0){
        return arr.slice(0,n);
    } else {
        return [];
    }
}

console.log(firstEl([7, 9, 0, -2])); 
//console.log(firstEl([],3));
//console.log(firstEl([7, 9, 0, -2],3));
//console.log(firstEl([7, 9, 0, -2],6));
//console.log(firstEl([7, 9, 0, -2],-3));

//4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
const lastEl = (arr,n=1) => {
    if(n > 0){
        return arr.slice((arr.length - 1), n);
    } else {
        return [];
    }
}

console.log(lastEl([7, 9, 0, -2]));
console.log(lastEl([7, 9, 0, -2],3));
console.log(lastEl([7, 9, 0, -2],6));