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

        alert('Cashout Successful!');
        setBalance(newBalance);

        addHistory('Cash Out', 'opt-2.png',`BDT ${cashoutAmount} to ${agentNumber}.`, new Date())

        document.getElementById('historyBtn').click();
    }
    else {
        
        alert('Invalid pin');
        return;
    }
})