//Regular expressions are special strings that represent a search pattern. Also known as "regex" or "regexp", they help programmers match, search, and replace text.

//1. Regular Expressions: Using the Test Method .test() to test a regex
//If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);// Returns true

//2. Regular Expressions: Match Literal Strings
//3. Regular Expressions: Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString)

//4. Regular Expressions: Ignore Case While Matching
//You can match both cases(uppercase and lowercase) using what is called a flag
// the flag that ignores cases - i flag
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);

//5. Regular Expressions: Extract Matches - .match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//6. Regular Expressions: Find More Than the First Match/extract a pattern
//To search or extract a pattern more than once, you can use the g flag.
//You can have multiple flags on your regex like /search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

//7. Regular Expressions: Match Anything with Wildcard Period (.)
//Wildcard character (.) will match any one character
//For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
//Complete the regex unRegex so that it matches the strings "run", "sun", "fun", "pun", "nun", and "bun". Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//8. Regular Expressions: Match Single Character with Multiple Possibilities
//Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null


//9. Regular Expressions: Match Letters of the Alphabet
//inside a character set, you can define a range of characters to match using a hyphen character: -
//For example, to match lowercase letters a through e you would use [a-e]
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

//10. Regular Expressions: Match Numbers and Letters of the Alphabet
//Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);

//11. Regular Expressions: Match Single Characters Not Specified
//negated character sets - set of characters that you do not want to match
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou3]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//12. Regular Expressions: Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//13. Regular Expressions: Match Characters that Occur Zero or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

//14. Regular Expressions: Find Characters with Lazy Matching