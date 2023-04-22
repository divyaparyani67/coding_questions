let array = [1, 2, 3, 4, 5, 3, 6, 6, 2];

function removeDuplicate(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removeDuplicate(array));
