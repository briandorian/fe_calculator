const buttons = document.querySelectorAll(".calc-button");
const resultScreen = document.querySelector(".result");
let buffer = 0;

buttons.forEach(function (number){
    number.addEventListener("click",function(event){ 
        if (isNaN(parseInt(event.target.innerText))){
            issymbol(event);
        }else
            isnumber(event);
    });
    updateResultScreen();
});

function updateResultScreen(){
    resultScreen.innerText=buffer;
}

function issymbol(event){
    switch (event.target.innerText){
        case "C":
            clearState(); 
        break;
        case "<-":
            oneLess();
            break;
        case "X":
            multiplying(event);
        break;
        case "-": 
        break;

        case "+":
        break;
    }
}

function isnumber(event){
    console.log("Entra al isnumber ");
    if (document.querySelector(".result").innerHTML === "0")
        resultScreen.innerHTML = event.target.innerText;
     else 
        resultScreen.innerHTML += event.target.innerText;
}

function clearState() {
    buffer = 0;
    document.querySelector(".result").innerHTML = "0";
}


function oneLess() {
    if (document.querySelector(".result").innerText !== "0"){
        let length = document.querySelector(".result").innerHTML.length;
        let newResult = document.querySelector(".result").innerHTML.substring(length-1, 0);
        if (length <= 1){
            return document.querySelector(".result").innerHTML = "0";
        }else
            return document.querySelector(".result").innerHTML = newResult;
    }
}

function multiplying(event) {
    if (buffer !== 0){
        numberInScreen = parseInt(document.querySelector(".result").innerHTML);
        document.querySelector(".result").innerHTML = (buffer * numberInScreen).toString();
        buffer = 0;
    }else{
        buffer = parseInt(document.querySelector(".result").innerHTML);
        document.querySelector(".result").innerHTML = "0";
    }
}