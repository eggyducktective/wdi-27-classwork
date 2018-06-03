// # Collections!
//
// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
// ```js
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// - Iterate through ` numbers ` and log each number to the console
_.each(numbers, function(element){
  console.log(element);
});

_.each(numbers, n => console.log(n));


console.log("--------------------");
// - Iterate through ` numbers ` and multiply each one of them by 5

const multiply = _.map(numbers, function(e){
  return e * 5;

});
console.log(multiply);

const byFive = _.map(numbers, n => n * 5);
console.log(byFive)


console.log("--------------------");
// - Iterate through ` numbers ` and reduce it by adding them together


const sum = _.reduce(numbers, (runningTotal, num) => runningTotal + num);
console.log(sum);

const reduced = _.reduce(numbers, (sum, n) => sum + n);
console.log(reduced);


var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// - Get an array of all of the people in ` people ` that have the username "E"

const eUsername = _.where(people, {username: 'E'});
console.log(eUsername);

console.log("--------------------");

// - Find the first object in ` people ` that has the id of 3

const id3 = _.findWhere(people, {id: 3});
console.log(id3);

console.log("--------------------");
// - Find the first person who has an age of less than 50


const youngPerson = _.find(people, p => p.age < 50);
console.log(youngPerson);

console.log("--------------------");
// - Get an array of all of the people with an age of over 60

const over60 = _.filter(people, p => p.age > 60);
console.log('People over 60s are: ', over60);

console.log("--------------------");
// - Remove all of the people with an age less than 40

//longer way, get people over 40 instead of removing
// const under40s = _.filter(people, p => p.age >= 40);
// console.log('People under 40s are: ', under40s);

const under40s = _.reject(people, p => p.age < 40);
console.log(under40s);

// You have the [documentation!](https://underscorejs.org/)
