// add an event handler on the cash out button

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // get the amount and pin number
    const cashOutInput = getInputFieldValueById('cash-out-input');
    const pinNumberInput = getInputFieldValueById('cash-out-pin');

    // validation
    if(isNaN(cashOutInput)){
        alert('Your are failed to withdraw money! Please try again');
        return;
    }
    // verify the pin number and add condition
    if(pinNumberInput === 1234){
        const balance = getTextFieldValueById('account-balance');

        // validation
        if(cashOutInput > balance){
            alert('Your have insufficient balance for withdraw');
            return;
        }
        const newBalance = balance - cashOutInput;
        // add the new balance in dom
        document.getElementById('account-balance').innerText = newBalance;
        // add new element
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
       div.innerHTML = `
       <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOutInput} Tk. Withdrawn</p>
       `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Your are failed to cash out! Please try again')
    }
})