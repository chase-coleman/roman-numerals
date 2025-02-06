/*
Write a function toRomanLazy that takes in a single input, num(an arabic number). Note: this step has already been done for you.
Create a variable output and set it's initial value to the empty string ("")
Create a variable romanNumeralToArabic that holds an object mapping the key of a roman numeral (V) to it's arabic equivalent (5)
Create a variable romanNumeralPriorityOrder that holds an array with the roman numerals in descending order (['M', 'D', 'C' ...])
Iterate through romanNumeralPriorityOrder
Use division and Math.floor to find out how many times a given num can be divided by the arabic equivalent of the current romanNumeral being iterated through. Append this many of the given romanNumeral to the output
Subtract num by that number so only the remaining portion that couldn't be divided is left.
Continue iterating until num === 0
return output
*/

const romanToArabic = {
    'I': 1 ,
    'V': 5 ,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}



function toRomanLazy(num){
    let answer = "";

}