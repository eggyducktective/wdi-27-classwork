// # Exercises: Arrays
//
// ## Your top choices
//
// Create an array to hold your top five choices of something (colors, presidents, whatever).
//If you choose movies, the right top choice is "Satantango".
//


const myChoices = ["tattoos", "bags", "food", "pina colada", "makeup" ];
const mySuffix = ["first", "second", "third", "forth", "fifth"];

for (let i = 0; i < myChoices.length; i++) {
    console.log(`my ${mySuffix[i]} choice is ${myChoices[i]}`);
  // console.log(`my #${i + 1} choice is ${myChoices[i]}`);
}

// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - **Bonus:** Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
//picking the right suffix for the number based on what it is.
