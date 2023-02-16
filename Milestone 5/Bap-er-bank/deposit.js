// document.getElementById('btn-deposit').addEventListener('click',function(){

//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmount = parseFloat(depositField.value);

//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotal = parseFloat(depositTotalElement.innerText);

//     const newDepositTotal = previousDepositTotal + newDepositAmount;
//     depositTotalElement.innerText = newDepositTotal;

//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalAmount = parseFloat(balanceTotalElement.innerText);

//     const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
//     balanceTotalElement.innerText = newBalanceTotal;

//     depositField.value = '';
// })


document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');  
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total',newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})