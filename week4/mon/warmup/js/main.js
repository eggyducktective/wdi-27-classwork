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


$(document).ready(function(){



// const paragraph = function () {
// $("#hidden").show();
// };


const words = $("#words").text().split(/ /);
console.log(words);



const $body = $("body");

const random = function (max) {
  return Math.floor(Math.random() * max)

};

const putWord = function () {
  const randomIndex = random(words.length);

  const text = words[randomIndex];

  const $div = $("<div class="word">").html(text);

  $div.css ({
    top: random(window.innerHeight) + 'px',
    left: random(window.innerWidth) + 'px',
    fontSize: ((40) + random(80) ) + 'px'
  });

  $div.appendTo($body);

  $div.fadeIn(1000).fadeOut(2000, function() {
    $(this).remove;
  })

};

setInterval(putWord, 100);

});
