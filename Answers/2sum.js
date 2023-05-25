var twoSum = function(nums, target) {

    var hash = {}
    var len = nums.length;

   for (var i = 0; i < nums.length; i++){
           if ( nums[i] in hash)
           return [hash[nums[i]], i] 
           hash[target -nums[i]] = i 
       }
       return [-1, -1]
   
};



// Write a function called `findPairs` that takes an array of integers and a number as input and returns an array of all pairs of integers in the input array whose sum is equal to the input number.

function findPairs(arr, target) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        newArray.push(i);
        newArray.push(j);
      }
    }
  }
  return newArray;
}
const arr = [3, 4, 6, 8, 1, 2, 9];

console.log(findPairs(arr, 6));
