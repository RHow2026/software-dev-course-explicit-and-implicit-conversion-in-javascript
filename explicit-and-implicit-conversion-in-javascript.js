/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = String("5" - 2); //correct implicit conversion of string to number
console.log(result);
console.log("The result is: " + result);

let isValid = Boolean("false"); //This is string "false" changed into a boolean value
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; //Turns the initial string 25 into the number 25 making it explicit coversion
console.log("Total Age: " + totalAge);

// My Examples

//Implicit Type Conversion

let remainder = "90" - 10//JavaScript automatically converts "90" string into a number before performing subtraction.
console.log("The sum is: " + remainder)

//Explicit Type Conversion

let userResponse;
console.log(typeof userResponse);//userResponse is undefined
let change2Boolean = Boolean(userResponse);//userResponse converted to Boolean
console.log(typeof change2Boolean); //type of function for clear before and after data type conversion

let songLyric = 7779311
console.log(typeof songLyric); // songLyric is a number
let jam = String(songLyric) // jam variable changes it to a string
console.log("Prince wrote an ice cold song called " + jam)
console.log(typeof jam); // type of function for clear before and after data type conversion.