// # Exercises: Objects
//
// ## The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// - Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// - Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// - Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
//

const readingList = [
  {title: "The girl on the train", author: "Paula Hawkins", alreadyRead: true},
  {title: "Gone girl", author: "Gillian Flynn", alreadyRead: true},
  {title: "Where rainbows end", author: "Cecelia Ahern", alreadyRead: true},
  {title: "Tony and Susan", author: "Austin Wright", alreadyRead: false}
];

for (var i = 0; i < readingList.length; i++) {

  if (readingList[i].alreadyRead) {
    console.log(`You already read ${readingList[i].title} by ${readingList[i].author}`);
} else {
    console.log(`You still need to read ${readingList[i].title} by ${readingList[i].author}`);
  }
  // console.log(`${readingList[i].title} by ${readingList[i].author}`);
  // const currentBook = readingList[i] store in a variable
};








// ## The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// ```
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
// ```


// const myRecipe = {
//   title: "chicken fried rice",
//   serving: 2,
//   ingredients: ["rice", "chicken", "fish sauce"]
// };
//
// for (let key in myRecipe) {
//   console.log(`${key}: ${myRecipe[key]}`);
//   for (let i = 0; i < myRecipe.ingredients.length; i++) {
//     console.log [i];
//   }
// }


const recipe = {
  title: "butterscotch",
  serving: 3,
  ingredients: ["butter", "scotch"]
};


console.log(recipe.title);
console.log(`serves: ${recipe.servings}`);
console.log('ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}



//  The Movie Database
// It's like IMDB, but much much smaller!
//
//  - Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
//  - Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
//    // - Maybe the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method will be helpful here




const FavoriteMovie = {
  title: "Thor Ragnarok",
  duration: 120,
  stars: ["Chris Hemsworth", "Tom Hiddleson", "Cate Blanchet"],
  movieInfo: function() {
  console.log(`${this.title} lasts for ${this.duration} mins.`);
    console.log(`Stars: ${this.stars.join(', ')}`);
 } // end of method
};

FavoriteMovie.movieInfo();


// const movieInfo = function () {
//     console.log(`${movie.title} lasts for ${movie.duration} mins.`);
//     console.log(`Stars: ${movie.stars.join(', ')}`);
//   };
