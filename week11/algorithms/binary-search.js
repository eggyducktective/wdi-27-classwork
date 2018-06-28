

// binarySearch(a, needle)
// Find the middle part of the array

// RETURN middle if its value is the needle

// if a[middle] is less than needle - The new array is [ middle + 1 ... end]

// else new array is [start.. middle -1]

//repeat until ther eis only 1 item left


const nums = [1, 3, 7, 15, 23, 24, 40, 50, 51, 12];

const binarySearch = (arr, needle) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  let iterations = 0;

  //continue as long as start and end have not 'crossed' each other
  // ie there is still an array left to look into
  while( start <= end ) {
    iterations++;

    const range = end - start;
    console.log(`Range: ${range}`);
    middle = Math.round(start + range / 2); // round up to the nearest whole number
    console.log(`Middle: ${middle}`);


    if( arr[middle] > needle ){
      end = middle - 1;

    } else if( arr[middle] < needle) {
      start = middle + 1;

    } else {
      // it's the value we're looking for;
      console.log(`Iterations: ${iterations}`);
      return middle
    }
  } // end while

  return -1; // no match, needle in the array

}; //end binarySearch


console.log(binarySearch(nums, 24));
