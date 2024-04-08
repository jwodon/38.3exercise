/** product: calculate the product of an array of numbers. */

function product(nums) {
    if (nums.length === 0) return 1;
    return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
    if (words.length === 0) return 0;
    const firstWordLength = words[0].length;
    const restLength = longest(words.slice(1));
    return Math.max(firstWordLength, restLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0) {
    if (idx >= str.length) return '';
    return str[idx] + everyOther(str, idx + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, str, idx = 0) {
    if (idx >= arr.length) return -1;
    if (arr[idx] === str) return idx;
    return findIndex(arr, str, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    if (str.length <= 1) return str;
    return str[str.length - 1] + revString(str.substring(0, str.length - 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    const result = [];

    for (const key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            result.push(...gatherStrings(obj[key]));
        }
    }
    return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    revString,
    gatherStrings,
    binarySearch,
};
