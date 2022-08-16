function add(num1, num2) {
    return Number(num1 + num2)
}

function subtract(num1, num2) {
    return Number(num1 - num2)
}

function multiply(num1, num2) {
    return Number(num1 * num2)
}

function divide(num1, num2) {
    return Number(num1 / num2)
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2)
            break
        
        case '-':
            return subtract(num1, num2)
            break
    
        case 'x':
           return multiply(num1, num2)
            break
        
        case '/':
            return divide(num1, num2)
    }      
}

let equationDisplay = document.querySelector('.equationDisplay')
let resultDisplay = document.querySelector('.resultDisplay')

let valueBtns = document.querySelectorAll('.valueBtn')
let operationBtns = document.querySelectorAll('.operationBtn')

valueBtns.forEach(valueBtn => {
    valueBtn.addEventListener('click', addToDisplay)
});

operationBtns.forEach(operationBtn => {
    operationBtn.addEventListener('click', addOperation)
})

equalsBtn = document.querySelector('#equalsBtn')
equalsBtn.addEventListener('click', calculate)

function addToDisplay(e) {
    let resultDisplayValue = resultDisplay.textContent
    let currentBtnValue = e.target.textContent

    if (currentBtnValue === '.' && resultDisplayValue.includes('.')) return
    
    if (resultDisplay.textContent === '0' && !isNaN(Number(currentBtnValue))) {
        resultDisplay.textContent = currentBtnValue
    }

    else {
        resultDisplay.textContent += currentBtnValue
    }
}

function addOperation(e) {
    let resultDisplayValue = resultDisplay.textContent
    let operationBtnValue = e.target.textContent

    if (resultDisplayValue.includes('+-x/')) return

    equationDisplay.textContent = `${resultDisplayValue} ${operationBtnValue}`

    resultDisplay.textContent = 0
}

function calculate() {
    let resultDisplayValue = resultDisplay.textContent
    let equationDisplayValue = equationDisplay.textContent

    let operation = equationDisplayValue.slice(-1)

    if (operation === '=') return

    let num1 = Number(equationDisplayValue.slice(0, -2))
    let num2 = Number(resultDisplayValue)

    if (!(num1 && num2)) return resultDisplayValue

    equationDisplay.textContent += ` ${resultDisplayValue} =`

    resultDisplay.textContent = operate(operation, num1, num2)
}