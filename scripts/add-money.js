const addMoneyBtn = document.getElementById('add-money-btn');

addMoneyBtn.addEventListener('click', function() {
    const getBank = getValueFromInput('add-money-bank');

    if(getBank === '') {
        alert('Please select a bank');
        return;
    } 

    const getAccountNumber = getValueFromInput('add-money-number');
    if(getAccountNumber.length !== 11) {
        alert('Please enter valid account number');
        return;
    }

    const getAmountNumber = getValueFromInput('add-money-amount');
    const currentBalance = getBalance();
    
    const newBalance = currentBalance + Number(getAmountNumber);
    
    if( getAmountNumber.length === 0 || getAmountNumber < 1 ) {
        alert('Please enter valid amount');
        return;
    } 

    const getPin = getValueFromInput('add-money-pin');
    if(getPin === '1234') {
        alert(`BDT${getAmountNumber} added to your account 
            from ${getBank} 
            at ${new Date()}
            Your Current Balance is ${newBalance}`)
        setBalance(newBalance);
    }
    else {
        alert('Invalid pin')
        return;
    }
})