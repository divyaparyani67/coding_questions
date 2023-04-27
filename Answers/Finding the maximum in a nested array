// Q. we have to write a simple function in JavaScript that takes in the following array of Numbers (nested to any level) −

// const arr = [
//    15, 24,
//    [
//        29, 85, 56,
//        [
//            36, 14, 6, 98, 34, 52
//        ],
//        22
//    ], 87, 60
// ];
// and return the greatest number present in the array.


 const arr = [
   34, 65, 67,
      [
         43, 76, 87, 23, 56, 7,
         [
            54, 7, 87, 23, 79, 994, 2
         ],
      54
   ], 54, 4, 2
];
const getGreatest = (arr, greatest = -Infinity) => {
   for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
         return getGreatest(arr[i], greatest);
      };
      if(arr[i] > greatest){
         greatest = arr[i];
      }
   };
   return greatest;
};
console.log(getGreatest(arr));
