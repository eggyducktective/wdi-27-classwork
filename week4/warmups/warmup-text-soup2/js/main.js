// <!-- Text Soup
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
//
// Hints:
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg; paste the text into a hidden <div> element in your HTML file, and use jQuery to get the contents of the div.
// Bonus:
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat. -->
//
//
//


$(document).ready(function() {
  let counter = 0;

// This object will store all the variables we want the GUI controls to change;
// we need to use an object structure because that is what the dat.gui library expects
  let controller = {
    fadeInSpeed: 100,
    fadeOutSpeed: 200,
    fontSizeRange: 100,
    textColor: '#eb1313',
    addWord: '',  // This is a string, so the GUI will show a text field

    // a  method like this will cause a GUI button to be shown, which calls this function when clicked
    clearWords: function(){
      $('.word').remove(); // Just remove all elements with class="word"
    }
  }

  // create our GUI object
  const gui = new dat.GUI();

  // Add the various controller elements
  // Note that we pass our controls object as a variable, but the internal properties (variables) as a string.
  // We also need to specify a min and max range for the slider
  gui.add(controller, 'fadeInSpeed', 1, 5000);
  gui.add(controller, 'fadeOutSpeed', 1, 5000);
  gui.add(controller, 'fontSizeRange', 1, 300);
  // Note the different method name for the colour picker element
  gui.addColor(controller, 'textColor');

  // Note that the gui.add() method to show a text field or a button is the same as for
  // a number, except that there's no range values specified
  gui.add(controller, 'addWord');
  gui.add(controller, 'clearWords');

  // store the div with id words into a variable
  // .text() to refer to the text inside of the div
  // .split() to split each word into an array of strings
  // (/[ ;\-,.\n]+/) regular expression which looks for spaces, punctuation and newlines
  // const words = $('#words').text().split(/[ ;\-,.\n]+/);
  const words = $('#words').text().split(/[ ;\-,.\n]+/);

  // store the body in a variable to use later when appending
  const $body = $('body');

  // helper function to return a number between 0 and max,
  const random = function(max) {
    return Math.floor(Math.random() * max)
  };

  // main function to put the random words on the page
  const putWord = function() {
    // Get a random word from our array, using our random helper funcion, with the word array length as the maximum value
    const randomIndex = random(words.length);

    // select random word
    // const text = words[randomIndex];
    var text = '';

    // 1. We want to check whether a word has been typed at all, so check the length; and also:
    // 2. To make sure we insert the word in between our random words, we'll use an incrementing
    // counter value, and check whether the number is even by using the modulus operator.
    // (Better remember to increment that counter at the end of this function!)
    if ( (controller.addWord.length > 0) && (counter % 2 == 0) ){
      text = controller.addWord;
    } else {
      text = words[randomIndex];
    }

    // Insert the random word as the content of a new div
    const $div = $("<div class='word'>").html(text);

    $div.css({
      top: random(window.innerHeight) + 'px',
      left: random(window.innerWidth) + 'px',
      // Use the new value from our controls object, changed by the GUI slider
      fontSize: (10 + controller.fontSizeRange) + 'px',
      // Use the new value from our controls object
      color: controller.textColor
    });

    // apppend the new $div to the body
    $div.appendTo($body);

    // Note that we use our new GUI-modified timing values from our controls object
    $div.fadeIn(controller.fadeInSpeed).fadeOut(controller.fadeOutSpeed, function() {
      $(this).remove()
    });

    // Need to increment our counter at the end of every call to putWord()
    counter++;

  };// putWord() function
  setInterval(putWord, 100)

}); // $(document).ready


// Text Soup 2: the Widgeting
// Using the solution for the original text soup, and the dat.gui Javascript library, add controller elements to the Text Soup page to allow real-time control of the following parameters from within the browser:
//
// fade in time (i.e. a range from 1 to 5000 milliseconds)
// fade out time
// font size
// BONUS:
// add a controller to change the add word interval (consider example #7 from the page above, and remember this example from class)
// add a controller to change the text colour using the colour controller (example 4)
// add a text field controller, and use the word(s) from the text field in between every other random word that is added
// add a button controller which clears all words off the screen when pressed
// HINTS:
// To make sure you have the up-to-date Text Soup warmup solution in your fork of the homework repo, and to copy it to a new folder to work on, run these commands in iTerm (BUT MAKE SURE YOU'RE UPDATING THE FILE NAMES APPROPRIATELY):
// cd /replace/these/words/with/the/path/to/your/fork/of/the/homework/repo/wdi27-homework
// git pull upstream master
// cp -r warmups/week03/day01_textsoup ~/Projects/textsoup2
// cd ~/Projects/textsoup2
// curl https://raw.githubusercontent.com/dataarts/dat.gui/master/build/dat.gui.js >js/dat.gui.js
// atom .
// Now you have a copy of the Text Soup warmup in a new folder in your Projects folder (assuming you already have a ~/Projects folder. We're making this copy so you don't work directly on my warmup solution code in the homework repo, which would cause a merge conflict next time you commit.
//
// Also, you're getting the dat.gui.js file!
//
// It's probably best not to use the constructor-style example in the dat.gui page I linked to. It will be simpler to just use an object to store your controller variables, like so:
// var controllers = {
//   fadeInSpeed: 100,
//   // etc..
// };
//
// var gui = new dat.GUI();
// gui.add(controllers, 'fadeInSpeed', // etc...
