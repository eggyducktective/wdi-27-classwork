console.log('EGGGGGS');

var particles = [];

var app = {};

app.controls = {
  velocityScale: 0.1,
  gravity: 0.0,
  lifeDecrement: 0.0
};

window.onload = function(){
  app.gui = new dat.GUI();
  app.gui.add(app.controls, 'velocityScale', -1, 1);
  app.gui.add(app.controls, 'gravity', -1, 1);
  app.gui.add(app.controls, 'lifeDecrement', 0, 0.1);
};


var setup = function(){

  createCanvas(windowWidth, windowHeight); // same as window.innerWidth, etc.
  background(0);

  colorMode(HSB, 255);

  // fill(255, 0, 0); // set the fill color for shapes
  // stroke(0, 255, 0); //use for stuff like a line
  noStroke();
  //       x,  y, width height
  // ellipse( 50, 50, 100, 100 ); // A CIRCLE
  // line(100, 100, 800, 800); // a line

  // rect(100, 100, 500, 500);

  // triangle(800, 900, 700, 700, 800, 900);

};

var draw = function(){
  // if(!keyIsDown(CONTROL)){

  background(0);
  // }

  // const x = random(0, windowWidth);
  // const y = random(0, windowHeight);
  const x = mouseX;
  const y = mouseY;

  // const sizeX = random(10, 100);
  // const sizeY = random(10, 100);

  const vx = mouseX - pwinMouseX; // velocity of x
  const vy = mouseY - pwinMouseY;

  // console.log({vx, vy});

  const mouseVel = Math.sqrt(vx*vx + vy*vy); // velocity, physics, maths!

  if(mouseIsPressed || keyIsDown(SHIFT)) {
      const size = mouseVel;
  // const size = random(10, 100);
  // const size = 40;
      // const hue = map(mouseX, 0, windowWidth, 0, 255);
      const hue = frameCount % 255;

      particles.push({x, y, vx, vy, size, hue, mouseVel, life: 1.0});
  }

  // fill(random(0, 255), random(0, 255), random(0, 255));

  updateParticles();

  // fill(frameCount % 255, 255, 255); //hsb hue saturation brightness / turn on colormode
  // ellipse(windowWidth/2, windowHeight/2, 100, 100); make circle appears in the middle
  // ellipse(mouseX, mouseY, size, size);
  // }
};

var updateParticles = function(){
  const outputParticles = [];
  for (var i = 0; i < particles.length; i++) {
    const p = particles[i];

    p.x += p.vx * app.controls.velocityScale; // update position
    p.y += p.vy * app.controls.velocityScale;

    p.life -= app.controls.lifeDecrement;
    if( p.life > 0 ){
      outputParticles.push(p);
    }

    if( p.x >= windowWidth || p.x <= 0 ){
      p.vx *= -1; // flip the velocity, ie change the sign from pos->neg or //neg -> pos, -1 give the exact same size in oposite direction
    }
    if( p.y >= windowHeight || p.y <= 0 ){
      p.vy *= -1;
    }

    p.vy += app.controls.gravity;

    fill(p.hue, 255, 255, p.life * 255);
    ellipse(p.x, p.y, p.size, p.size);
  }
  particles = outputParticles;
};

var keyPressed = function(event){
  switch(event.keyCode){
    case 32: //space bar pressed, clear the screen
      background(0);
      break;
  }
};
