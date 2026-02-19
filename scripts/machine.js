//machine tab
document.getElementById('actionBtns')
    .addEventListener('click', function(event) {

        const btn = event.target.closest('.btn');
        if(!btn || !this.contains(btn)) {
            return;
        }

        const tabBtns = document.querySelectorAll('#actionBtns button[data-target]');
        for(let tab of tabBtns) tab.classList.remove('active');

        const tabs = document.querySelectorAll('.tabs');
        for(let tab of tabs) tab.classList.add('hidden');

        const targetEl = btn.dataset.target;
        document.getElementById(targetEl).classList.remove('hidden')
        btn.classList.add('active')
              
    });

//machine - add history

function addHistory(text, img, detail, date) {
    const now = new Date();
    const inputDate = new Date(date);

    const isToday = now.toDateString() === inputDate.toDateString();

    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    const timeLg = `${formattedHours}:${minutes} ${ampm}`;
    const time = isToday ? `Today ${timeLg}` : inputDate.toLocaleDateString() + ' ' + timeLg;

    const li = document.createElement('li');
    li.classList.add('list-row', 'bg-base-100', 'rounded-box', 'items-center');
    
    li.innerHTML = `
        <div><img class="size-6 rounded-box" src="assets/${img}"/></div>
        <div>
            <div>${text}</div>
            <div class="text-xs uppercase font-normal opacity-60">${detail}<br>
            ${time}</div>
        </div>
    `;

    document.getElementById('history').appendChild(li) 
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