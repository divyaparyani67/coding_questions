function palindrome(string) {
  let len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "it is not a palindrome";
    }
  }
  return " it is a palindrome";
}

console.log(palindrome("madam"));
