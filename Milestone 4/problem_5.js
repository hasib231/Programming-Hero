
/*
Problem 5: Convert your gems into diamond

Function description: Take three number then check number validity
and 3 parameter are given or not then return the calculate result
*/
function gemsToDiamond(number1,number2,number3){

    //check number validity and parameter
    if(typeof number1!=='number'||typeof number2!=='number'||typeof number3!=='number'){
        return "Please give all valid number and give 3 parameter properly";
    }

    let totalGem = (number1*21)+(number2*32)+(number3*43);
    if(totalGem >= 2000){
        return totalGem-2000;
    }
    else{
        return totalGem;
    }
};

let result = gemsToDiamond(100,5,1);
console.log(result);