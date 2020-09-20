const buttons = document.querySelectorAll(".calc-button");
const resultScreen = document.querySelector(".result");
let buffer = "0";
let operator = "";
let previousOperator= "";
let total=0;

buttons.forEach(function (number){
    number.addEventListener("click",function(event){ 
        if (isNaN(parseInt(event.target.innerText))){
            issymbol(event.target.innerText);
        }else
            isnumber(event.target.innerText);

        updateResultScreen();
    });
});

function updateResultScreen(){
    resultScreen.innerText=buffer;
}

function issymbol(symbol){
    switch (symbol){
        case "C":
            clearState();
        break;
        case "<-":
            oneLess();
            break;
        case "X":
        case "-":
        case "+":
        case "/":
            doTheMath(symbol);
        break;
        case "=":
            if (previousOperator === null) {
                // need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = +total;
            total = 0;
            break;
    }
}

function isnumber(value){
    if (buffer === "0")
        buffer = value;
    else
        buffer += value;
}

function clearState() {
    buffer = 0;
}

function oneLess() {
    if (buffer !== "0"){
        let length = resultScreen.innerHTML.length;
        let newResult = resultScreen.innerHTML.substring(length-1, 0);
        if (length <= 1){
            buffer = "0";
        }else
            buffer = newResult;
    }
}

function doTheMath(value) {
    if (buffer === "0"){
        return;
    }
    let innerBuffer = parseInt(buffer);
    if (total === 0)
        total = innerBuffer;
    else    
        flushOperation(innerBuffer);

    previousOperator = value;
    buffer = "0";
}

function flushOperation(innerBuffer) {
    if (previousOperator === "+") {
        total += innerBuffer;
    } else if (previousOperator === "-") {
        total -= innerBuffer;
    } else if (previousOperator === "X") {
        total *= innerBuffer;
    } else {
        total /= innerBuffer;
    }
}