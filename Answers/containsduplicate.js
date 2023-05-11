
//from a sorted arrauy
var removeDuplicates = function(nums) {

    var len = nums.length
    var last = NaN
    var count = 0

    for( var i = 0; i < nums.length; i++)
   {
        if(nums[i] !== last) {
            nums[count] = nums[i];
            last = nums[i];
            count++
        }
   }
   return count;
    
};


**********************

var containsDuplicate = function(nums) {
 for(let i = 0; i < nums.length; i++){
    for(let j =0; j < i; j++){
          if (nums[i] === nums[j]){
             return  true;            
          }
       }
    }
    return false;
 }
