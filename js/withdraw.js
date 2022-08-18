//withdraw

function withdraw () {
    if( parseFloat(totalAmount.innerText) > 0) {
    const newWithdrawTotal = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount.value);
    withdrawTotal.innerText = newWithdrawTotal;
    const newTotalAmount = parseFloat(totalAmount.innerText) - parseFloat(withdrawAmount.value);
    totalAmount.innerText = newTotalAmount;
    withdrawAmount.value = 0;
    }
    else {
        alert('You can not go bellow 0 btc')
    }
}

document.getElementById('btn-withdraw').addEventListener('click' , withdraw);