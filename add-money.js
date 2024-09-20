// call function to get add money


document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    // get the input value
    const addMoneyInput = getInputFieldValueById('add-money-input');
    const pinNumberInput = getInputFieldValueById('pin-number-input');
    // verify the pin number but this is wrong way to verify

    // validation 
    if(isNaN(addMoneyInput)){
        alert('Your are failed to add money! please try again');
        return;
    }

    if(pinNumberInput === 1234){
       const balance = getTextFieldValueById('account-balance');
       const newBalance = balance + addMoneyInput;
    //    connect to the dom
    document.getElementById('account-balance').innerText = newBalance;
// add new element in transaction container
const p = document.createElement('p');
p.innerText = `Added: ${addMoneyInput} Tk. New-Balance: ${newBalance}.`

document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert('Your are failed to add money! Please try again.')
    }
})