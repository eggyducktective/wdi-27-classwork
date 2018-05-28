// Simple Sums
// Back to the world of Javascript! See if you can remember how it works...
//
// Write a program that can calculate the sum of the first n elements of the following sequences:
//
// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
//
// For example:
//
// s1(4) = 0
// s2(4) = 10
//
// Use any language of your choice.
//
// Can you guess what the sum would be if n is infinity?

//
// array1 = [1, -1, 1, -1, 1, -1, 1];
// array2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let s1 = 0;
// let s2 = 0;
//
// for (var i = 0; i < array1.length; i++) {
//   if (array[i] % 2 === 0) {
//     s1 = 0;
//   } else {
//     s1 = 1;
//   }
//   return;
// };
//
//
//
// for (var i = 0; i < array2.length; i++) {
//   array2[i]
//   s2 += array2[i]
// }

// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
const s1 = function(num){
  // let sum = 1;
  // for (let i = 0; i <= num; i++) {
  //   if (i % 2 === 0) {
  //     sum--
  //   } else {
  //     sum++
  //   } //end of if
  // } // end of for loop
  // return sum;

  return num % 2 === 0 ? 0 : 1
}

console.log(s1(4));




// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
const s2 = function(num){
  // let increment = 0;
  // for (let i = 0; i <= num; i++) {
  //   console.log(increment);
  //   increment += i
  // }
  // return increment;
  return (num * (num + 1)) / 2

  // 4 + 1 = 5
  // 4 * 5 = 20
  // 20 / 2 = 10
}

console.log(s2(4));



const simpleSumsFunc = {
  let s1 = num % 2 === 0 ? 0 : 1
  let s2 = (num * (num + 1)) / 2

  console.log(`Result of s1:${s1}, result of s1:${s2}`);
}

simpleSumsFunc(4)



const simpleSumObj = function(num){

  s1: function(num){
    return num % 2 === 0 ? 0 : 1
  },

  s2: function(num){
    return (num * (num + 1)) / 2
  },

  combinedResult: function(num){
    let s1 = this.s1(num);
    let s2 = this.s2(num);
    console.log(`Result of s1:${s1}, result of s1:${s2}`);
  }
}
simpleSumsFunc.combinedResult()
