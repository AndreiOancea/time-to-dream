// Required elements

const myButton = document.getElementById('myButton');

// Functionality

function calculate() {
    let dream = parseInt(document.getElementById('dream').value);
    let money = parseInt(document.getElementById('money').value);
    let select = document.getElementById('period');
    let value = select.options[select.selectedIndex].value;

    if (value === 'd') {
        document.getElementById('resultM').value = parseFloat(((dream / money) / 30).toFixed(1));
        document.getElementById('resultY').value = parseFloat(((dream / money) / 365).toFixed(1));
    } else if (value === 'm') {
        document.getElementById('resultM').value = parseFloat((dream / money).toFixed(1));
        document.getElementById('resultY').value = parseFloat(((dream / money) / 12).toFixed(1));
    } else if (value === 'y') {
        document.getElementById('resultM').value = parseFloat(((dream / money) * 12).toFixed(1));
        document.getElementById('resultY').value = parseFloat((dream / money).toFixed(1));
    }

    // let resultM = document.getElementById('resultM').value = dream / money;
    // let resultY = document.getElementById('resultY').value = ((dream / money) / 12).toFixed(1);
}

myButton.addEventListener('click', calculate);

