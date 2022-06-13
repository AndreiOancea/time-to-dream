// Required elements

const myButton = document.getElementById('myButton');

// Functionality

function calculate() {
    let dream = parseInt(document.getElementById('dream').value);
    let money = parseInt(document.getElementById('money').value);
    let resultM = document.getElementById('resultM').value = dream / money;
    let resultY = document.getElementById('resultY').value = ((dream / money) / 12).toFixed(1);
}

myButton.addEventListener('click', calculate);

