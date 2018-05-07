// Leap Year Warmup Exercise
// Do this in HTML and JS!
//
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true
// How to structure it...
//
// We want a custom function called isLeapYear
// Bonus!
//
// Ask the user what number they want to test
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE



// - Every year that is evenly divisible by 4
// - Except if it is evenly divisible by 100...
// - Unless it is also divisible by 400

const isALeapYear = function(year){

  if( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    return `${year} is a leap year`
  } else {
    return `${year} is not a leap year`
  }

};

const year = prompt('Enter year')
window.prompt(isALeapYear(year));


// console.log(isALeapYear(1997))
// console.log(isALeapYear(1996))
// console.log(isALeapYear(1900))
// console.log(isALeapYear(2000))



// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
