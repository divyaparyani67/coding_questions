// Creating a function that return an array  array.reduce method
// whose items are less than num
let returnLarger = (arr, num) => {
  return arr.reduce((acc, curr)=>{  
    if(curr > num){
      return acc.concat(curr)  // Concatenate the acc with arr
    }else{
      return acc
    }
  }, [])   // Initialize the accumulator with an empty array
}
  
  
console.log(returnLarger( [65, 16, 0, 6, 64, 1, 68], 16))
console.log(returnLarger([6, 46, 54, 6, 56, 54, 65, 4, 65], 50))


/// for loop mehtod

let returnLarger1 = (arr, num) => {
  let newArr = []
     
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > num){
      newArr.push(arr[i])
    }
  }
    
  return newArr
}
  
  
console.log(returnLarger1( [65, 16, 0, 6, 64, 1, 68], 16))
console.log(returnLarger1([6, 46, 54, 6, 56, 54, 65, 4, 65], 50))
