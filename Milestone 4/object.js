const shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    start : function(){
        console.log("car has started");
    },
}
shoppingCart['mobile'] = 4;
console.log(shoppingCart);
console.log(shoppingCart.sunglass);
var penCount = shoppingCart.pen; 
var penCount2 = shoppingCart['pen'];

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName,propertyValue);

//set property value
shoppingCart.mouse =15;
shoppingCart['mouse'] =29;
shoppingCart[propertyName] =31;
console.log(shoppingCart[propertyName]);

//get keys and values
var keys = Object.keys(shoppingCart);
console.log(properties);
var values = Object.values(shoppingCart);
console.log(propertyValues);

for(var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    //console.log(propertyName,propertyValue);
}

//for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    //console.log(propertyName, value);
}

