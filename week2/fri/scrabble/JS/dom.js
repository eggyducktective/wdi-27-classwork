// Write a program that, given a word, computes the scrabble score for that word.
//
// scrabble("cabbage")
// # => 14
// Letter Values
// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Extensions
// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.

let word = prompt("Enter a word");

word = word.toUpperCase();


const alphabet = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10

},

// score
// let sum = 0;
//
//
// for (let i = 0; i < word.length; i++) {
//
//   letter = word[i];
//
//   sum += alphabet[letter];
//
// }
// alert (`You have scored ${sum}`);
//
 // scoreAlt: function(word) {}




const scrabble = {

  letterScore: {
  1: "AEIOULNRST".split(''),
  2: ["D", "G"],
  3: "BCMP".split(''),
  4: "FHVWY".split(''),
  5: ["K"],
  8: ["J", "X"]
  10: ["Q", "Z"]
  },

  score: function(word) {
    word = word.toUpperCase();
    let sum = 0;

    for (let i = 0; i < word.length; i++) {
      let letter = word[i]

      for (let letterValue in this.letterScore) {
        if (this.letterScore[letterValue].includes(letter)) {
          sum += parseInt(letterValue);
          console.log(`letter: ${letter} is worth ${letterValue}`)
        } //for if
      } //for in
    } for loop
    console.log(sum)
  } //end function
};
