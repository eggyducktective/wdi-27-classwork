// // The Fortune Teller
// // Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.



const tellFortune = function(jobTitle, geoLocation, partnersName, numberOfKids) {
  return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfKids} kids`;
};

example1 = tellFortune("nurse", "america", "mick", 100);
example2 = tellFortune("policeman", "australia", "donald", 2);
example3 = tellFortune("teacher", "belgium", "natalie", 1);
//console.log(tellFortune(...............))
console.log(example1);
console.log(example2);
console.log(example3);

/*
The Age Calculator

Forgot how old you are? Calculate it!

Write a function named calculateAge that:

takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

console.log('Age Calculator');

const calculateAge = function( birthYear ){
  const currentYear = new Date().getFullYear();
  const ageAfterBirthday = currentYear - birthYear;
  const ageBeforeBirthday = ageAfterBirthday - 1;
  return `You are either ${ageBeforeBirthday} or ${ageAfterBirthday} years old.`;
};


console.log( calculateAge(1960) );

// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


console.log('Lifetime Supply Calculator');

const calculateSupply = function( currentAge, amountPerDay ){
  const maximumAge = 90;
  const yearsRemaining = maximumAge - currentAge;
  const amountPerYear  = amountPerDay * 365.25;

  const totalSnacksRequired = yearsRemaining * amountPerYear;

  return totalSnacksRequired;
};


const totalSnacks = calculateSupply( 80, 4 );

console.log(`You will need ${totalSnacks} to last you.`);

// The Geometrizer
//
// Create 2 functions that calculate properties of a circle.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

const calcCircumference = function( radius ){
  return 2 * Math.PI * radius;
}

const calcArea = function( radius ){
  return Math.PI * radius**2;
};

console.log(`The circumference is ${ calcCircumference(72).toFixed(2) }.
The area is ${ calcArea(72).toFixed(2) }.`);

// The Temperature Converter
//
// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
//
// Convert it to celsius and output "NN°F is NN°C."


console.log('Temperature Converter');

const celsiusToFahrenheit = function( temp ){
  return (temp * 1.8) + 32;
};

const fahrenheitToCelsius = function( temp ){
  return (temp - 32) / 1.8;
};

console.log(`${27}˚C is ${ celsiusToFahrenheit(27).toFixed(2) }˚F.`);
console.log(`${80.6}˚F is ${ fahrenheitToCelsius(80.6).toFixed(2) }˚C.`);
