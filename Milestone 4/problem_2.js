
/*
Problem 2: Finding even or odd

Function description: Take a string then check string validity and 
return the string length is even or odd
*/
function evenOdd(value){

    //check string validity
    if(typeof value !== 'string'){
        return "Please give a string";
    }

    let stringLength = value.length;
    if(stringLength%2 === 0){
        return "even";
    }
    else{
        return "odd";
    }

};

let result = evenOdd('chatgpta');
console.log(result);
