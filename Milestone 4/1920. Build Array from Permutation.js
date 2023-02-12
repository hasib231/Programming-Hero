/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let arr = [];
    
    for(let i=0;i<nums.length;i++){
        let value = nums[i];
        arr.push(nums[value]);
    }
    return arr;
};

let arr = [0,2,1,5,3,4];

let result = buildArray(arr);
console.log(result);
