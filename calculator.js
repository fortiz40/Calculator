var calculatorScreen = document.querySelector("#calc-screen");
var errorMessage = document.querySelector(".error-message");

function insertItem(item) {
    calculatorScreen.value = calculatorScreen.value + item;
}

function clearScreen() {
    calculatorScreen.value = '';
}

function equals() {

    // If there is no expression to evaluate
    if (calculatorScreen.value === ''){
        errorMessage.innerHTML = "There was no input!"
        errorMessage.classList.add("displayed");
        return;
    }

    var result;
    try{
        result = eval(calculatorScreen.value)
    }
    catch{
        errorMessage.innerHTML = "Invalid expression";
        errorMessage.classList.add("displayed");
    }
    
    if (result) {
        calculatorScreen.value = result;
        errorMessage.classList.remove("displayed");
    }
}

