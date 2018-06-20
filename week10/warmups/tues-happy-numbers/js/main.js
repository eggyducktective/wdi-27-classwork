// A happy number is defined by the following process:
//
// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and
// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.
//
// Task
// Your task is to write a program in Javascript which prints the first 10 happy numbers, starting from 1.
//
// Here are the first 10 happy numbers, for you to compare your output against:
//
// 1
// 7
// 10
// 13
// 19
// 23
// 28
// 31
// 32
// 44
// Example:
// Input: n = 19
// Output: True
// 19 is Happy Number,
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
// As we reached to 1, 19 is a Happy Number.
//
// Input: n = 20
// Output: False




const isHappy = function(num){

  let cycle = {};

  let squareSum = num;

  let count = 0;

  while(true){

    squareSum = sumOfDigitsSquared( squareSum )

    if( squareSum === 1 ){
      return true;
    }

    if( cycle[ squareSum ] === true ){
      return false
    }

    cycle[ squareSum ] = true
    count++
    // console.log(cycle);
  }
}// isHappy

const sumOfDigitsSquared = function(num){

  let numStr = num.toString();
  let sum = 0;

  for( let i = 0; i < numStr.length; i++ ){
    sum += +numStr[i] * +numStr[i]
    // sum += pareseInt(numStr[i]) * pareseInt(numStr[i])
  }

  let digit
  while( num > 0){
    digit = num % 10
    sum += digit * digit
    number = (number - digit) / 10
  }

  // console.log(sum);
  return sum;
}

const generateHappyNumbers = function(count){

  let found = 0;

  for( let i = 0; found < count; i++ ){
    if( isHappy(i) ){
      found++;
      console.log('Found happy number', i);
    }
  };

  // console.log(found);

}// generateHappyNumbers

generateHappyNumbers( 10 );
