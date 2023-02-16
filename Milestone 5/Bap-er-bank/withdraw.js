//  document.getElementById('btn-withdraw').addEventListener('click',function(){
     
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmount = parseFloat(withdrawField.value);

//     withdrawField.value = '';
    
//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

//     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     withdrawTotalElement.innerText = newWithdrawTotal;

//     const balanceElement = document.getElementById('balance-total');
//     const previousBalanceTotal = parseFloat(balanceElement.innerText);

//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//     balanceElement.innerText = newBalanceTotal;
//  })


document.getElementById('btn-withdraw').addEventListener('click',function(){

   const newWithdrawAmount = getInputFieldValueById('withdraw-field');
   const previousWithdrawTotal = getTextElementValueById('withdraw-total');
   const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   setTextElementValueById('withdraw-total',newWithdrawTotal);

   const previousBalanceTotal = getTextElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   setTextElementValueById('balance-total',newBalanceTotal);
})