// Allergies Warmup
// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).
//
// The list of items (and their value) that were tested are:
//
// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.
//
// Now, given just that score of 34, your program should be able to say:
//
// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.

const allergens = {
  scorecard: {
    1: 'eggs',
    2: 'peanuts',
    4: 'shellfish',
    8: 'strawberries',
    16: 'tomatoes',
    32: 'chocolate',
    64: 'pollen',
    128: 'cats'
  },

  getKeys: function(){
    const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
    // console.log(Object.keys(this.scorecard).map(Number).reverse());

    return allergyKeys;
  },

  getList: function(){
    const keys = this.getKeys();
    let allergies = [];

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];

      console.log (`key: ${key}, score: ${score}`);

      if (key <= score) {
        allergies.push(this.scorecard[key])

        console.log(score);
        score -= key
      }
    } // for loop
    return allergies

  },

  diagnosis: function(score) {
    let allergyList = this.getList(score);
    console.log(allergyList);

    if (allergyList.length > 0) {
      console.log(`You are allergic to: ${allergyList.join(', ')}`);
    }
  }

};

allergens.diagnosis(34)
