
const loginBtn = document.getElementById('loginBtn');
const users = [
    {
        id: 1,
        name: 'Mahbub Hasan',
        phone: '01675000000',
        pin: '1234'
    },
]

loginBtn.addEventListener('click', function() {
    const phoneNumber = getValueFromInput('phone');
    const pinNumber = getValueFromInput('otp');

    const userDetail = users.find(user => user.phone === phoneNumber && user.pin === pinNumber);
    console.log(userDetail)

    if(userDetail) {
        window.location.assign('home.html')
    } 
    else {
        alert('Your phone number or otp is not correct');
        return;
    }
})