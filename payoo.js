document.getElementById('btn-login').addEventListener('click', function(event){
event.preventDefault();
const numberInput = getInputFieldValueById('phone-number');
const pinInput = getInputFieldValueById('pin-number');

// verify
if(numberInput === 5 && pinInput === 1234){
    window.location.href = './home.html'
}
})