// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper: get input values
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Helper: display result
function updateResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event Listeners
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getNumbers();
    updateResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getNumb
