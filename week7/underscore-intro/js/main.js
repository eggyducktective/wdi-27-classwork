console.log('loaded JS');


const bros = ['Groucho', 'Harpo', 'Chico'];

// _(bros).each(function(elem){
//   console.log(elem);
// });

_.each(bros, function(elem, index){
  console.log(index, elem);
});

console.log('--------------------');

const groucho = {
  name: 'Groucho',
  instrument: 'guitar',
  vice: 'cigars'
};


_.each(groucho, function(val, key){
console.log(`${key}: ${val}`);
});

console.log('--------------------');

const nums = [1, 2, 3, 4, 5];

// const squares = _.map(nums, function(elem){
//   return elem * elem;
//   // return Math.random();
// });

// ES6 arrows function
const squares = _.map(nums, e => e * e);

console.log(squares);

// const upcaseBros = _.map(bros, function(bro){
//   // return bro.toUpperCase();
//   return bro + "is a Marx brother/"
//
// });

// ES6
const upcaseBros = _.map( bros, bro => bro.toUpperCase() );
console.log(upcaseBros);

console.log('--------------------');


// const sum = _.reduce(nums, function(runningTotal, num){
//   return runningTotal + num;
// });

// ES6
const sum = _.reduce(nums, (runningTotal, num) => runningTotal + num);

console.log(sum);


const brosCat = _.reduce(bros, (cat, str) => cat + ", " + str);

console.log(brosCat);


let brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44 },
  { name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42 },
  { name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39}
];

// only gives back the first result. like activerecord .find_by, return the first object that matches
const guitarist = _.findWhere(brothers, { instrument: 'guitar'});
console.log('guitarist:', guitarist);

// gives back all results. just like Active record .where
//returns an array of ALL object which match the keys n values
const guitarists = _.where(brothers, { instrument: 'guitar'});

console.log('guitarists:', guitarist);


const over40s = _.filter(brothers, bro => bro.age > 40 );
console.log('over 40 brothers:', over40s);

console.log('--------------------');

brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44 },
  { name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42 },
  { name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39}
];

const ageOrderedBrothers = _.sortBy(brothers, 'age');
console.log(ageOrderedBrothers);



const scores = [1.2, 1.9, 2.4, 2.7, 1.1, 4.3];

const groupedScores = _.groupBy(scores, n => Math.floor(n));
console.log('Grouped scores: ', groupedScores);


const groupedScores1 = _.groupBy(scores, n => n > 2);
console.log(groupedScores1);

console.log('--------------------');

const data = [1, 2, 3, 4, 5];
const allEven = _.every(data, n => n % 2 === 0);
console.log('are they all even?', allEven);

console.log('--------------------');

const anyEven = _.some(data, n => n % 2 === 0);
console.log('are some of them even', anyEven);

console.log('--------------------');

console.log('contains 5?', _.contains(data, 5));

console.log(_.pluck(brothers, 'vice'));

console.log('min age:', _.min(brothers, 'age'));

console.log('max age:', _.max(brothers, 'age'));
