//deposit

function deposit () {
    if( parseFloat(totalAmount.innerText) < 1337) {
    const newDepositTotal = parseFloat(depositTotal.innerText) + parseFloat(depositAmount.value);
    depositTotal.innerText = newDepositTotal;
    const newTotalAmount = parseFloat(totalAmount.innerText) + parseFloat(depositAmount.value);
    totalAmount.innerText = newTotalAmount;
    depositAmount.value = 0;
    }
    else {
        alert('You can not exceed 1337 btc')
    }
}

document.getElementById('btn-deposit').addEventListener('click' , deposit);