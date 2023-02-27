const add1 =function(first, second){
    return first + second;
}

// arrow funtion
const add2 = (first,second) => first + second;

const result = add2(10,20);
console.log(result);

//one paremeter
const fiveTimes = num => num*5;

//multiline
const doMath = (x,y,z) => {
    const firstSum = x+y;
    const secondSum = y+z;
    const sum = firstSum*secondSum;
    return sum;
}

const division= (num1, num2) => console.log(num1 /num2)
division(4,2);