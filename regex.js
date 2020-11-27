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

//14. Regular Expressions: Find Characters with Lazy Matching (?)
//a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
//a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
//However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h.*?1>/; // Change this line
let result = text.match(myRegex);

//15. Regular Expressions: Match Beginning String Patterns
//Outside of a character set, the caret(^) is used to search for patterns at the beginning of strings.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/ //Change this line
let result = calRegex.test(rickyAndCal);

//16. Regular Expressions: Match Ending String Patterns
//You can search the end of strings using the dollar sign character $ at the end of the regex.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

//17. Regular Expressions: Match All Letters and Numbers
// \w- This character class matches upper and lowercase letters plus numbers
//These shortcut character classes are also known as shorthand character classes.
//this character class also includes the underscore character (_).
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//18. Regular Expressions: Match Everything But Letters and Numbers
//You can search for the opposite of the \w with \W.
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]

//19. Regular Expressions: Match All Numbers
// The shortcut to look for digit characters is \d
// Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//20. Regular Expressions: Match All Non-Numbers
// The shortcut to look for non-digit characters is \D
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

//21. Regular Expressions: Restrict Possible Usernames
// 