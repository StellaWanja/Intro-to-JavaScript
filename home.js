//in-line comment
/* multline
comment*/

//Data types
//undefined-undefined variable
//null - var set but is null
// boolean - true/false
// string - text
// symbol
// number - number
// object - store val

//ways to define variable
var myName = "Me" //can be used throughout the entire project
myName = 8 //var changed to 8
let ourName = "JavascriptCourse" //used only within the scope in which the variable was declared
const pi = 3.14 //variable can never change

//storing value with assignment operator
var a; //declare a variable to be assigned later. Include a semi-colon to showcase end of line
var b = 2; //declare and assign a variable
console.log(a) //return null
a = 7;
b = a; //assigned content a to b

console.log(a) //return 7

//initializing variables with assignment operator
var c = 9;//var c - declare, = 9 assign

//uninitialized variables
var m = 5;
var n = 10;
var o = "Hello!";

m = m + 5;
m += 5;

 //variable names are case-sensitive - use camel case

//increment number
var myVar = 80;
myVar ++

//decimal number
var dedNumber = 0.05;
var product = 2.01 * 0.5;

//finding remainder
var remainder = 11 % 3;

//double quotes
var myString = "I am \"double quoted\" inside \"quotes\"";

//single quotes
var str = 'I am "double quoted" inside "quotes"';

/*code output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*
* */

//concatenating strings
var conc = "First "+"Second";
var s = "I come first";
s += "I come first";

//appending variables to strings
var anAdjective = "awesome!";
var myStr = "freeCodeCamp is";
myStr += anAdjective;

//find string length
var firstNameLength = 0;
var firstName = "Andrea";
firstNameLength =firstName.length;
console.log(firstNameLength);

//bracket notation to find first character in string
var firstLetterofFirstName = "";
var firstLetter = "Ada";

firstLetterofFirstName = firstLetter[0];

//string immutability
var jello = "Jello";
jello = "Hello";

//bracket notation to find last character in string
var lastLetterofFirstName  = firstName[firstName.length-1];
console.log(lastLetterofFirstName);

//WORD BLANK GAME
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big","ran","quickly"));
console.log(wordBlanks("bird", "blue","flew","slowly"));

//store multiple values with arrays
var ourArray = ["John",23];

//nested arrays
var arrayM = [["one",1], ["two", 2]];

//access array data with indexing
var numberArray = [10,20,30];
var numberData = numberArray[0]; //equals 10

//modify array data with indexes
var arrayTwo = [22,18,64];
arrayTwo[1] = 45;
console.log(arrayTwo);

//access multi-dimensional arrays with indexes
var arrayDimen = [[1.2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var dataDimen = arrayDimen[2][1]; //equal 8
console.log(dataDimen);

//manipulate arrays with push() - add item to end of an array
var pushArray = [["John",23],["cat",10]];
pushArray.push(["happy",2]);
console.log(pushArray);

//manipulate arrays with pop() - remove last item from array
var popArray = [1,2,3];
var removeFromArray = popArray.pop();

//manipulate arrays with shift() - remove first item from array
var shiftArray = [1,2,3];
var removeFirstFromArray = shiftArray.shift();

//manipulate arrays with unshift() - add item to beginning of array
var unshiftArray = [["John,23"],["Jack",10]];
unshiftArray.unshift(["Happy",50]);
console.log(unshiftArray);

//write reusable code with functions
function reusableFn() {
    console.log("Hi world");
}

reusableFn();

//passing values to fn using parameters
function fnWithArgs(a,b) {
    console.log(a * b);
}

fnWithArgs(10,5);

//global scope and functions
//scope is visibility of variables
//variables defined outside of a function block have a global scope
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;//becomes global since not defined using var
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

//local scope and functions
//visible only within a function
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();

//global vs local scope in fn
var clothes = "T-Shirt";

function myOutfit() {
    var clothes = "sweater";

    return clothes;
}

console.log(myOutfit());
console.log(clothes);

//return a value from a fn with return
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

//undefined value returned from a fn
var sum = 0;
function addThree() {
    sum += 3;
}

//assignment with a returned value
var changed  = 0;

function change(num) {
    return (num + 5) / 3;
 }
 changed = change(10);

//stand in line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: "+JSON.stringify(testArr));

//boolean values
function wBooleans() {
    return true;
}

//comparison with equality operator - equal value eg 3 == 3 and 3 == "3" are equal
function testEqual(val) {
    if (val == 12){
        return "Equal";
    }
    return "Not equal";
}

testEqual(10);

//comparison with strict equality operator - equal value and type eg 3 ===3 and 3 === "3" not equal
function testStrict(val){
    if (val === 7){
        return "Equal";
    }
    return "Not equal";
}
testStrict("7");

//comparison with inequality operator
// !=

//comparison with strict inequality operator
function testStrictNotEqual(val) {
    if (val !== 17){
        return "Not equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

//comparison with logical AND operator
function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

//comparison with logical OR operator
function testLogicalOr(val){
    if (val < 10 || val >= 25){
        return "Yes";
    }
    return "No";
}
testLogicalOr(15);

//else if statements - consider the order
function orderMyLogic(val) {
    if (val < 5){
        return "Less than 5";
    } else if (val < 10){
        return "Less than 10";
    }else{
        return "Greater than 10";
    }
}
orderMyLogic(3);

//golf game
var names = ["hole-in-one!", "eagle", "birdie", "par", "bogey", "double bogey", "Go home"];
function golfScore(par, strokes) {
    if (strokes == 1){
        return names[0];
    } else if (strokes <= par - 2){
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    }else if (strokes == par) {
        return names[3];
    }else if (strokes == par + 1) {
        return names[4];
    }else if (strokes == par + 2) {
        return names[5];
    }else if (strokes >= par + 3) {
        return names[6];
    }
}

golfScore(5,4);

//switch statements
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
caseInSwitch(1);

//default option to pass in those that don't fall within the switch case categories
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
switchOfStuff(1);

//multiple identical options in switch statements
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
}
sequentialSizes(8);

//return boolean from functions
function isLess(a,b) {
    return a < b;
}
isLess(10,15);

//returning early patterns from functions
function abTest(a,b) {
    if (a<0 || b< 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
abTest(2,2);

//Javascript objects
//defined with {}
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails":1,
    "friends": ["everything!"]
};

//accessing object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//accessing object properties with bracket notation
var testFood = {
    "an entree": "burger",
    "side": "veggies",
    "the drink": "water"
};

var entreeValue = testFood["an entree"];
var drinkValue = testFood['the drink'];

//accessing object properties with variables
var testPlayer = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testPlayer[playerNumber];

//updating object properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

//add new properties to an object
var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

myDog.bark = "bow-wow";
//or
myDog['bark'] = "woof!";

//delete properties from an object
var myCat = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

delete myCat.name;

//using objects for lookups
function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "free": "Frank"
    };
    result = lookup[val];

    return result;
}
console.log(phoneticLookup("charlie"));

//testing objects for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else{
        return "Not Found";
    }
}
console.log(checkObj("hello"));

//manipulating complex objects
var myMusic = [ //objects inside array
    {
        "artist": "Billy",
        "title": "Piano Man",
        "release_year": "1973",
        "formats": [
            "CD",
            "DVD"
        ],
        "gold": true
    }
];

//accessing nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

//accessing nested arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulips",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

//record collection tutorial
var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); //keep a collection copy for tests before data gets changed

function updateRecords(id, prop, value) {
    if (value === ""){
        delete collection[id][prop]; //delete if empty
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || []; //if track exists, equal to itself. if track doesn't exist, equal to empty array
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(2468, "tracks", "test");
console.log(updateRecords(1245,"tracks","Hello"));

//iterate with while loops
var myArray = [];

var i = 0;
while (i < 5){
    myArray.push(i);
    i++;
}

console.log(myArray);

//iterate with for loops
//for (initialization, condition, expression) {}
var ouArray = [];

for (var h=0; h<5; h++){
    ouArray.push(h);
}

//iterate odd numbers with a for loop
var forArray = [];

for (var l = 1; l < 10; l+= 2){
    forArray.push(l);
}

//count backward with a for loop
var backArray = [];

for (var g = 10; g < 0; g -= 2){
    backArray.push(g);
}

//iterate through an array with a for loop
var ourArr = [2,3,4,5,6];
var ourTotal = 0;

for (var sumArr = 0; sumArr < ourArr.length; sumArr++){
    ourTotal += ourArr[sumArr];
}

console.log(ourTotal);

//nesting for loops
//use if you have nested arrays
function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i< arr.length; i++){
        for (var j=0; j<arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product); //5040 - will multiply every number, loop thru array[0] and multiply numbers, then move to array[1]...

//iterate with do..while loop
//do..while loop will run first then check the condition unlike the while loop
var doArr = [];
var i = 10;

do{
    doArr.push(i);
    i++
}while (i<5)

console.log(i,doArr);

//generate random fractions
function randomFunction() {
    return Math.random();
}
console.log(randomFunction()); //random decimal number

//generate random whole numbers
//math.floor rounds off to nearest whole number
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//generate random whole numbers within a range
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(5, 15);

//using the ParseInt Function //converts string to integer
function convertToInt(str) {
    return parseInt(str);
}
convertToInt("56");

//use the ParseInt with a radix
//radix specifies the basis of a number in a string eg base 10, base 2/binary
function convertToBase(str) {
    return parseInt(str, 2)
}
convertToBase("10011");

//using the conditional (ternary) operator
//condition ? statement-if-true : statement-if-false;
function checkEqual(a,b) {
    if (a === b){
        return true;
    } else {
        return false;
    }

    //or

    return a === b ? true : false;
}
checkEqual(1,2);

//using the multiple conditional (ternary) operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
checkSign(10);

//difference between var and let
//var - dclared globally or locally within a function
//let - declared within the block of code or expression in which it was declared in
//use let or const

function catTalk() {
    "use strict"; //enables strict mode to avoid mistakes and unsafe actions
    //used at top pf a file or function
}

//declare a read-only variable with the const keyword
//it's like let but cannot be reassigned, ie, read-only
//use const if you do not want to reassign it
//also used with a capital letter
const SENTENCE = str + "cool";
console.log(SENTENCE);

//mutate an array declared with const
const S = [5,7,2];

function editInPlace() {
    "use strict";

    S[0] = 2;
    S[1] = 5;
    S[2] = 8
}
editInPlace();
console.log(S);

//prevent object mutation - use object.freeze
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    }catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//use arrow functions to write concise anonymous functions
const MAGIC = () => new Date();

//write arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

//write higher order arrow functions - map, filter, reduce
//filter out non positive integers
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers)


const increment = (function(){
    return function increment (number, value = 1){
        return number + value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));

//use rest operator with function parameters (...) //will convert everything to an array
const sum = (function () {
    return function sum(...args) {
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3,4));

//use the spread operator  to evaluate arrays in place
const arr1 = ['JAN', 'FEB', 'MARCH', 'APRIL'];
let arr2;
(function () {
   arr2 = [...arr1];
   arr1[0] = 'potato'
})();
console.log(arr2);

//Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x : 3.6, y : 7.4, z : 6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z
//or
const {x : d, y: e, z: f} = voxel; //a=3.6, b=7.4,c=6.54

const AVG_TEMP = {today: 77.5, tomorrow: 79};

function getTempOfTmrow(avgTemp) {
    "use strict";
    const {tomorrow : tempofTmrow} = avgTemp;
    return tempofTmrow;
}
console.log(getTempOfTmrow(AVG_TEMP));

//destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: {min: 72, max: 83} ,
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrow(forecast) {
    "use strict";
    const {tomorrow : {max : maxOfTmrow}} = forecast;
    return maxOfTmrow;
}
console.log(getMaxOfTmrow(LOCAL_FORECAST));

// Use Destructuring Assignment to Assign Variables from Arrays
const [p, q, ,r] = [1,2,3,4,5,6];
console.log(p,q,r);

let u =8, t = 6;
(() => {
    "use strict";
    [u,t] = [t,u]
})();
console.log(u);
console.log(t);

// Use Destructuring Assignment with rest operator
const source = [1,2,3,4,5,6,7,8,9];
function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use Destructuring Assignment to Pass an Object as a Function's parameter
//used mainly in API calls
const stats = {
    max: 56.78,
    standard_dev : 4.34,
    median: 34.54,
    mode: 23.87,
    min: -8.75,
    average: 35.85
};
const half = (function () {
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
}) ();

console.log(stats);
console.log(half(stats));

//create strings using template literals
//made using backtick `
//can be used to make multi-line strings
//can easily add quotation marks
//can put variables in the string
const person = {
    name: "Hans",
    age: 26
};
const greeting = `Hello, my name is ${person.name}!
                   I am ${person.age} years old;`
console.log(greeting);

//Write Concise Object Literal Declarations Using Simple Fields
const createPerson  = (name, age, gender ) => ({name, age, gender});
console.log(createPerson("Hans", 26, "male"));

//write concise declarative functions
const bicycle = {
    gear: 2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//use class syntax to define a constructor function
class SpaceShuttle{
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

//Use getters and setters to Control Access to an Object
function makeClass() {
    class ThermoStat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return ThermoStat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

//import and export - variables and functions
//import {function} from "./filename"
//export {function};
//export const foo = "bar"; - variable
//to import everything, use *
//import * as objectname from "filename";
//export default - fallback export - export one thing from a file
//export default function subtract(x,y) {return x- y };
//import a default export
//import subtract from "filename";
//subtract(7,4);







































































