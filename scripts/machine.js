//machine tab
function showOnly(id) {
    const addMoney = document.getElementById('addMoney');
    const cashOut = document.getElementById('cashOut');

    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')

    const selected = document.getElementById(id)
    selected.classList.remove('hidden')

}

//machine -> get input value 
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;

    return value;
}

//machine -> Get Current balance
function getBalance() {
    const balance = document.getElementById('balance');
    const currentBalance = balance.innerText;

    return Number(currentBalance);
}

//machine -> Set balance
function setBalance(value) {
    const balance = document.getElementById('balance');
    balance.innerText = value;
}