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