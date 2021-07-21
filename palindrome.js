const str = "vivivi";

let len = str.length;

function isItAPalindrome() {
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return "it is not a palindrome";
    }
    return "it is a palindrome";
  }
}
console.log(isItAPalindrome());