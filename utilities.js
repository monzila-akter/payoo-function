function getInputFieldValueById (id){
   const inputValue = document.getElementById(id).value;
   const inputNumber = Number(inputValue);
   return inputNumber;
}

function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue);
    return textNumber;
}

function getSectionValueById (id){
    // hide all the section
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    // show the section which is clicked
    document.getElementById(id).classList.remove('hidden');
}