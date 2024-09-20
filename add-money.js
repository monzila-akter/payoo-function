// call function to get add money


document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('add money clicked');
    getInputFieldValueById();
})