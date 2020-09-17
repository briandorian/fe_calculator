var buttons = document.querySelectorAll(".calc-button");
let resultado = document.querySelector(".result").innerHTML;

buttons.forEach(function (number){
    number.addEventListener("click",function(){  
        switch (event.target.innerText) {
            case "+":
                addition();
                break;
            case "-":
                substraction();
                break;
            case "/":
                dividing();
                break;
            case "X":
                multiplying();
                break;
            case "C":
                refresh();
                break;
            case "=":
                showResult();
                break;
            default:
                appendNumberToResult(this.innerText);
        }  
    });
});

function refresh(){
    return document.querySelector(".result").innerHTML = "0";
}
function addition() {
    resultado = event.target.innerText+0 + resultado;
    document.querySelector(".result").innerHTML = "0";
    return document.querySelector(".result").innerHTML = resultado.getText;
}
function substraction() {
    return document.querySelector(".result").innerHTML = "0";
}
function dividing() {
    return document.querySelector(".result").innerHTML = "0";
}
function multiplying() {
    return document.querySelector(".result").innerHTML = "0";
}
function showResult() {
    return document.querySelector(".result").innerHTML = "0";
}
function appendNumberToResult() {
    if (resultado === "0")
    {
        resultado=event.target.innerText;
        return document.querySelector(".result").innerHTML = event.target.innerText;
    }
    else if (resultado+0 > 0)
        return resultado= document.querySelector(".result").innerHTML = resultado+event.target.innerText;
        
}
