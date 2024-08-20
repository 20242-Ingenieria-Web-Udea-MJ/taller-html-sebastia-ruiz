"use strict";
const display = document.getElementById("display");
const operationHistory = document.getElementById("history");
if (!display || !operationHistory) {
    throw new Error("Display or history element not found");
}
let displayValue = "0";
let expression = []; // To store the sequence of numbers and operators
let currentOperator = "";
let resultCalculated = false; // Flag to check if the result was just calculated
function updateDisplay(value) {
    display.textContent = value;
}
function updateHistory() {
    operationHistory.textContent = expression.join(" ");
}
function clearAll() {
    displayValue = "0";
    expression = [];
    currentOperator = "";
    resultCalculated = false;
    updateDisplay(displayValue);
    operationHistory.textContent = "";
}
function handleNumber(number) {
    if (resultCalculated) {
        // If a result was just calculated, start a new expression
        displayValue = number;
        resultCalculated = false;
        expression = [];
    }
    else if (displayValue === "0" || currentOperator) {
        displayValue = number;
    }
    else {
        displayValue += number;
    }
    currentOperator = "";
    updateDisplay(displayValue);
    updateHistory(); // Update history with the new number
}
function handleOperator(operator) {
    if (currentOperator) {
        expression.pop(); // Replace the previous operator
    }
    else {
        expression.push(parseFloat(displayValue)); // Push the last number to the expression
    }
    if (resultCalculated) {
        expression = [parseFloat(displayValue)];
        resultCalculated = false;
    }
    expression.push(operator);
    currentOperator = operator;
    updateHistory(); // Update history after operator is added
}
function calculate() {
    if (currentOperator)
        return;
    expression.push(parseFloat(displayValue)); // Push the last number to the expression
    let result = evaluateExpression(expression);
    if (result === "Error") {
        displayValue = "Error";
        expression = [];
    }
    else {
        displayValue = result.toString();
        expression = [result]; // Reset the expression to the result
    }
    resultCalculated = true;
    updateDisplay(displayValue);
    updateHistory(); // Update history after calculation
}
function evaluateExpression(exp) {
    let result = exp[0];
    for (let i = 1; i < exp.length; i += 2) {
        const operator = exp[i];
        const nextNumber = exp[i + 1];
        switch (operator) {
            case "+":
                result += nextNumber;
                break;
            case "−":
                result -= nextNumber;
                break;
            case "×":
                result *= nextNumber;
                break;
            case "÷":
                if (nextNumber === 0) {
                    return "Error"; // Return error if user try to divide by zero
                }
                result /= nextNumber;
                break;
            default:
                return result;
        }
    }
    return result;
}
function handleButtonClick(event) {
    const target = event.target;
    const action = target.dataset.action;
    const buttonText = target.textContent;
    if (!action) {
        handleNumber(buttonText);
    }
    else if (action === "clear") {
        clearAll();
    }
    else if (action === "equals") {
        calculate();
    }
    else {
        handleOperator(buttonText);
    }
}
document.querySelectorAll(".calculator__button").forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
clearAll(); // Initialize the display
