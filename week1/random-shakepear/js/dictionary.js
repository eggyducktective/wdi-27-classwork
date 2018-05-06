

const dict = {

  definitions: {
  method: "a function which is defined inside an object",
  variadic: "a variadic function accepts a vairable number of arguments",
  scope: "the visibility or lifetime of a variable within a program",
  },

  lookupWords: function(word) {
    if (word in this.definitions) {
    // return `${word}: ${this.definitions[word]}`;
    return {word: word, definition: this.definitions[word]};
  } else {
    return `No entry for ${word}, sorry.`
  }
  },

  getTerms: function() {
    return Object.keys(this.definitions);
  },

  addDefinitions: function(word, definition) {
    if (word in this.definitions) {
      return `${word} is already defined as: ${this.definitions[word]}`;
    } else {
      this.definitions[word] = definition;
      return `Added ${word} : ${definition}`;
    }
  },

  printAllDefinitions: function() {
    let totalDefinitions = 0;
    for (let key in this.definitions) {
      console.log(`${key} : ${this.definitions[key]}`);
      totalDefinitions++;

    }
  console.log(`Total entries: ${totalDefinitions}`);
  },
};
