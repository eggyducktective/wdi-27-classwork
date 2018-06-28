const nums = [3, 2, 4, 5, 7, 10, 13, 1, 6];


const bubbleSearch = arr => {
  arr = [...arr]; // es6 make a copy of the original argument, which is a reference
  // so we don't mutate it.
  let end = arr.length -1

  while (end > 0) {
    for (let i = 0; i < end; i++) {
      if( arr[i] > arr[i+1] ){
        let largerValue = arr[i];
        arr[i] = arr[i+1]; // swap the array values, via a temp variable
        arr[i+1] =  largerValue;
      }
    } // end for
    end--;
  }
  return arr;
}; // end bubbleSearch


console.log(bubbleSearch(nums));
