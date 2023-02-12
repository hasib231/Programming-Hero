/*
Problem 1: Let’s play a mind game

Function description: Take a number then check number validity 
and return the calculate result
*/
function mindGame(value){

    //check positive number and number validity
    if(typeof value !== 'number' || value<0){
        return "Please give a positive number";
    }

    return ((value*3+10)/2)-5;
};

let result = mindGame(5);
console.log(result);