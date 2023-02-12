
/*
Problem 4: Finding Bad data

Function description: Take a array then check array validity 
and return the counting of negative numbers
*/

function findingBadData(numbers){

    //check array validity
    if(Array.isArray(numbers) == false){
        return "Please give an array";
    }

    let count = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] < 0){
            count++;
        }
    }
    return count;
};


let arr = [-4, -9, -5, -33, -55];
let result = findingBadData(arr);
console.log(result);