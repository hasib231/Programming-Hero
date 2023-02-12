/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(nums);
};

let arr = [1,2,1];

let arr2 = getConcatenation(arr);
console.log(arr2);