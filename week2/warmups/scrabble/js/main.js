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


const scrabble = {

   letterScore: {
     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
     2: ['D', 'G'],
     3: "BCMP".split(''),   // can use split('') to turn a string into an array of characters
     4: "FHVWY".split(''),
     5: ['K'],
     8: ['J', 'X'],
     10: ['Q', 'Z']
   },

   //to calculate score using letterscore object
   score: function(word){
     word = word.toUpperCase();
     let sum = 0;

      // need to isolate each letter of the word
     for( let i = 0; i < word.length; i++ ){
       let letter = word[i]

       //checking to see what the key (score) is for that letter
       for( let letterValue in this.letterScore ){
         // console.log(letterValue)
         if( this.letterScore[letterValue].includes(letter)){

           sum += parseInt(letterValue)
           console.log(`letter: ${letter} is worth ${letterValue}`)
         }// if
       }// for..in
     }// for loop
     console.log(sum)
   },

   letterScoresAlt: {
    'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
    'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
    's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
    'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
    'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
    'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
    'q' : 10, 'z' : 10
  },

  //to calculate word value using the letterScoreAlt object
  scoreAlt: function(word){
    word = word.toLowerCase();
    let sum = 0;

   //loop through the word to find the value of each letter (the letter is the KEY and the score is the VALUE)
    for( let i = 0; i < word.length; i++ ){
      let letter = word[i];
      let letterscore = this.letterScoresAlt[letter]
      // console.log(letterscore)
      sum += letterscore
      console.log(`letter: ${letter} is worth ${letterscore}`);
    }// for
    console.log(sum)
    return sum
  },
}; // scrabble

 scrabble.score('cabbage') // => output: 14
 scrabble.scoreAlt('cabbage') // => output: 14
