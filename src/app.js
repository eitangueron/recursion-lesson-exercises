/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(baseNum, finalNum=1) {
  if(!baseNum){ return finalNum}
  finalNum *= baseNum
  baseNum--
  return findFactorial(baseNum,finalNum)
}

// console.log(findFactorial(5))
// console.log(findFactorial(8))

//Exercise 2
const reverseString = function(str, finalStr='') {
    if(!str){return finalStr}
    finalStr += str[str.length -1]
    const smallStr = str.slice(0,str.length -1)
    return reverseString(smallStr, finalStr)
}

// console.log(reverseString('hello'))

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
    if(!arr1.length){ return arr1,arr2}
    arr2.push(arr1[0])
    arr1.splice(0,1)
    return swap(arr1, arr2)
}
swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]

const swapStacks = function(stack1, stack2) {
    if(stack1.isEmpty()){return stack1, stack2}
    const moveItem = stack1.pop()
    stack2 = [moveItem, ...stack2]        ///this order?
    return swapStacks(stack1, stack2)
}

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }