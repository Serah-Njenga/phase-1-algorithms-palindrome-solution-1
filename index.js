function isPalindrome(str) {
  // convert the string to uppercase
  str = str.toUpperCase();

  let start = 0;
  let end = str.length -1;
   while(start <= end) {
    if(str[start] != str[end]){
      return false ;
    }
    start++;
    end--;
  }

  return true;
}

/* 
  Add your pseudocode here
  decremengt end 
  increment start
  if elements do not match return false 
  check if last element != element at beginning
  loop through the string
*/

/*
  Add written explanation of your solution here
  A palindrome is a word or phrase that reads the same backward and forward. When palindromes are the length of a sentence, they ignore capitalization, punctuation, and word boundaries.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
