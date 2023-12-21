let operationCalled = false;

let digit = document.querySelectorAll('.digits');
digit.forEach(button => {
    button.addEventListener('click', function() {
        display(button.value);
    });
});


function display(num) {
    document.getElementById("calculation-box").value += num;
}

function clear() {
    document.getElementById('calculation-box').value = '';
}

function operation(operator) {
    operationCalled = true;
    //switch case
    switch (operator) {
        case "+":
            
        case "-":
            break;
        case "*":
            break;
        case "/":
            break;
    }
}

function input(num) {
    //displays first number typed
    if (!operationCalled) {
        display(num)
    }
    //once operator is clicked, wait for second num,
    //once second num is inputed() (use input func again) clear display first and perform calculation
}

function calculation() {

}


//things to fix later on,
// do not allow user to type more than one decimal point