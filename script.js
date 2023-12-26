let runningTotal = 0;
let firstNumber = null;
let currentNumber = null;
let currentOperator = null; 
const screen = document.getElementById('screen');
//let num = document.getElementsByClassName('.digits');

function updateDisplay() {
    screen.value = currentNumber !== null ? currentNumber : firstNumber !== null ? firstNumber : '0';
}

function numInput(num) {
    if (isNaN(num)) {
        handleOperator(num);
    } else {
        handleNumber(num);
    }
}

function handleNumber(num) {
    if (currentNumber === null) {
        currentNumber = num;
    } else {
        currentNumber += num;
    }
    updateDisplay();
}

function handleOperator() {
    if (currentNumber === null) {

    }
}

function math(operation) {
    if (operation === "+") { // addition

    } else if (operation === "-") { // subtraction

    } else if (operation === "*") { // multiplication

    } else if (operation === "/") { // division

    } else {
        return;
    }
}


function main() {
    const digits = document.querySelectorAll('.digits');
    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            numInput(parseInt(digit.value));
        });
    });

    
    
}

function numInput(num) {
    if (isNaN(num)) {
        handleOperator(num);
    } else {
        handleNumber(num);
    }
}

main();





//things to fix later on,
// do not allow user to type more than one decimal point

//needs to be some kind of pass on between numbers. second num always becomes first num after they are calculated to keep it going.