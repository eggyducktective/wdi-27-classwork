
// 1 - Create the html n js
// 2 - Create the text file to upload over ajax
// 3 - Load the text files
// 4 - Build a markov table
// - word as a key, followed by an array of words which follow the "key" word.
// 5 - Generate next text, choose random starting word, then choose the next word from the array, and then look up that word and find the next word from its array.

// "The dogs are running.
// The dog are happy.
// The owners are drunk.
// No dogs survived."

// const markov = {
//   The: ['dogs', 'dogs', 'owners'],
//   dogs: ['are', 'are', 'survived'],
//   are: ['running', 'happy', 'drunk'],
//   owners: ['are'],
//   running: [],
//   happy: []
// };

const bookFileName = './a-tale-of-two-cities.txt';

let markov = {};
let beginnings = [];

const buildMarkov = function(text){
  //split huge string into an array of words
  let words = text.split(/[ ;\-\n\"]/); // [ ] indicates range in regex

  for (let i = 0; i < words.length-1; i++) {
    let word = words[i];
    //console.log(word);

    if(!markov[word]){ // equivalent to If(typeof markov[word] === 'undefined')

    markov[word] = [];

    }
    let nextWord = words[i + 1] // get the word after this word from the array of words
    markov[word].push(nextWord);

    if(word.match(/^[A-Z][a-z]/)){ // To, The .................
      beginnings.push(word);
    }
  } // end for

}; // end buildMarkov

// helper function to return a random integer between 0 and MAX

const randy = function(max) {
  return Math.floor(Math.random() * max);
}

// helper function to return a random elemnt from the given array
const choose = function(arr){
  return arr[randy(arr.length)];
}

const generate = function(length) {

  // choose a suitable start for our generated text
  let next = choose(beginnings);
  // console.log(next);
  let output = next;

  for (let i = 0; i < length; i++){
    // choose a new word based on the current word
    let word = choose(markov[next]);

    // append to the new string we're building, inclduing a space
    output += ''
  }
}


$(document).ready(function(){
  $.ajax(bookFileName)
  .done(function(res){
    // console.log(res);
    buildMarkov(res)
  })
  .fail(function(err){
    console.log('error:', err);
  })
});
