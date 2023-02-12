/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
    
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if((nums[i]+nums[j])==target){
//                 let arr2 = [];
//                 arr2[0] = i;
//                 arr2[1] = j;
//                 return arr2;
//             }
//         }
//     }
// };

// const arr = [3,3];
// const n = 6;

// let arr3 = twoSum(arr,n);
// console.log(arr3);

var twoSum = function(nums, target) {
    const map = new Map();

    for(let i=0;i<nums.length;i++){
        let element = target - nums[i];
        if(map.has(element)){
                return [map.get(element),i];
        }

        map.set(nums[i],i);
    }
};

const arr = [3,3];
const n = 6;

let arr3 = twoSum(arr,n);
console.log(arr3);