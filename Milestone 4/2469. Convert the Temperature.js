/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.80 + 32.00;
    let arr = [];
    arr.push(kelvin.toFixed(5));
    arr.push(fahrenheit.toFixed(5));
    return arr;
};

let result = convertTemperature(36.50);
console.log(result);