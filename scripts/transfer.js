
document.getElementById('transfer-btn')
    .addEventListener('click', function() {
        const userAccount = getValueFromInput('transfer-account-number');
        if(userAccount.length !== 11) {
            alert('Please enter valid account number');
            return;
        }

        const transferAmount = getValueFromInput('transfer-amount');
        const newBalance = getBalance() - Number(transferAmount);

        if(transferAmount < 1 || transferAmount.length === 0 || newBalance < 0) {
            alert('Please enter valid amount');
            return;
        } 

        const transferPin = getValueFromInput('transfer-pin');

        if(transferPin === '1234') {
            alert('Transfer Money Successful!');

            setBalance(newBalance);
            addHistory('Send Money', 'opt-3.png', `BDT ${transferAmount} to ${userAccount}.`, new Date())

            document.getElementById('historyBtn').click();
        } else {
            alert('Invalid Pin');
            return;
        }
    })