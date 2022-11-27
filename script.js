function initialize() {
    generateDigit1 = Math.floor(Math.random() * 3) + 1;
    generateDigit2 = Math.floor(Math.random() * 3) + 1;
    generateDigit3 = Math.floor(Math.random() * 3) + 1;
    generateDigit1 = generateDigit1.toString();
    generateDigit2 = generateDigit2.toString();
    generateDigit3 = generateDigit3.toString();
    tries = 7;
    userOutput = document.getElementById("USER");
    counterOutput = document.getElementById("COUNTER");
    outputOutput = document.getElementById("OUTPUT");
    logOutput = document.getElementById("CODES");
    retryOutput = document.getElementById("RETRY");
    retryOutput.style.visibility = 'hidden';
    output = "INVALID";
    userDigit1 = "*";
    userDigit2 = "*";
    userDigit3 = "*";
    display();
}

function buttonClick(number) {
    if (output == "INVALID" && tries > 0) {
        if (userDigit1 == "*") {
            userDigit1 = number.toString();
        }
        else if (userDigit2 == "*") {
            userDigit2 = number.toString();
        }
        else if (userDigit3 == "*") {
            userDigit3 = number.toString();
        }
    }
    
    display();
    if ((userDigit1 != "*") && (userDigit2 != "*") && (userDigit3 != "*") && (tries > 0)) {
        enter();
        clearCode();
    }
}

function enter() {
    tries -= 1;
    if (generateDigit1 == userDigit1 && generateDigit2 == userDigit2 && generateDigit3 == userDigit3) {
        output = "CORRECT";
        retryOutput.style.visibility = 'visible';
    }
    if (tries == 0) {
        retryOutput.style.visibility = 'visible';
    }

    displayOutput();
}

function clearCode() {
    userDigit1 = "*";
    userDigit2 = "*";
    userDigit3 = "*";
    display();
}

function playAgain() {
    if (tries == 0 || output == "CORRECT") {
        userOutput.innerHTML = "CODE";
        outputOutput.innerHTML = "OUTPUT";
        logOutput.innerHTML = "";
        counterOutput.innerHTML = "TURNS LEFT: " + 7;
        initialize();
    }
}

function display() {
    userOutput.innerHTML = userDigit1 + userDigit2 + userDigit3;
}

function displayOutput() {
    outputOutput.innerHTML = output;
    counterOutput.innerHTML = "TURNS LEFT: " + tries;

    userFullCode = userDigit1 + userDigit2 + userDigit3;
    generateFullCode = generateDigit1 + generateDigit2 + generateDigit3;
    if (parseInt(userFullCode) < parseInt(generateFullCode)) {
        logOutput.innerHTML += userDigit1 + userDigit2 + userDigit3 + ": Guess Too Low" + "<br>";
    }
    else if (parseInt(userFullCode) > parseInt(generateFullCode)) {
        logOutput.innerHTML += userDigit1 + userDigit2 + userDigit3 + ": Guess Too High" + "<br>";
    }
    else {
        logOutput.innerHTML += userDigit1 + userDigit2 + userDigit3 + ": CORRECT" + "<br>";
    }
}