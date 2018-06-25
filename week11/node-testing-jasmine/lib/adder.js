// testing with node --inspect-brk
// const doSomething = (val) => {
//
//   debugger;
//
//   const obj = {
//     a: 1,
//     b: val
//   };
//   console.log('obj', obj);
//
//   obj.a += 10
//   return obj.a;
// };
//
// doSomething('hello');
// doSomething('hello again');


// module.exports = (a, b) => {
//   // ????
//   // console.log({a, b});
//   return a + b;
// };

// an object that has several functions
module.exports = {
  // add: function(a, b){}
  add(a, b){
    if( isNaN(a) || isNaN(b) ){
      // return 'Invalid Input';
      throw new Error('Invalid Input');
    }
    const sum = a + b;
    const checked = this.check(a, b, sum);
    if(checked) {
      return sum;
    } else {
      return "Error, did not pass check"
    }
  },

  check(first, second, expectedSum){
    return first + second === expectedSum;
  }

};

// module.exports = adder;
// const add = require('./lib/adder');

// ES6 import
// export default adder;
// import whatever from './file'
