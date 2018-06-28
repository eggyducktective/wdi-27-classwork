// var app = app || {}; // this goes to the start of every js file that we write, to make sure it doesn't overwrite variable
//
// app.createSpotlight = () => {
//   const spotlight = new THREE.SpotLight(0xFFFFFF);
//   spotlight.position.set(30, 40, 40); // x, y, z
//
//   //for plane - all shadow stufffffffff
//   // spotlight.castShadow = true;
//   // spotlight.shadow.mapSize.width = 2048;
//   // spotlight.shadow.mapSize.height = 2048;
//
//   return spotlight;
// }
//
// app.createPlane = () => {
//   // plane has a width and a depth, 2d shape Geometry
//   // 120 x 20 plane aka 'runway'
//   const planeGeometry = new THREE.PlaneGeometry(120, 20);
//
//   // what the plane wrapped in
//   const planeMaterial = new THREE.MeshLambertMaterial({
//     color: 0xCFD8DC
//   });
//
//   // combine the geometry (shape) and the material (what the surface looks like) into a mesh, the actual 3D object
//   const plane = new THREE.Mesh( planeGeometry, planeMaterial);
//
//   plane.rotation.x = -0.5 * Math.PI; //MATHSSSSS
//
//   plane.position.x = 15;
//   plane.position.y = 0;
//   plane.position.z = 0;
//
//   plane.receiveShadow = true; // shadows are cast onto this surface
//
//   return plane;
// };
//
// // es6 function parameter destructuring
// // (from the object argument)
// app.createCube = ({ x, y, z, xSize, ySize, zSize, colour}) => {
//   const cubeGeometry = new THREE.BoxGeometry( xSize, ySize, zSize );
//
// // MeshNormal doesnt take any color argument
//   const cubeMaterial = new THREE.MeshLambertMaterial({
//     color: colour,
//     // map: THREE.ImageUtils.loadTexture('img/el.jpg'),
//     // wireframe: true
//   });
//   const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//
//   cube.position.set(x, y, z);
//   // cube.castShadow = true;
//
//   //make cubes rotate differently
//   cube.rotationScale = Math.random();
//
//   return cube;
// };
//
//
// app.createSphere = () => {
//
//   // first arg: radius; next two are triangles
//   const sphereGeometry = new THREE.SphereGeometry( 30, 40, 40);
//   const sphereMaterial = new THREE.MeshLambertMaterial({
//     color:0xFFFFFF,
//     map: THREE.ImageUtils.loadTexture('img/earth.jpg'),
//     side: THREE.DoubleSide
//     // wireframe: true
//   });
//
//   const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//
//   sphere.position.set(0, 0, 0); // to the middle
//   // sphere.castShadow = true;
//
//   return sphere;
// };
//
// app.createParticleSystem = () => {
//
//   const particles = new THREE.Geometry();
//   const dist = app.controls.particleDistritbution;
//
//   for (var i = 0; i < app.controls.numParticles i++) {
//
//     const particle = new THREE.Vector3(
//       THREE.Math.randInt(-dist, dist),
//       THREE.Math.randInt(-dist, dist),
//       THREE.Math.randInt(-dist, dist)
//     );
//     // verticies - points in 3D // an array
//     particles.vertices.push(particle);
//   } // for
//
//   const particleMaterial = new THREE.PointsMaterial({
//     color: 0xFFFFFF,
//     size: 8,
//     map: THREE.ImageUtils.loadTexture('img/el.png'),
//     blending: THREE.NormalBlending,
//     transparent: true,
//     alphaTest: 0.5
//   });
//
//   const particleSystem = new THREE.Points(particles, particleMaterial);
//
//   return particleSystem;
//
// };
//
// app.animate = () => {
//
//   app.stats.update();
//   //sphere requestAnimationFrame
//   // app.step += app.controls.bouncingSpped;
//   // sin gives you some value that always between -1 and 1, gives it a wavy effect, * multiply -> gives it a bigger movement
//
//   // app.sphere.position.y = 6 + ( Math.abs(Math.sin(app.step)) * 10 );
//   // app.sphere.position.x = 20 + ( Math.cos(app.step) * 10 );
//
//   // make cube animate every frame / the values will be changed by the GUI panel
//
//   app.sphere.rotation.y += app.controls.rotationSpeed;
//
//   app.cubes.forEach(cube => {
//     cube.rotation.y += app.controls.rotationSpeed * cube.rotationScale;
//     cube.rotation.x += app.controls.rotationSpeed * cube.rotationScale;
//     cube.rotation.z += app.controls.rotationSpeed * cube.rotationScale;
//
//   })
//   //
//   // app.cube.rotation.x += app.controls.rotationSpeed
//   // app.cube.rotation.y += app.controls.rotationSpeed
//   // app.cube.rotation.z -= app.controls.rotationSpeed
//
//
//   // turn this into a loop, for animation
//   app.renderer.render(app.scene, app.camera);
//
//   requestAnimationFrame(app.animate);
//
// };



var app = app || {};

app.createSpotlight = () => {

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -10, 60, 10 ); // x, y, z
  // spotlight.castShadow = true;
  // spotlight.shadow.mapSize.width = 2048;
  // spotlight.shadow.mapSize.height = 2048;

  return spotlight;
};

app.createPlane = () => {

  // 120 x 20 plane a.k.a. 'runway'
  const planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC
  });

  // combine the geometry (shape) and the material (what the surface looks like) into a mesh, the actual 3D object
  const plane = new THREE.Mesh( planeGeometry, planeMaterial);

  plane.rotation.x = -0.5 * Math.PI; // don't ask, it's because of math(s)
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;

  plane.receiveShadow = true; // shadows are cast onto this surface

  return plane;
};

// app.createCube = () => {
app.createCube =({x, y, z, xSize, ySize, zSize, color}) => {

  const cubeGeometry = new THREE.BoxGeometry( xSize, ySize, zSize );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: color
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set( x, y, z );
  // cube.castShadow = true;

  cube.rotationScale = Math.random()

  return cube;
};

app.createSphere = () => {

  // first arg: radius; next two are num of triangle segments to use
  const sphereGeometry = new THREE.SphereGeometry( 30, 40, 40 );
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    map: THREE.ImageUtils.loadTexture('img/earth.jpg'),
    side: THREE.DoubleSide
    // wireframe: true
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 0, 0, 0 );
  // sphere.castShadow = true;

  return sphere;
};

app.createParticleSystem = () => {

  const particles = new THREE.Geometry()
  const dist = app.controls.particleDistribution

  for( let i = 0; i < app.controls.numParticles; i++ ){
    const particle = new THREE.Vector3(
      THREE.Math.randInt(-dist, dist),
      100,
      // THREE.Math.randInt(-dist, dist),
      THREE.Math.randInt(-dist, dist)
    );

    particle.vx = 0;
    particle.vy = 0;
    particle.vz = 0;

    particles.vertices.push( particle );
  }

  const particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 8,
    map: THREE.ImageUtils.loadTexture('img/snowflake.png'),
    blending: true,
    alphaTest: 0.5
  });

  const particleSystem = new THREE.Points(particles, particleMaterial)

  return particleSystem

}


app.animate = () => {

  app.stats.update();

  // sphere animation
  // app.step += app.controls.bouncingSpeed;
  // app.sphere.position.y = 6 + ( Math.abs(Math.sin(app.step)) * 10);
  // app.sphere.position.x = 20 + ( (Math.cos(app.step)) * 10);
  app.sphere.rotation.y += app.controls.rotationSpeed

  app.cubes.forEach( cube => {
    cube.rotation.y += app.controls.rotationSpeed * cube.rotationScale;
    cube.rotation.x += app.controls.rotationSpeed * cube.rotationScale;
    cube.rotation.z += app.controls.rotationSpeed * cube.rotationScale;
  });


  app.animateParticles(); /// Add this

  // app.cube.rotation.x += app.controls.rotationSpeed;
  // app.cube.rotation.y += app.controls.rotationSpeed;
  // app.cube.rotation.z += app.controls.rotationSpeed;

  app.renderer.render( app.scene, app.camera );
  requestAnimationFrame( app.animate );
};



// add this
app.animateParticles = () => {
  const particles = app.particleSystem.geometry.vertices;

  for (var i = 0; i < particles.length; i++) {
    const particle = particles[i];
    //
    // particle.y -= app.controls.bouncingSpeed;
    //
    // if(particle.y < - app.controls.particleDistribution){
    //   particle.y = app.controls.particleDistribution;
    // }


    const distSquared = (particle.x * particle.x) + (particle.y * particle.y) + (particle.z * particle.z);

    if(distSquared > 6.0) {
      const force = (10.0 / distSquared) * -0.02;

      particle.vx += force * particle.x;
      particle.vy += force * particle.y;
      particle.vz += force * particle.z;
    }

    particle.x += particle.vx * app.controls.velocityScale;
    particle.y += particle.vy * app.controls.velocityScale;
    particle.z += particle.vz * app.controls.velocityScale;


  }
  // app.particleSystem.rotation.y -= app.controls.rotationSpeed;
  app.particleSystem.geometry.verticesNeedUpdate = true;

};
