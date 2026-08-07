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

let sum = "90" - 10
console.log("The sum is:" + sum)

//Explicit Type Conversion

let songLyric = 7779311
let jam = String(songLyric)
console.log("Prince wrote an ice cold song called " + jam)
