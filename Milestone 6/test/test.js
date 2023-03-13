function multiplyOne(number1,number2){
    const result = 0.5*number1*number2;
    return result.toFixed(2);
}


function multiplyTwo(number1,number2){
    const result = number1*number2;
    return result.toFixed(2);
}

function multiplyThree(number1,number2){
    const result = 3.14*number1*number2;
    return result.toFixed(2);
}


// serial Declaration

let serial = 0;

// first card ----------------

document.getElementById('first-card-btn').addEventListener('click', function () {
    // serial Number
    serial += 1;

    // get the data 

    const cardBaseInputStr = document.getElementById('t-base-field').value;
    const cardBaseInput = parseFloat(cardBaseInputStr);

    const cardHeightInputStr = document.getElementById('t-height-field').value;
    const cardHeightInput = parseFloat(cardHeightInputStr);

    const firstTitle = document.getElementById('first-title').innerText;


    // calculation

    const firstCal = multiplyOne(cardBaseInput,cardHeightInput);

    // show the data 

    showData(firstTitle, firstCal);
})

// second card -------------------------------

document.getElementById('second-card-btn').addEventListener('click', function () {

    // serial Number

    serial += 1;

    // get the data 

    const cardBaseInputStr = document.getElementById('rec-w-field').value;
    const cardBaseInput = parseFloat(cardBaseInputStr);

    const cardHeightInputStr = document.getElementById('rec-l-field').value;
    const cardHeightInput = parseFloat(cardHeightInputStr);

    const firstTitle = document.getElementById('second-title').innerText;

    // calculation

    const firstCal = multiplyTwo(cardBaseInput,cardHeightInput);
    

    // show the data 

    showData(firstTitle, firstCal);
})

// third card ---------------------

document.getElementById('third-card-btn').addEventListener('click', function(){

    // serial Number

    serial += 1;

    // get the data 

    const cardBaseInputStr = document.getElementById('para-b').innerText;
    const cardBaseInput = parseFloat(cardBaseInputStr);

    const cardHeightInputStr = document.getElementById('para-h').innerText;
    const cardHeightInput = parseFloat(cardHeightInputStr);
    
    const firstTitle = document.getElementById('third-title').innerText;

    // calculation

    const firstCal = multiplyTwo(cardBaseInput,cardHeightInput);
    

    // show the data 

    showData(firstTitle, firstCal);
})

// fourth card---------------------------

document.getElementById('fourth-card-btn').addEventListener('click', function () {
    // serial Number
    serial += 1;

    // get the data 

    const cardBaseInputStr = document.getElementById('rhom-d1').innerText;
    const cardBaseInput = parseFloat(cardBaseInputStr);

    const cardHeightInputStr = document.getElementById('rhom-d2').innerText;
    const cardHeightInput = parseFloat(cardHeightInputStr);

    const firstTitle = document.getElementById('fourth-title').innerText;


    // calculation

    const firstCal = multiplyOne(cardBaseInput,cardHeightInput);

    // show the data 

    showData(firstTitle, firstCal);
})

// fifth card---------------------------

document.getElementById('fifth-card-btn').addEventListener('click', function () {
    // serial Number
    serial += 1;

    // get the data 

    const cardBaseInputStr = document.getElementById('Penta-p').innerText;
    const cardBaseInput = parseFloat(cardBaseInputStr);

    const cardHeightInputStr = document.getElementById('Penta-b').innerText;
    const cardHeightInput = parseFloat(cardHeightInputStr);

    const firstTitle = document.getElementById('fifth-title').innerText;


    // calculation

    const firstCal = multiplyOne(cardBaseInput,cardHeightInput);

    // show the data 

    showData(firstTitle, firstCal);
})

// sixth card---------------------------

document.getElementById('sixth-card-btn').addEventListener('click', function () {
    // serial Number
    serial += 1;

    // get the data 

    const cardBaseInputStr = document.getElementById('ellipse-a').innerText;
    const cardBaseInput = parseFloat(cardBaseInputStr);

    const cardHeightInputStr = document.getElementById('ellipse-b').innerText;
    const cardHeightInput = parseFloat(cardHeightInputStr);

    const firstTitle = document.getElementById('sixth-title').innerText;


    // calculation

    const firstCal = multiplyThree(cardBaseInput,cardHeightInput);

    // show the data 

    showData(firstTitle, firstCal);
})


// declaring functions

function showData(firstTitle, firstCal) {

    const container = document.getElementById('table-section');
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <th>${serial}</th>
    <td>${firstTitle}</td>
    <td>${firstCal} cm<sup>2</sup></td>
    <td>
    <button class="btn btn-primary lowercase inline">convert to m<sup>2</sup>
    </button>
    </td>
    `;

    container.appendChild(tr);
}


// common function



// function getMultiply(){
//     const firstCal = cardBaseInput * cardHeightInput;

//     return firstCal;
// }


// function getData (){
//     const cardBaseInputStr = document.getElementById('t-base-field').value;
//     const cardBaseInput = parseFloat(cardBaseInputStr);

//     const cardHeightInputStr = document.getElementById('t-height-field').value;
//     const cardHeightInput = parseFloat(cardHeightInputStr);

//     const firstTitle = document.getElementById('first-title').innerText;

//     return cardBaseInput, cardHeightInput, firstTitle;
// }

