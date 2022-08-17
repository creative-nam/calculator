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

    if (num1 === null || num2 === null) return resultDisplayValue

    equationDisplay.textContent += ` ${resultDisplayValue} =`

    resultDisplay.textContent = operate(operation, num1, num2)
}

function clear() {
    equationDisplay.textContent = ''
    resultDisplay.textContent = '0'
}

function deleteLastChar() {
    let resultDisplayValue = resultDisplay.textContent
    let equationDisplayValue = equationDisplay.textContent

    let lastCharOfEquation = equationDisplayValue.slice(-1)
    
    if (equationDisplayValue) {
        if (lastCharOfEquation === '=') {
            let positionOfOperator = equationDisplayValue.search(/[+|-|x|/]/)

            let charsUntilOperator = equationDisplayValue.slice(0, (positionOfOperator + 1))
            equationDisplay.textContent = charsUntilOperator

            let charsAfterOperator = equationDisplayValue.slice((positionOfOperator + 2), -2)
            resultDisplay.textContent = charsAfterOperator
        }

        else {
            resultDisplay.textContent = resultDisplayValue.slice(0, -1)

            if (resultDisplay.textContent === '') {
                resultDisplay.textContent = equationDisplayValue.slice(0, -2)
                equationDisplay.textContent = ''
            }
        }
    }

    else {
        if (resultDisplayValue === 0) return

        if (resultDisplayValue.length === 1) {
            resultDisplay.textContent = '0'
        }

        else {
            resultDisplay.textContent = resultDisplayValue.slice(0, -1)
        }
    }
}

let equationDisplay = document.querySelector('#equationDisplay')
let resultDisplay = document.querySelector('#resultDisplay')

let valueBtns = document.querySelectorAll('.valueBtn')
let operationBtns = document.querySelectorAll('.operationBtn')

valueBtns.forEach(valueBtn => {
    valueBtn.addEventListener('click', addToDisplay)
});

operationBtns.forEach(operationBtn => {
    operationBtn.addEventListener('click', addOperation)
})

let equalsBtn = document.querySelector('#equalsBtn')
equalsBtn.addEventListener('click', calculate)

let clearBtn = document.querySelector('#clearBtn')
clearBtn.addEventListener('click', clear)

let deleteBtn = document.querySelector('#deleteBtn')
deleteBtn.addEventListener('click', deleteLastChar)  