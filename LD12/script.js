function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;

    if (!isValidNumber(number1) || !isValidNumber(number2)) {
        alert('Įveskite skaičius nuo 1 iki 10.');
        return;
    }

    var sum = parseInt(number1, 10) + parseInt(number2, 10);
    var result = `
Vartotojo vardas: ${firstName}
Pavardė: ${lastName}
Skaičių suma: ${sum}`;

    document.getElementById('output').textContent = result;

    // Spalvos pritaikymas
    var resultDiv = document.getElementById('result');
    resultDiv.style.color = sum <= 7 ? 'red' : (sum > 7 && sum <= 14 ? 'orange' : 'green');
}

function isValidNumber(value) {
    return /^\d+$/.test(value) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 10;
}
