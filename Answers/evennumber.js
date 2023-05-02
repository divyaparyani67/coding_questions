//se the for loop to output even numbers from 2 to 10.

function getevenNumber(n) {
  for (let i = n; i <= 10; i++) {
    if (i % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(getevenNumber(9));
