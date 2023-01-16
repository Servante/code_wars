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


// 8th kyu - Even or evenOrOdd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// function evenOrOdd(input) {
//   if (input % 2 == 0) {
//       return "Even"
//   } else {
//       return "Odd"
//   }
// }

// refactor

function evenOrOdd(input) {
  return number % 2 ? "Odd" : "Even"
 }



// 7th kyu - Disemvowel Trolls


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

