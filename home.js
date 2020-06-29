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






































