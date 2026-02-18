
const loginBtn = document.getElementById('loginBtn');
const users = [
    {
        id: 1,
        name: 'Mahbub Hasan',
        phone: '01675252034',
        pin: '1234'
    },
    {
        id: 2,
        name: 'Fahmin Niaz',
        phone: '01976848086',
        pin: '2345'
    },
    {
        id: 3,
        name: 'Humaeysha Tehrim',
        phone: '01968734477',
        pin: '3456'
    },
]

loginBtn.addEventListener('click', function() {
    const phone = document.getElementById('phone');
    const pin = document.getElementById('otp');

    const phoneNumber = phone.value;
    const pinNumber = pin.value;

    const userDetail = users.find(user => user.phone === phoneNumber && user.pin === pinNumber);
    console.log(userDetail)

    if(userDetail) {
        window.location.assign('/home.html?user=' + userDetail.name)
    } 
    else {
        alert('Your phone number or otp is not correct');
        return;
    }
})