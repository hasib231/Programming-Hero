
/*
Problem 3: Is Less or Greater than seven

Function description: Take a number then check number validity 
and return the calculate result
*/
function isLGSeven(value){

    //check number validity
    if(typeof value !== 'number'){
        return "Please give a number";
    }

    if(value-7 < 7){
        return value-7;
    }
    else{
        return value*2;
    }
};

let result = isLGSeven(15);
console.log(result);