// 7th kyu - Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// function getCount(str) {
//   const count = str.match(/[aeiou]/gi);
//   if (count === null) {
//     return 0
//   } else {
//     return count.length;
//   }  
// }


//refactor

function getCount(str){
  return (str.match(/[aeiou]/ig)||[]).length;
}