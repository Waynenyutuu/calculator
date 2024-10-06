document.getElementById('convertButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const baseInput = parseInt(document.getElementById('baseInput').value);
    const baseOutput = parseInt(document.getElementById('baseOutput').value);
    
    // Convert input number to decimal (base 10)
    const decimalNumber = parseInt(numberInput, baseInput);
    
    // Convert decimal number to the desired output base
    let convertedNumber;
    if (baseOutput === 10) {
        convertedNumber = decimalNumber.toString(10);
    } else if (baseOutput === 2) {
        convertedNumber = decimalNumber.toString(2);
    } else if (baseOutput === 8) {
        convertedNumber = decimalNumber.toString(8);
    } else if (baseOutput === 16) {
        convertedNumber = decimalNumber.toString(16).toUpperCase(); // Convert to uppercase for hexadecimal
    }

    // Display the converted result
    document.getElementById('convertedResult').textContent = convertedNumber;
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('numberInput').value = '';
    document.getElementById('baseInput').value = '10'; // Reset to Decimal
    document.getElementById('baseOutput').value = '10'; // Reset to Decimal
    document.getElementById('convertedResult').textContent = '-';
});
