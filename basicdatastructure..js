//Basic Data Structures: Use an Array to Store a Collection of Data
//one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it
//All arrays have a length property, which as shown above, can be very easily accessed with the syntax Array.length
//multi-dimensional array, or an array that contains other arrays
//arrays are also capable of storing complex objects
let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

  //Basic Data Structures: Access an Array's Contents Using Bracket Notation
  //JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first

  //Basic Data Structures: Add Items to an Array with push() and unshift()
  //An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable
  function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift('I',2,'three');
  arr.push(7,'VIII',9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

  //Basic Data Structures: Remove Items from an Array with pop() and shift()

  //Basic Data Structures: Remove Items Using splice()
  //splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
  //can take up to 3 parameter
  //splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete. For example:
  let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

//splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray equals ['really', 'happy']

//Basic Data Structures: Add Items Using splice()
//you can use the third parameter, comprised of one or more element(s), to add to the array
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]

//Basic Data Structures: Copy Array Items Using slice()
//slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched
//slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). 
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

//Basic Data Structures: Copy an Array with the Spread Operator
// ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. 
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray

//Basic Data Structures: Combine Arrays with the Spread Operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']

//Basic Data Structures: Check For The Presence of an Element With indexOf()
//indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1

//Basic Data Structures: Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i=0; i<arr.length; i++){
      if(arr[i].indexOf(elem) === -1){
        newArr.push(arr[i]);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  //Basic Data Structures: Create complex multi-dimensional arrays

  //Basic Data Structures: Add Key-Value Pairs to JavaScript Objects
  //objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys)
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13;
  foods.grapes = 35;
  foods.strawberries = 27;
  // Only change code above this line
  
  console.log(foods);

  //Basic Data Structures: Modify an Object Nested Within an Object
  //Basic Data Structures: Access Property Names with Bracket Notation

//Basic Data Structures: Check if an Object has a Property
// JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

//Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan

function countOnline(usersObj) {
  // Only change code below this line
  let number = 0;
for(let user in usersObj){
  if(usersObj[user].online === true){
    number++;
  }
}
  return number;
} 
  //Basic Data Structures: Generate an Array of All Object Keys with Object.keys()
  //We can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.
  let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    // Only change code below this line
    return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

  //Basic Data Structures: Modify an Array Stored in an Object



// Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

