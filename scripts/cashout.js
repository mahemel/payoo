const cashoutBtn = document.getElementById('withdraw-btn');

cashoutBtn.addEventListener('click', function(){

    const agentNumber = getValueFromInput('agent-phone');
    if(agentNumber.length !== 11) {
        alert('Invalid agent number');
        return;
    }
    
    const currentBalance = getBalance();
    const cashoutAmount = getValueFromInput('amount');

    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0) {
        alert('Invalid amount');
        return;
    }

    const pinNumber = getValueFromInput('pin');

    if(pinNumber === '1234') {

        setBalance(newBalance);
        alert('Cashout Successful!');
    }
    else {
        
        alert('Invalid pin');
        return;
    }
})