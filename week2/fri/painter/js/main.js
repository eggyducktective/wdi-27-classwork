//when we click the mouse
// make a circle color appear at the spot we click on
//
//
// Get the mouse position for that click
// create new div element, set its position to click corodinate, give it a color, and append it to the page




// console.log("loaded", jQuery);





let $body;


let hueCounter = 0;

let lastMouseX = 0;
let lastMouseY = 0;


const randRange = function (max){
  return parseInt(Math.random() * max);
};

const createBlob = function (x, y, size=100 ) {
  const $blob = $('<div class="blob"></div>');
  // const r = randRange(255);
  // const g = randRange(255);
  // const b = randRange(255);
  // const colour = `rgb(${r}, ${g}, ${b})`;

  const h = hueCounter;
  const s = "50%";
  const l = "50%";

  const colour = `hsl(${h}, ${s}, ${l})`;

  // hueCounter += .5; //hueCounter++;
  //   if (hueCounter > 255 ) {
  //     hueCounter = 0;
  //   }


  hueCounter = (hueCounter + 1) % 255;
  // size = 10 + randRange(100);


  //calculate size based on mouse velocity

  const velocityX = Math.abs(x - lastMouseX);
  const velocityY = Math.abs(y - lastMouseY);

  // console.log(velocityX, velocityY);

// console.log({velocityX: velocityX, velocityY: velocityY});

// console.log({velocityX, velocityY});


  lastMouseX = x;
  lastMouseY = y;

  size = velocityX;

  $blob.css({
    backgroundColor: colour,
    width: size + 'px',
    height: size + 'px',
    top: (y - size/2) + 'px', //center over mouse
    left: (x - size/2) + 'px'
  });
  return $blob;

};

$(document).ready(function(){
  //code which relies on the dom goes here

  $body = $("body");
  console.log( "body:", $body.length);

  $(document).on("mousemove", function(event){
    // console.log("click", event.pageX, event.pageY);

    // "if(event.shiftKey === false)"
    if (!event.shiftKey) {
      return;
    }

    // let xPos = event.pageX;
    // console.log(event);
    //
    // debugger;
    //
    const $newBlob = createBlob(event.pageX, event.pageY, 50);

    $body.append($newBlob);



    if ( Math.random() > 0.5) {


      $newBlob.animate({
        top: "-200px"
      }, randRange(3000), function (){
        $(this).remove(); //remove blobs off the screen
      });

    } else {
    $newBlob.animate({
      top: (window.innerHeight + 300) + "px",
    }, randRange(3000), function (){
      $(this).remove(); //remove blobs off the screen
    });
}

  }); // end of document click handler

}); // end of document ready handler
