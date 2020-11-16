//Bracket notation is a way to get a character at a specific index within a string.
var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"

//firstName[0] = "J" won't change or replace character at index[0]

//Use Bracket Notation to Find the Last Character in a String
var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"

//multidimensional array
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3]; // equals [[10,11,12], 13, 14]
  arr[3][0]; // equals [10,11,12]
  arr[3][0][1]; // equals 11
  
//push()
    var arr1 = [1,2,3];
    arr1.push(4);
    // arr1 is now [1,2,3,4]

//pop()
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1,

//shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

//Parameters are variables that act as placeholders for the values that are to be input to a function when it is called
//The actual values that are input (or "passed") into a function when it is called are known as arguments.

// switch statement

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//When a return statement is reached, the execution of the current function stops and control returns to the calling location
//However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

//Basic JavaScript: Record Collection

// You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

// You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

//     Your function must always return the entire object.
//     If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//     If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//     If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//     If value is an empty string, delete the given prop property from the album.

// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty('tracks')) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');

