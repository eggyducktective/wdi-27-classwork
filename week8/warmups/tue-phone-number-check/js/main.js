// Phone Number Check
// The rules for a valid phone number in this exercise are as follows:
//
// If the phone number has any non-numerals in it, they should be removed/ignored
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
// If the phone number is 11 digits and the first number is not 1, then it is an invalid number
// If the phone number is 10 digits long, it is valid; if not, it is invalid
// Exercise
// Write a Javascript function which takes a phone number as a string and returns the cleaned-up version of the number if it is valid (ie. with non-numerals removed), or if not valid, returns '00000000' (ten zeroes)
// Write a Javascript function which returns a formatted version of the given phone number, ie:
// Input:  11234567890
// Output: (123) 456-7890
// I.e., the first 3 numbers are the area code, and are in brackets;
// then comes a space, then the next 3 numbers (the exchange code),
// followed by a dash, then then the last four numbers.

const phoneNumber = {

  getFormattedNumber: function( input ){

    let cleanNum = this.cleanNumber( input );
    console.log(cleanNum);

    let numberIsValid = this.isValid( cleanNum)
    console.log(numberIsValid);

    return numberIsValid;
  },

  cleanNumber: function( num ){

    let cleaned = [];

    let numerals = '0123456789';

    for( let i = 0; i < num.length; i++ ){
      let currentNum = num[i]

      if( numerals.indexOf( currentNum ) >= 0 ){
        cleaned.push( currentNum )
        // console.log(cleaned);
      }
      // console.log(currentNum);
    }// for

    cleaned = cleaned.join("")
    console.log(cleaned);

    if( cleaned.length === 11 && cleaned[0] === '1'){
      return cleaned.substr(1); // 10
    } else {
      return cleaned;
    }
  },

  isValid: function( cleanedNum ){

    console.log('num.length:', cleanedNum.length);

    if( cleanedNum.length !== 10 ){
      return '0000000000'
    } else {
      // (123) 456-7890
      return `(${cleanedNum.substr(0, 3)}) ${cleanedNum.substr(3, 3)}-${cleanedNum.substr(6)}`
    }
  }

};

const num = '11234567890'
const num2 = '112345s67#89mm'

console.log(phoneNumber.getFormattedNumber(num));
console.log(phoneNumber.getFormattedNumber(num2));
