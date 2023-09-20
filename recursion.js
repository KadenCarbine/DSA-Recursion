/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums[0] === undefined) return 1;

  return(nums[0] * product(nums.slice(1)))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
  if(words.length === idx) return longestWord
  longestWord = Math.max(words[idx].length, longestWord)
  return longest(words, idx + 1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
  if(idx >= str.length) return newStr
  newStr += str[idx]
  return everyOther(str, idx + 2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx
  let rightIdx = str.length - idx - 1
  if (leftIdx >= rightIdx) return true;
  if(str[leftIdx] !== str[rightIdx]) return false

  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if(arr[idx] === val) return idx
  if(idx > arr.length) return -1 
  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
  if(str.length === newStr.length) return newStr
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length) {
  if(leftIdx > rightIdx) return -1

  let middleIdx = Math.floor((leftIdx + rightIdx) / 2)

  if(arr[middleIdx] === val) return middleIdx

  if(arr[middleIdx] > val) {
   return binarySearch(arr, val, leftIdx, middleIdx - 1)
  }
  return binarySearch(arr, val, middleIdx + 1, rightIdx)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
