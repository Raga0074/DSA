// Documentation credit: Himanshu from two-sum. go
/*
    Problem Statement: Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to the target.
    You may assume that each input would have exactly one solution,
    and you may not use the same element twice.

    Input: An array of integers and a target (int)
    Output: array of indexes of len(2) with the sum of element
    at that index equal to target or nil
*/


/*
Using Brute Force: For every element check for another element if
    it exists in the array such that the sum of both the elements is equals
    to the target
    Time Complexity   : O(n^2)
*/
const twoSumBrute = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/*
    Using Map:= While traversing every element add the element as a key
    and its position as its value in a map Check the required value
    (i.e target - arr[i]) in the map If the map contains the required value
    then we have two elements with the required sum and return the positions.
    Time Complexity : O(n)
*/

const twoSum = (arr, target) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) return [map.get(arr[i]), i];
    map.set(target - arr[i], i);
  }
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(`Two Sum brute: ${twoSumBrute(nums, target)}`);
console.log(`Two sum optimized: ${twoSum(nums, target)}`);


/*
It is more convincing for the sum to be accurate as in the first function 
it describes the for loop as it executes can somebody explain how the time complexity 
is measured in the program, and also I have corrected some grammatical errors in the documentation.
*/
