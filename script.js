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
