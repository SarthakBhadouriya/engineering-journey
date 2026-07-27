function getNumber(){
    return {
        num1: Number(document.getElementById("num1-el").value),
        num2: Number(document.getElementById("num2-el").value)
    }
}
let sum;

function add() {
    let{num1,num2} = getNumber()
    sum = num1 + num2
    document.getElementById("sum-el").textContent = sum;
}

function subtract(){
    let{num1,num2} = getNumber()
    sum = num1-num2;
    document.getElementById("sum-el").textContent = sum
}

function divide() {
    let{num1,num2} = getNumber()
    sum = num1 / num2
    document.getElementById("sum-el").textContent = sum;
}

function multiply() {
    let{num1,num2} = getNumber()
    sum = num1 * num2
    document.getElementById("sum-el").textContent = sum;
}


