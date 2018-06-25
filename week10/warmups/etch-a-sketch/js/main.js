// Create a canvas element
// On the canvas element, draw a filled rectangle in the center. See an example here.
// Add an event listener on keypresses, if the key is "W", move the square vertically by the square's height, if it is "A", move one square to the left, "S", down and lastly "D", is to the right. After each move, draw the new position as a new rectangle.
// Bonus
// The square should never be able to venture beyond the edges of the canvas.
// Add a reset button that wipes the canvas.
// Tips
// The top left corner of a canvas is 0 for both axises, counting up to the maximum height (y axis), and maximum width (x axis) of the canvas. Giving your canvas some dimensions and a border will make it easier to see and control: <canvas width="300" height="300" style="border: 1px solid black"></canvas>.
//
// Looking at the example provided in the link above: ctx.fillRect(20,20,150,100); -- A rectangle takes the following parameters: ( x, y, number of pixels from X, number of pixels from Y). That line of code draws a box 20px down and in from the top left corner of the canvas, 150px wide, and 100px high.


// Step 1: find the canvas element
// var canvas = document.getElementById("myCanvas");

// Step 2: Create a Drawing Object
// var ctx = c.getContext("2d");

// Step 3: Draw on the canvas
// ctx.fillStyle = '#FF0000';


let canvas, context;
const draw = {

  pixel : {
    x: 150,
    y: 150,
    size: 10,
    hue: 200
  },

  render: function(){
    console.log(context);
    context.fillStyle = 'rgb(#000)'
    context.fillRect(draw.pixel.x, draw.pixel.y, draw.pixel.size, draw.pixel.size)
  }, // render

  move: function(e){
    console.log(e.key);


    if(e.key === 'w' && this.pixel.y - this.pixel.size >= 0 ){
      this.pixel.y -= this.pixel.size;
    } else if(e.key === 'a' && this.pixel.x - this.pixel.size >= 0){
      this.pixel.x -= this.pixel.size;
    } else if(e.key === 's' && this.pixel.y + this.pixel.size < canvas.height)
  } // move
}


window.onload = function() {
  canvas = document.querySelector('canvas');
  context = canvas.getContext('2d');

  draw.render();
}

window.onkeypress = function(event){
  draw.move(event)
}
